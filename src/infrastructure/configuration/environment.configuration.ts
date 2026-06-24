export interface EnvironmentConfiguration {
  readonly notionApiToken: string;

  readonly tasksDatabaseId: string;

  readonly eventsDatabaseId: string;

  readonly repositoryProvider:
    | "memory"
    | "notion";
}