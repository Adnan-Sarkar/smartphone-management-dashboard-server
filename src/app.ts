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
    origin: [
      "https://smartphone-management-by-adnan-sarkar.netlify.app",
      "http://localhost:5173",
    ],
    credentials: true,
  }),
);

// route
app.use("/api/v1", globalRouter);

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the smartphone managementdashboard backend API",
    clientSite:
      "For frontend live, visit: https://smartphone-management-by-adnan-sarkar.netlify.app",
    details:
      "For github repository, visit: https://github.com/Porgramming-Hero-web-course/l2b2-full-stack-a5-server-side-Adnan-Sarkar",
    documentation:
      "For API documentation, visit: https://documenter.getpostman.com/view/15069256/2s9YywdeFS",
  });
});

// API route not found
app.use("*", apiNotFound);

// global error handler
app.use(globalErrorHandle);

export default app;
