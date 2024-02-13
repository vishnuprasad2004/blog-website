import mongoose from "mongoose";

/**
 * Connecting to the database
 */
export default async function connectDb() {
    const connection = await mongoose
        .connect("mongodb://127.0.0.1:27017/appdb")
        .then(() => {
            console.log("connected with database");
        });
}

