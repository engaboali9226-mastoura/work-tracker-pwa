import type { NotionEventPageDto } from "../dto/notion-event-page.dto";

export class NotionEventPropertiesMapper {
  public static toProperties(
    dto: NotionEventPageDto,
  ): Record<string, unknown> {
    return {
      "Event Id": {
        rich_text: [
          {
            text: {
              content: dto["Event Id"],
            },
          },
        ],
      },

      "Event Type": {
        select: {
          name: dto["Event Type"],
        },
      },

      "Entity Type": {
        rich_text: [
          {
            text: {
              content: dto["Entity Type"],
            },
          },
        ],
      },

      "Entity Id": {
        rich_text: [
          {
            text: {
              content: dto["Entity Id"],
            },
          },
        ],
      },

      "Occurred At": {
        rich_text: [
          {
            text: {
              content: dto["Occurred At"],
            },
          },
        ],
      },

      Description: {
        rich_text: [
          {
            text: {
              content: dto.Description ?? "",
            },
          },
        ],
      },
    };
  }
}
