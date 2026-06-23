export interface CreateTaskCommand {
taskKey: string;

workDayKey: string;

title: string;

categoryId: string;

siteId?: string;

projectId?: string;

startTime: string;
}
