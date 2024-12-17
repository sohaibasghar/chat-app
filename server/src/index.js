import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";

import { connectDb } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.SOCKET_URL || "*",
    credentials: true,
  })
);

app.use("/test", (req, res) => {
  res.json({ message: "Welcome to chat app API", status: "success" });
});
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  console.log("production");
}

server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDb();
});
