import express, { Request, Response } from "express";
import cors from "cors";
import globalRouter from "./app/router/router";
import apiNotFound from "./app/middleware/apiNotFound";
import globalErrorHandle from "./app/middleware/globalErrorHandler";

const app = express();

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: "https://smartphone-management-by-adnan-sarkar.netlify.app",
    credentials: true,
  }),
);

// route
app.use("/api/v1", globalRouter);

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the smartphone managementdashboard backend API",
    details: "For github repository, visit: ",
    documentation: "For API documentation, visit: ",
  });
});

// API route not found
app.use("*", apiNotFound);

// global error handler
app.use(globalErrorHandle);

export default app;
