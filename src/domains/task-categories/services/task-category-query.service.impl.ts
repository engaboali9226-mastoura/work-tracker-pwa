import type {
  TaskCategory,
} from "../models/task-category.model";

import type {
  TaskCategoryQueryDependencies,
} from "./task-category-query.dependencies";

import type {
  TaskCategoryQueryService,
} from "./task-category-query.service";

export class TaskCategoryQueryServiceImpl
  implements TaskCategoryQueryService
{
  private readonly taskCategoryRepository;

  constructor(
    dependencies: TaskCategoryQueryDependencies,
  ) {
    this.taskCategoryRepository =
      dependencies.taskCategoryRepository;
  }

  async getCategory(
    categoryId: string,
  ): Promise<TaskCategory | null> {
    return this.taskCategoryRepository.findById(
      categoryId,
    );
  }

  async getCategories(): Promise<TaskCategory[]> {
    return this.taskCategoryRepository.findAll();
  }
}
