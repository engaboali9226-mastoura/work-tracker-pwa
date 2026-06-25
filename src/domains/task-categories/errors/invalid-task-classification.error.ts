export class InvalidTaskClassificationError
  extends Error
{
  constructor(
    categoryId: string,
    subCategoryId: string,
  ) {
    super(
      `SubCategory '${subCategoryId}' does not belong to Category '${categoryId}'.`,
    );

    this.name =
      "InvalidTaskClassificationError";
  }
}
