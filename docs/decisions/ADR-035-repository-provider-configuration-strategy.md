# ADR-035 Repository Provider Configuration Strategy

## Status

Accepted

## Context

The application supports multiple repository implementations:

- InMemory repositories
- Notion repositories

Repository selection was previously hardcoded inside the application composition root.

As the infrastructure layer evolved, repository implementation selection needed to become configurable without modifying application code.

An environment-driven strategy allows switching between persistence providers for development, testing, and production deployments.

## Decision

Repository implementation selection will be controlled through environment configuration.

A new environment variable is introduced:

```env
VITE_REPOSITORY_PROVIDER=memory
```

Supported values:

- memory
- notion

The EnvironmentConfiguration contract exposes:

```ts
readonly repositoryProvider:
  | "memory"
  | "notion";
```

Configuration validation is performed during startup.

Invalid provider values will result in a ConfigurationError.

Repository selection is delegated to:

```ts
createRepositoryFactory(
  configuration,
);
```

The factory determines which repository implementation should be instantiated.

## Consequences

### Positive

- Repository implementation can be changed without code modifications
- Environment-specific deployments become possible
- Local development can use in-memory repositories
- Production deployments can use Notion repositories
- Centralized repository selection logic
- Better deployment flexibility

### Negative

- Additional environment configuration is required
- Startup validation becomes stricter

## Related Decisions

- ADR-022 Dependency Injection Architecture
- ADR-024 Repository Persistence Strategy
- ADR-028 Repository Implementation Selection Strategy
- ADR-034 Notion Query Filter Strategy