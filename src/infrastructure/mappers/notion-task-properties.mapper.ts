import type { NotionTaskPageDto } from "../dto/notion-task-page.dto";

export class NotionTaskPropertiesMapper {
  public static toProperties(
    dto: NotionTaskPageDto,
  ): Record<string, unknown> {
    return {
      "Task Key": {
        rich_text: [
          {
            text: {
              content: dto["Task Key"],
            },
          },
        ],
      },

      "Work Day Key": {
        rich_text: [
          {
            text: {
              content: dto["Work Day Key"],
            },
          },
        ],
      },

      Title: {
        title: [
          {
            text: {
              content: dto.Title,
            },
          },
        ],
      },

      "Category Id": {
        rich_text: [
          {
            text: {
              content: dto["Category Id"],
            },
          },
        ],
      },

      "Site Id": {
        rich_text: [
          {
            text: {
              content: dto["Site Id"] ?? "",
            },
          },
        ],
      },

      "Project Id": {
        rich_text: [
          {
            text: {
              content: dto["Project Id"] ?? "",
            },
          },
        ],
      },

      "Start Time": {
        rich_text: [
          {
            text: {
              content: dto["Start Time"],
            },
          },
        ],
      },

      "End Time": {
        rich_text: [
          {
            text: {
              content: dto["End Time"] ?? "",
            },
          },
        ],
      },

      Status: {
        select: {
          name: dto.Status,
        },
      },
    };
  }
}
