import mongoose from "mongoose";

const mongodbUrl: string = process.env.MONGODB_URL || "";

mongoose.connect(mongodbUrl, {
    dbName:"MicroService_App"
}).then(() => {
    console.log("MongoDB successfully connected");
}).catch(err => console.log(err.message));