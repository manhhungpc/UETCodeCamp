import { Router } from "express";
import { login, register } from "../controllers/AuthController";

const authRoute = new Router();

// /auth/login
authRoute.post("/login", login);

authRoute.post("/register", register);

export default authRoute;
