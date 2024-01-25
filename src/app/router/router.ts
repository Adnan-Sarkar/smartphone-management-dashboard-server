import express from "express";
import { userRoutes } from "../modules/user/user.route";

const globalRouter = express.Router();

const routeList = [
  {
    path: "/auth",
    route: userRoutes,
  },
];

routeList.forEach((route) => {
  globalRouter.use(route.path, route.route);
});

export default globalRouter;
