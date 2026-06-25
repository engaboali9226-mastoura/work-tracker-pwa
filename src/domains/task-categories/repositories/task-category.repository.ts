import type {
  TaskCategory,
} from "../models/task-category.model";

export interface TaskCategoryRepository {
  findById(
    categoryId: string,
  ): Promise<TaskCategory | null>;

  findAll(): Promise<TaskCategory[]>;

  save(
    category: TaskCategory,
  ): Promise<void>;
}
