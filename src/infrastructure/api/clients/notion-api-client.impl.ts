import { Client } from "@notionhq/client";

import type { NotionApiClient } from "./notion-api-client";

export class NotionApiClientImpl
  implements NotionApiClient
{
  private readonly client: Client;

  constructor(
    apiKey: string,
  ) {
    this.client = new Client({
      auth: apiKey,
    });
  }

  async queryDatabase(
    databaseId: string,
    filter?: unknown,
  ): Promise<unknown[]> {
    const response =
      await this.client.dataSources.query({
        data_source_id: databaseId,
        filter: filter as never,
      });

    return response.results;
  }

  async retrievePage(
    pageId: string,
  ): Promise<unknown> {
    return this.client.pages.retrieve({
      page_id: pageId,
    });
  }

  async createPage(
    databaseId: string,
    properties: Record<string, unknown>,
  ): Promise<unknown> {
    return this.client.pages.create({
      parent: {
        data_source_id: databaseId,
      },
      properties: properties as never,
    });
  }

  async updatePage(
    pageId: string,
    properties: Record<string, unknown>,
  ): Promise<unknown> {
    return this.client.pages.update({
      page_id: pageId,
      properties: properties as never,
    });
  }
}
