import { Router } from "express";
import categoriesRoutes from "./routes/categories.routes";
import specificationRoutes from "./routes/specification.routes";
const allRoutes = Router();
allRoutes.use("/categories", categoriesRoutes);
allRoutes.use("/specification", specificationRoutes);

export default allRoutes;
