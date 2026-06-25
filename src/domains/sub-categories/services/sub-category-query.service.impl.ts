import type {
  SubCategory,
} from "../models/sub-category.model";

import type {
  SubCategoryQueryDependencies,
} from "./sub-category-query.dependencies";

import type {
  SubCategoryQueryService,
} from "./sub-category-query.service";

export class SubCategoryQueryServiceImpl
  implements SubCategoryQueryService
{
  private readonly subCategoryRepository;

  constructor(
    dependencies: SubCategoryQueryDependencies,
  ) {
    this.subCategoryRepository =
      dependencies.subCategoryRepository;
  }

  async getSubCategory(
    subCategoryId: string,
  ): Promise<SubCategory | null> {
    return this.subCategoryRepository.findById(
      subCategoryId,
    );
  }

  async getSubCategories(): Promise<SubCategory[]> {
    return this.subCategoryRepository.findAll();
  }

  async getSubCategoriesByCategory(
    categoryId: string,
  ): Promise<SubCategory[]> {
    return this.subCategoryRepository.findByCategoryId(
      categoryId,
    );
  }
}
