import type {
  SubCategory,
} from "../../../domains/sub-categories/models/sub-category.model";

import type {
  SubCategoryRepository,
} from "../../../domains/sub-categories/repositories/sub-category.repository";

export class InMemorySubCategoryRepository
  implements SubCategoryRepository
{
  private readonly subCategories =
    new Map<string, SubCategory>([
      [
        "meter-installation",
        {
          subCategoryId:
            "meter-installation",

          categoryId:
            "production",

          name:
            "Meter Installation",

          isActive: true,
        },
      ],

      [
        "cable-pulling",
        {
          subCategoryId:
            "cable-pulling",

          categoryId:
            "production",

          name:
            "Cable Pulling",

          isActive: true,
        },
      ],

      [
        "excavation",
        {
          subCategoryId:
            "excavation",

          categoryId:
            "production",

          name:
            "Excavation",

          isActive: true,
        },
      ],

      [
        "safety-observation",
        {
          subCategoryId:
            "safety-observation",

          categoryId:
            "safety",

          name:
            "Safety Observation",

          isActive: true,
        },
      ],

      [
        "quality-inspection",
        {
          subCategoryId:
            "quality-inspection",

          categoryId:
            "quality",

          name:
            "Quality Inspection",

          isActive: true,
        },
      ],
    ]);

  async findById(
    subCategoryId: string,
  ): Promise<SubCategory | null> {
    return this.subCategories.get(
      subCategoryId,
    ) ?? null;
  }

  async findByCategoryId(
    categoryId: string,
  ): Promise<SubCategory[]> {
    return [...this.subCategories.values()]
      .filter(
        (subCategory) =>
          subCategory.categoryId ===
          categoryId,
      );
  }

  async findAll(): Promise<SubCategory[]> {
    return [...this.subCategories.values()];
  }

  async save(
    subCategory: SubCategory,
  ): Promise<void> {
    this.subCategories.set(
      subCategory.subCategoryId,
      subCategory,
    );
  }
}
