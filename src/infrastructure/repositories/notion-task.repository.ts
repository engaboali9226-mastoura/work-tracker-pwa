import type { Task } from "../../domains/tasks/models/task.model";
import type { TaskStatus } from "../../domains/tasks/models/task-status";
import type { TaskRepository } from "../../domains/tasks/repositories/task.repository";

import type { NotionApiClient } from "../api/clients/notion-api-client";
import type { EnvironmentConfiguration } from "../configuration/environment.configuration";

import { NotionTaskPageExtractor } from "../mappers/notion-task-page.extractor";
import { NotionTaskPageMapper } from "../mappers/notion-task-page.mapper";
import { NotionTaskPropertiesMapper } from "../mappers/notion-task-properties.mapper";
import { NotionPageIdExtractor } from "../mappers/notion-page-id.extractor";

export class NotionTaskRepository
  implements TaskRepository
{
  private readonly notionClient: NotionApiClient;

  private readonly configuration: EnvironmentConfiguration;

  constructor(
    notionClient: NotionApiClient,
    configuration: EnvironmentConfiguration,
  ) {
    this.notionClient = notionClient;
    this.configuration = configuration;
  }

  public async findByKey(
    taskKey: string,
  ): Promise<Task | null> {
    const pages =
      await this.notionClient.queryDatabase(
        this.configuration.tasksDatabaseId,
        {
          property: "Task Key",
          rich_text: {
            equals: taskKey,
          },
        },
      );

    const page = pages[0];

    if (!page) {
      return null;
    }

    const dto =
      NotionTaskPageExtractor.extract(
        page,
      );

    return NotionTaskPageMapper.toDomain(
      dto,
    );
  }

  public async findByWorkDay(
    workDayKey: string,
  ): Promise<Task[]> {
    const pages =
      await this.notionClient.queryDatabase(
        this.configuration.tasksDatabaseId,
        {
          property: "Work Day Key",
          rich_text: {
            equals: workDayKey,
          },
        },
      );

    return pages.map(
      (page) =>
        NotionTaskPageMapper.toDomain(
          NotionTaskPageExtractor.extract(
            page,
          ),
        ),
    );
  }

  public async findByStatus(
    status: TaskStatus,
  ): Promise<Task[]> {
    const pages =
      await this.notionClient.queryDatabase(
        this.configuration.tasksDatabaseId,
        {
          property: "Status",
          select: {
            equals: status,
          },
        },
      );

    return pages.map(
      (page) =>
        NotionTaskPageMapper.toDomain(
          NotionTaskPageExtractor.extract(
            page,
          ),
        ),
    );
  }

  public async findActiveTasks(): Promise<Task[]> {
    return this.findByStatus(
      "active",
    );
  }

  public async findAll(): Promise<Task[]> {
    const pages =
      await this.notionClient.queryDatabase(
        this.configuration.tasksDatabaseId,
      );

    return pages.map(
      (page) =>
        NotionTaskPageMapper.toDomain(
          NotionTaskPageExtractor.extract(
            page,
          ),
        ),
    );
  }

  public async save(
    task: Task,
  ): Promise<void> {
    const existingTask =
      await this.findPageByTaskKey(
        task.taskKey,
      );

    const dto =
      NotionTaskPageMapper.toPageDto(
        task,
      );

    const properties =
      NotionTaskPropertiesMapper.toProperties(
        dto,
      );

    if (!existingTask) {
      await this.notionClient.createPage(
        this.configuration.tasksDatabaseId,
        properties,
      );

      return;
    }

    const pageId =
      NotionPageIdExtractor.extract(
        existingTask,
      );

    await this.notionClient.updatePage(
      pageId,
      properties,
    );
  }

  private async findPageByTaskKey(
    taskKey: string,
  ): Promise<unknown | null> {
    const pages =
      await this.notionClient.queryDatabase(
        this.configuration.tasksDatabaseId,
        {
          property: "Task Key",
          rich_text: {
            equals: taskKey,
          },
        },
      );

    return pages[0] ?? null;
  }
}