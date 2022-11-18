import { SpecificationRepository } from "../../repositories/SpecificationRepository";
import { CreateSpecificationController } from "./createSpecificationController";
import { CreateSpecificationUseCase } from "./createSpecificationUseCase";

const specificationRepository = SpecificationRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
);
export const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);
