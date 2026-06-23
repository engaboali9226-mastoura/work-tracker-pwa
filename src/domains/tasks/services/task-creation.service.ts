import type { Task } from "../models/task.model";

import type {
CreateTaskCommand,
} from "./task-creation.commands";

export interface TaskCreationService {
createTask(
command: CreateTaskCommand,
): Promise<Task>;
}
