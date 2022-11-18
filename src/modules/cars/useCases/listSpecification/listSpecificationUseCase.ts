import { SpecificationRepository } from "../../repositories/SpecificationRepository";

export class ListSpecificationUseCase {
  constructor(private specificationRepository: SpecificationRepository) {}
  execute() {
    return this.specificationRepository.list();
  }
}
