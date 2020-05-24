import express from "express";
import * as AuthController from "../controllers/Auth";

const routes = express.Router();

routes.get("/auth/register", AuthController.register);
routes.get("/auth/login", AuthController.login);
routes.get("/auth/lostPassword ", AuthController.lostPassword);
routes.get("/auth/resetPassword", AuthController.resetPassword);

export default routes;
