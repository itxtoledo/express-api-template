import express from "express";
import bodyParser from "body-parser";
import AuthRoutes from "./routes/Auth";
import UserRoutes from "./routes/User";
import connect from "./services/db";

const app = express();

const db = connect();

app.use(bodyParser());

app.use(AuthRoutes);
app.use(UserRoutes);

app.listen(3001);
