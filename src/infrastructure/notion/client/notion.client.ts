export interface NotionClient {
  queryDatabase(
    databaseId: string,
    filter?: unknown,
  ): Promise<unknown[]>;

  retrievePage(
    pageId: string,
  ): Promise<unknown>;

  createPage(
    databaseId: string,
    properties: Record<string, unknown>,
  ): Promise<unknown>;

  updatePage(
    pageId: string,
    properties: Record<string, unknown>,
  ): Promise<unknown>;
}
