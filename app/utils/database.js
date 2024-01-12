// app/utils/database.js

import mongoose from "mongoose";

const connectDB = async () => {

    const mongoDriver = "mongodb+srv://77fz8zmr:dfvwXPXSG0v13s3s@cluster0.umy2u7r.mongodb.net/nextAppDataBase?retryWrites=true&w=majority";

    try {
        await mongoose.connect(mongoDriver);
        console.log("Succes: Connected to MongoDB");
    } catch (err) {
        console.log("Failure: Unconnencted to MongoDB");
        throw new Error();
    }
};

export default connectDB;