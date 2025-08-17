import mongoose, { connection } from "mongoose";

export async function connect() {

    try {
        mongoose.connect(process.env.MONGO_URL!);

        const isConnected = mongoose.connection;

        connection.on('connected', () => {
            console.log("MongoDB connected successfully");
        })

        connection.on('error', (err) => {
            console.log("Error while connecting to MongoDB", err);
            process.exit();
        })

    } catch (error) {
        console.log("Error while connecting to mongoDB")
        console.log(error);
    }
}