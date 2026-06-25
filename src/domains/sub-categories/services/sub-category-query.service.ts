import type {
  SubCategory,
} from "../models/sub-category.model";

export interface SubCategoryQueryService {
  getSubCategory(
    subCategoryId: string,
  ): Promise<SubCategory | null>;

  getSubCategories(): Promise<SubCategory[]>;

  getSubCategoriesByCategory(
    categoryId: string,
  ): Promise<SubCategory[]>;
}
