export class TaskNotFoundError extends Error {
  constructor(taskKey: string) {
    super(`Task not found: ${taskKey}`);

    this.name = "TaskNotFoundError";
  }
}