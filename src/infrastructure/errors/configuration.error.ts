import { InfrastructureError } from "./infrastructure.error";

export class ConfigurationError extends InfrastructureError {
  public constructor(message: string) {
    super(message);

    this.name = "ConfigurationError";
  }
}
