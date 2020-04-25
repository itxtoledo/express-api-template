import express from "express";

const routes = express.Router();

routes.use("/", (req, res, next) => {
  res.json({
    success: true,
  });
});

export default routes;
