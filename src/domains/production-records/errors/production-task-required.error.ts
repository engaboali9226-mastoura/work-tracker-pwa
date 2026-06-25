export class ProductionTaskRequiredError
  extends Error
{
  constructor(
    taskKey: string,
  ) {
    super(
      `Task '${taskKey}' is not a production task.`,
    );

    this.name =
      "ProductionTaskRequiredError";
  }
}
