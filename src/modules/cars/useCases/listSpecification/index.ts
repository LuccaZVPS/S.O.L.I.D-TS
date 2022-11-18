import { SpecificationRepository } from "../../repositories/SpecificationRepository";
import { ListSpecificationController } from "./listSpecificationController";
import { ListSpecificationUseCase } from "./listSpecificationUseCase";

const specificationRepository = SpecificationRepository.getInstance();
const listSpecificationUseCase = new ListSpecificationUseCase(
  specificationRepository
);
export const listSpecificationController = new ListSpecificationController(
  listSpecificationUseCase
);
