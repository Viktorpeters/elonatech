import express from "express";
import { fetchUsers } from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.get("/", fetchUsers);

export default userRouter;
