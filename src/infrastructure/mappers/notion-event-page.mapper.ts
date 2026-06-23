import type { EventLog } from "../../domains/event-log/models/event.model";

import type { NotionEventPageDto } from "../dto/notion-event-page.dto";

export class NotionEventPageMapper {
  public static toPageDto(
    event: EventLog,
  ): NotionEventPageDto {
    return {
      "Event Id": event.eventId,

      "Event Type": event.eventType,

      "Entity Type": event.entityType,

      "Entity Id": event.entityId,

      "Occurred At": event.occurredAt,

      Description: event.description,
    };
  }

  public static toDomain(
    dto: NotionEventPageDto,
  ): EventLog {
    return {
      eventId: dto["Event Id"],

      eventType: dto["Event Type"],

      entityType: dto["Entity Type"],

      entityId: dto["Entity Id"],

      occurredAt: dto["Occurred At"],

      description: dto.Description,
    };
  }
}
