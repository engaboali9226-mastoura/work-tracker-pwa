import type {
  TaskCategory,
} from "../../../domains/task-categories/models/task-category.model";

import type {
  TaskCategoryRepository,
} from "../../../domains/task-categories/repositories/task-category.repository";

export class InMemoryTaskCategoryRepository
  implements TaskCategoryRepository
{
  private readonly categories =
    new Map<string, TaskCategory>([
      [
        "production",
        {
          categoryId: "production",
          name: "Production",
          isActive: true,
        },
      ],

      [
        "safety",
        {
          categoryId: "safety",
          name: "Safety",
          isActive: true,
        },
      ],

      [
        "quality",
        {
          categoryId: "quality",
          name: "Quality",
          isActive: true,
        },
      ],
    ]);

  async findById(
    categoryId: string,
  ): Promise<TaskCategory | null> {
    return this.categories.get(
      categoryId,
    ) ?? null;
  }

  async findAll(): Promise<TaskCategory[]> {
    return [...this.categories.values()];
  }

  async save(
    category: TaskCategory,
  ): Promise<void> {
    this.categories.set(
      category.categoryId,
      category,
    );
  }
}
