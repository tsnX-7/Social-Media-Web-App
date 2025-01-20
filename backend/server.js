import express from "express";
import authRoutes from "./Routes/auth.routes.js";
import dotenv from "dotenv";
import { connectMongoDB } from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //to parse form data, but urlencoded
app.use(cookieParser()); //to parse cookies

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running of port ${PORT}`);
  connectMongoDB();
});
