import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

const BASE_URL = "/api/v1";
// Test route
app.get(`${BASE_URL}/test`, (req, res) => {
  res.send("Test server works!");
});

//routes import
import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routs.js";

//routes declaration
app.use(`${BASE_URL}/user`, userRouter);
app.use(`${BASE_URL}/posts`, postRouter);

// http://localhost:8000/api/v1/users/register

export { app };
