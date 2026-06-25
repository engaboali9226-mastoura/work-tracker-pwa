export class SubCategoryNotFoundError
  extends Error
{
  constructor(
    subCategoryId: string,
  ) {
    super(
      `SubCategory '${subCategoryId}' was not found.`,
    );

    this.name =
      "SubCategoryNotFoundError";
  }
}
