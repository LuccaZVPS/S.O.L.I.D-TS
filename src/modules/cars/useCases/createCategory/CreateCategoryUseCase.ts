import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}
export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute({ description, name }: IRequest) {
    const categoryAlreadyExist = this.categoriesRepository.findByName(name);
    if (categoryAlreadyExist) {
      throw new Error("Category already exist");
    }
    this.categoriesRepository.create({ description, name });
  }
}
