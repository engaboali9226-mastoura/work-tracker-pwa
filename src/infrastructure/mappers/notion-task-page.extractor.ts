import type { NotionTaskPageDto } from "../dto/notion-task-page.dto";

export class NotionTaskPageExtractor {
  public static extract(
    page: any,
  ): NotionTaskPageDto {
    const properties =
      page.properties;

    return {
      "Task Key":
        properties["Task Key"]
          ?.rich_text?.[0]
          ?.plain_text ?? "",

      "Work Day Key":
        properties["Work Day Key"]
          ?.rich_text?.[0]
          ?.plain_text ?? "",

      Title:
        properties.Title
          ?.title?.[0]
          ?.plain_text ?? "",

      "Category Id":
        properties["Category Id"]
          ?.rich_text?.[0]
          ?.plain_text ?? "",

      "Site Id":
        properties["Site Id"]
          ?.rich_text?.[0]
          ?.plain_text,

      "Project Id":
        properties["Project Id"]
          ?.rich_text?.[0]
          ?.plain_text,

      "Start Time":
        properties["Start Time"]
          ?.rich_text?.[0]
          ?.plain_text ?? "",

      "End Time":
        properties["End Time"]
          ?.rich_text?.[0]
          ?.plain_text,

      Status:
        properties.Status
          ?.select?.name,
    };
  }
}