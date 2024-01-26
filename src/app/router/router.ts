import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { ProductRoutes } from "../modules/product/product.route";
import { SalesRoutes } from "../modules/sales/sales.route";

const globalRouter = express.Router();

const routeList = [
  {
    path: "/auth",
    route: UserRoutes,
  },
  {
    path: "/products",
    route: ProductRoutes,
  },
  {
    path: "/sales",
    route: SalesRoutes,
  },
];

routeList.forEach((route) => {
  globalRouter.use(route.path, route.route);
});

export default globalRouter;
