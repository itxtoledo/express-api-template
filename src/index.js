import express from "express";
import UserRoutes from "./routes/User";

const app = express();

app.use(UserRoutes);

app.listen(80);

