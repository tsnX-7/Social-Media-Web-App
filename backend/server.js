import express from "express";
import authRoutes from "./Routes/auth.routes.js";
import dotenv from "dotenv";
import { connectMongoDB } from "./db/connectMongoDB.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running of port ${PORT}`);
  connectMongoDB();
});
