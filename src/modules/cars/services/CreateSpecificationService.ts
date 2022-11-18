import { ICreatespecificationDTO } from "../repositories/implementations/ISpecificationRepository";
import { SpecificationRepository } from "../repositories/SpecificationRepository";

export class CreateSpecificationService {
  constructor(private specificationRepository: SpecificationRepository) {}
  execute({ description, name }: ICreatespecificationDTO) {
    const specificationAlreadyExist =
      this.specificationRepository.findByName(name);
    if (specificationAlreadyExist) {
      throw new Error("Specification already exist");
    }
    this.specificationRepository.create({ description, name });
  }
}
