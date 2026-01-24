import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://neetuastroguide79_db_user:ddko7RHgPZEwlL2j@neetu-mohan.5yljboq.mongodb.net/?appName=neetu-mohan",
    {
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    },
  );
  console.log("DB Connected");
};
