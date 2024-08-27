import mongoose from "mongoose";

const connectDB = async () => {
	console.log("Connecting to db...");
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log("MongoDB connected : ", conn.connection.host);
	} catch (error) {
		console.log("error connecting to database :", error.message);
		process.exit(1);
	}
};

export default connectDB;
