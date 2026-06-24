export class NotionPageIdExtractor {
  public static extract(
    page: unknown,
  ): string {
    const notionPage =
      page as {
        id?: string;
      };

    return notionPage.id ?? "";
  }
}