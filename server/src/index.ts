import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        const mongoUrl = process.env.MONGO_URL;

        if (!mongoUrl) {
            throw new Error("MongoDB connection URL not defined in the environment.");
        }

        await mongoose.connect(mongoUrl);
        console.log("connected to mongodb");
        
    } catch (error: Error | any) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

app.listen(8800, () => {
    console.log("Server is running on port 8800");

    connect();
});
