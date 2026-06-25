import type {
  TaskCategoryRepository,
} from "../repositories/task-category.repository";

export interface TaskCategoryQueryDependencies {
  taskCategoryRepository:
    TaskCategoryRepository;
}
