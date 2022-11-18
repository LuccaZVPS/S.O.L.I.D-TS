import { Specification } from "../models/Specification";
import {
  ICreatespecificationDTO,
  ISpecificationRepository,
} from "./implementations/ISpecificationRepository";

export class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];
  public static INSTANCE: SpecificationRepository;
  private constructor() {
    this.specifications = [];
  }
  public static getInstance() {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }
    return SpecificationRepository.INSTANCE;
  }
  create({ description, name }: ICreatespecificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }
  findByName(name: string): Boolean {
    return (
      this.specifications.filter((specification) => specification.name === name)
        .length > 0
    );
  }
  list(): Specification[] {
    return this.specifications;
  }
}
