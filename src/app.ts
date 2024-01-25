import express from "express";
import cors from "cors";
import globalRouter from "./app/router/router";
import apiNotFound from "./app/middleware/apiNotFound";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// route
app.use("/api/v1", globalRouter);

// API route not found
app.use("*", apiNotFound);

export default app;
