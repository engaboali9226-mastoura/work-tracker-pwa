import type { EventLog } from "../../domains/event-log/models/event.model";

import type { EventRepository } from "../../domains/event-log/repositories/event.repository";

import type { NotionApiClient } from "../api/clients/notion-api-client";

import type { EnvironmentConfiguration } from "../configuration/environment.configuration";

import { NotionEventPageMapper } from "../mappers/notion-event-page.mapper";

import { NotionEventPropertiesMapper } from "../mappers/notion-event-properties.mapper";

export class NotionEventRepository
  implements EventRepository
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

  public async save(
    event: EventLog,
  ): Promise<void> {
    const dto =
      NotionEventPageMapper.toPageDto(
        event,
      );

    const properties =
      NotionEventPropertiesMapper.toProperties(
        dto,
      );

    await this.notionClient.createPage(
      this.configuration.eventsDatabaseId,
      properties,
    );
  }
}
