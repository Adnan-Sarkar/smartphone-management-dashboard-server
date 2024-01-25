import express from "express";
import cors from "cors";
import globalRouter from "./app/router/router";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// route
app.use("/api/v1", globalRouter);

export default app;
