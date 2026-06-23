import type { EventType } from "../../domains/event-log/models/event-type";

export interface NotionEventPageDto {
  "Event Id": string;

  "Event Type": EventType;

  "Entity Type": string;

  "Entity Id": string;

  "Occurred At": string;

  Description?: string;
}
