import { CategoryRepository } from "../../repositories/CategoriesRepository";
import { ListCategoryController } from "./listCategoryController";
import { ListCategoryUseCase } from "./listCategoryUseCase";

const categoriesRepository = CategoryRepository.getInstance();
const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);
export const listCategoryController = new ListCategoryController(
  listCategoryUseCase
);
