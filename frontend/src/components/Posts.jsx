import { useEffect } from "react";
import Post from "./Post";
import PostSkeleton from "./PostSkeleton";

import { useQuery } from "@tanstack/react-query";

const Posts = ({ feedType, username, userId }) => {
	const POST_END_POINT = (() => {
		switch (feedType) {
			case "forYou":
				return "/api/posts/all";
			case "following":
				return "/api/posts/following";
			case "posts":
				return `/api/posts/user/${username}`;
			case "likes":
				return `/api/posts/liked/${userId}`;
			default:
				return "/api/posts/all";
		}
	})();
	const {
		data: posts,
		isLoading,
		refetch,
		isRefetching,
	} = useQuery({
		queryKey: ["posts"],
		queryFn: async () => {
			try {
				const res = await fetch(POST_END_POINT);
				const data = await res.json();
				if (!res.ok) throw new Error(data.error || "Something went wrong");
				return data;
			} catch (error) {
				throw new Error(error);
			}
		},
	});
	useEffect(() => {
		refetch();
	}, [feedType, username, refetch]);

	return (
		<>
			{isLoading ||
				(isRefetching && (
					<div className="flex flex-col justify-center">
						<PostSkeleton />
						<PostSkeleton />
						<PostSkeleton />
					</div>
				))}
			{!isLoading && !isRefetching && posts?.length === 0 && (
				<p className="text-center my-4">No posts in this tab. Switch 👻</p>
			)}
			{!isLoading && !isRefetching && posts && (
				<div>
					{posts.map((post) => (
						<Post key={post._id} post={post} />
					))}
				</div>
			)}
		</>
	);
};
export default Posts;
