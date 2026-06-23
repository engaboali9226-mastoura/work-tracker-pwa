import { InfrastructureError } from "./infrastructure.error";

export class NotionApiError extends InfrastructureError {
  public constructor(message: string) {
    super(message);

    this.name = "NotionApiError";
  }
}
