import express from "express";
import { inicial, criar, final } from "../controllers/User";

const routes = express.Router();

// dominio.com/final
routes.get("/final", final);

// dominio.com/criar
routes.get("/criar", criar);

// dominio.com
routes.get("/", inicial);

export default routes;
