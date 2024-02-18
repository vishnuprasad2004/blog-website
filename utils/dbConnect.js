import mongoose from "mongoose";

/**
 * Connecting to the database
 */
export default async function connectDb() {
    const connection = await mongoose
        .connect("mongodb://127.0.0.1:27017/blog-website")
        .then(() => {
            console.log("[database] connected with database");
        })
        .catch((e) => {
            console.log(e);
        });
}

