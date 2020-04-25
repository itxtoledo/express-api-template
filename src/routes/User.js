import express from "express";
import { inicial, criar, final } from "../controllers/User";

const routes = express.Router();


// dominio.com/final
routes.use("/final", final);

// dominio.com/criar
routes.use("/criar", criar);

// dominio.com
routes.use("/", inicial);

export default routes;
