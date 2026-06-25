export class WorkDayNotFoundError
  extends Error
{
  constructor(
    dayKey: string,
  ) {
    super(
      `Work day '${dayKey}' was not found.`,
    );

    this.name =
      "WorkDayNotFoundError";
  }
}
