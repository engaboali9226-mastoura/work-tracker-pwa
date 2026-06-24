import { ConfigurationError } from "../errors/configuration.error";

import type { EnvironmentConfiguration } from "./environment.configuration";

export function createNotionConfiguration(): EnvironmentConfiguration {
  const notionApiToken =
    import.meta.env.VITE_NOTION_API_TOKEN;

  const tasksDatabaseId =
    import.meta.env.VITE_NOTION_TASKS_DATABASE_ID;

  const eventsDatabaseId =
    import.meta.env.VITE_NOTION_EVENTS_DATABASE_ID;

  const repositoryProvider =
    import.meta.env.VITE_REPOSITORY_PROVIDER;

  if (!notionApiToken) {
    throw new ConfigurationError(
      "Missing VITE_NOTION_API_TOKEN environment variable",
    );
  }

  if (!tasksDatabaseId) {
    throw new ConfigurationError(
      "Missing VITE_NOTION_TASKS_DATABASE_ID environment variable",
    );
  }

  if (!eventsDatabaseId) {
    throw new ConfigurationError(
      "Missing VITE_NOTION_EVENTS_DATABASE_ID environment variable",
    );
  }

  if (
    repositoryProvider !== "memory" &&
    repositoryProvider !== "notion"
  ) {
    throw new ConfigurationError(
      "Invalid VITE_REPOSITORY_PROVIDER value",
    );
  }

  return {
    notionApiToken,

    tasksDatabaseId,

    eventsDatabaseId,

    repositoryProvider,
  };
}