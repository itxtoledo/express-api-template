import express from "express";
import AuthRoutes from "./routes/Auth";
import UserRoutes from "./routes/User";
import connectDB from "./services/db";

const app = express();

const db = connectDB();

app.use(AuthRoutes);
app.use(UserRoutes);

app.listen(80);
