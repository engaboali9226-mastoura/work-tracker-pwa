import type {
  SubCategoryRepository,
} from "../repositories/sub-category.repository";

export interface SubCategoryQueryDependencies {
  subCategoryRepository:
    SubCategoryRepository;
}
