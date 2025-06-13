import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://kavindaashan344:kavinda1234@cluster0.wgzut7x.mongodb.net/todo');
    console.log("MongoDB Connected Successfully");
}