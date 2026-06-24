interface ImportMetaEnv {
  readonly VITE_REPOSITORY_PROVIDER:
    | "memory"
    | "notion";

  readonly VITE_NOTION_API_TOKEN: string;

  readonly VITE_NOTION_TASKS_DATABASE_ID: string;

  readonly VITE_NOTION_EVENTS_DATABASE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
