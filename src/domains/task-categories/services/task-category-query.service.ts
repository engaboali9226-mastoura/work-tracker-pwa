import type {
  TaskCategory,
} from "../models/task-category.model";

export interface TaskCategoryQueryService {
  getCategory(
    categoryId: string,
  ): Promise<TaskCategory | null>;

  getCategories(): Promise<TaskCategory[]>;
}
