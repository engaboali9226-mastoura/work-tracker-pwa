import type { TaskRepository } from "../../../domains/tasks/repositories/task.repository";
import type { Task } from "../../../domains/tasks/models/task.model";
import type { TaskStatus } from "../../../domains/tasks/models/task-status";

export class InMemoryTaskRepository
  implements TaskRepository
{
  private readonly tasks = new Map<string, Task>();

  public async findByKey(
    taskKey: string,
  ): Promise<Task | null> {
    return this.tasks.get(taskKey) ?? null;
  }

  public async findByWorkDay(
    workDayKey: string,
  ): Promise<Task[]> {
    return [...this.tasks.values()].filter(
      (task) => task.workDayKey === workDayKey,
    );
  }

  public async findByStatus(
    status: TaskStatus,
  ): Promise<Task[]> {
    return [...this.tasks.values()].filter(
      (task) => task.status === status,
    );
  }

  public async findActiveTasks(): Promise<Task[]> {
    return [...this.tasks.values()].filter(
      (task) => task.status === "active",
    );
  }

  public async findAll(): Promise<Task[]> {
    return [...this.tasks.values()];
  }

  public async save(
    task: Task,
  ): Promise<void> {
    this.tasks.set(
      task.taskKey,
      task,
    );
  }
}
