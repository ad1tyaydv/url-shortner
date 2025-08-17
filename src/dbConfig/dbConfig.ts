import mongoose from "mongoose";

export async function connect() {

    try {
        mongoose.connect(process.env.MONGO_URL!);

        const isConnected = mongoose.connection;

        isConnected.on('connected', () => {
            console.log("MongoDB connected successfully");
        })

        isConnected.on('error', (err) => {
            console.log("Error while connecting to MongoDB", err);
            process.exit();
        })

    } catch (error) {
        console.log("Error while connecting to mongoDB")
        console.log(error);
    }
}