import type { EventLog } from "../../domains/event-log/models/event.model";
import type { NotionEventDto } from "../notion/dto/notion-event.dto";

export class EventMapper {
  public static toDomain(
    dto: NotionEventDto,
  ): EventLog {
    return {
      eventId: dto.eventId,
      eventType: dto.eventType,
      entityType: dto.entityType,
      entityId: dto.entityId,
      occurredAt: dto.occurredAt,
      description: dto.description,
    };
  }

  public static toDto(
    event: EventLog,
  ): NotionEventDto {
    return {
      eventId: event.eventId,
      eventType: event.eventType,
      entityType: event.entityType,
      entityId: event.entityId,
      occurredAt: event.occurredAt,
      description: event.description,
    };
  }
}
