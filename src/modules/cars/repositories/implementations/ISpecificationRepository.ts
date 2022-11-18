import { Specification } from "../../models/Specification";

export interface ICreatespecificationDTO {
  name: string;
  description: string;
}
export interface ISpecificationRepository {
  create({ description, name }: ICreatespecificationDTO): void;
  findByName(name: string): Boolean;
  list(): Specification[];
}
