export class WorkDayAlreadyInProgressError
  extends Error
{
  constructor() {
    super(
      "A work day is already in progress.",
    );
  }
}
