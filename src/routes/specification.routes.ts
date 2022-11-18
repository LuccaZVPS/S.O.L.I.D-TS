import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecificationController } from "../modules/cars/useCases/listSpecification";
const router = Router();
router.post("/", (req, res) => {
  createSpecificationController.handler(req, res);
});

router.get("/", (req, res) => {
  listSpecificationController.handler(req, res);
});
export default router;
