import express from "express";
import { config } from "dotenv";
import userRouter from "./routes/user.route";

// initializes the environment file
config();

const app = express();

app.use("/users", userRouter);

app.use((error, req, res, next) => {
  return res.status(500).json({
    success: false,
    message: error?.message,
  });
});

app.listen(process.env.YOUR_PORT, () => {
  // server running on the indicated port
});
