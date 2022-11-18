import { CategoryRepository } from "../../repositories/CategoriesRepository";

export class ListCategoryUseCase {
  constructor(private categoriesRepository: CategoryRepository) {}
  execute() {
    return this.categoriesRepository.list();
  }
}
