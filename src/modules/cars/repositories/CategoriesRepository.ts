import { Category } from "../models/cetegory";
import { ICategoriesRepository } from "./implementations/ICategoriesRepository";
import { ICreateCategoryDTO } from "./implementations/ICategoriesRepository";

export class CategoryRepository implements ICategoriesRepository {
  private categories: Category[];
  private static INSTANCE: CategoryRepository;
  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoryRepository {
    if (!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository();
    }
    return CategoryRepository.INSTANCE;
  }
  create({ description, name }: ICreateCategoryDTO) {
    const category: Category = new Category();
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });
    this.categories.push(category);
  }
  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): boolean {
    return (
      this.categories.filter((category) => category.name === name).length > 0
    );
  }

  remove() {}
}
