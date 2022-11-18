import { Category } from "../../models/cetegory";
export interface ICreateCategoryDTO {
  name: string;
  description: string;
}
export interface ICategoriesRepository {
  findByName: (name: string) => boolean;
  list(): Category[];
  create({}: ICreateCategoryDTO): void;
}
