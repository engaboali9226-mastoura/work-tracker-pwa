import type {
  SubCategory,
} from "../models/sub-category.model";

export interface SubCategoryRepository {
  findById(
    subCategoryId: string,
  ): Promise<SubCategory | null>;

  findByCategoryId(
    categoryId: string,
  ): Promise<SubCategory[]>;

  findAll(): Promise<SubCategory[]>;

  save(
    subCategory: SubCategory,
  ): Promise<void>;
}
