import mongoose from "mongoose";


const url = process.env.MONGODB_URI

export const ConnectDB = async () => {
  await mongoose.connect(
    url,
    {
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    },
  );
  console.log("DB Connected");
};
