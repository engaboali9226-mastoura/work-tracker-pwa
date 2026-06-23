
export interface PauseTaskCommand {
  taskKey: string;
  timestamp: string;
  reason: string;
}

export interface ResumeTaskCommand {
  taskKey: string;
  timestamp: string;
  reason: string;
}

export interface CompleteTaskCommand {
  taskKey: string;
  timestamp: string;
}

export interface CancelTaskCommand {
  taskKey: string;
  timestamp: string;
  reason: string;
}

