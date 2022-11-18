import { Router } from "express";
import { Request, Response } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategory";
const categoriesRoutes = Router();
categoriesRoutes.post("/", (req: Request, res: Response) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req: Request, res: Response) => {
  listCategoryController.handle(req, res);
});

export default categoriesRoutes;
