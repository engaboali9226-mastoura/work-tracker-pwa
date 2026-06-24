# ADR-034 Repository Provider Selection Strategy

## Status

Accepted

## Context

The application currently supports multiple repository implementations:

- InMemoryTaskRepository
- InMemoryEventRepository
- NotionTaskRepository
- NotionEventRepository

Application services depend only on repository interfaces and must remain independent from infrastructure implementation details.

The system previously instantiated repository implementations directly, which made switching persistence providers require code changes.

A runtime selection mechanism is required to allow different repository implementations to be used without modifying application or domain code.

## Decision

Use a Repository Factory to select repository implementations at application startup.

Repository selection is controlled through environment configuration:

VITE_REPOSITORY_PROVIDER=memory

Supported providers:

- memory
- notion

The ApplicationContainer loads configuration, creates the appropriate RepositoryFactory, and resolves repository instances from that factory.

The repository provider becomes part of the EnvironmentConfiguration contract and acts as the single source of truth for persistence selection.

## Consequences

### Positive

- Domain services remain independent from infrastructure details.
- Application services depend only on repository contracts.
- Repository implementations can be switched without changing business logic.
- Infrastructure concerns remain isolated within the infrastructure layer.
- New providers can be introduced with minimal changes.
- Memory-based and Notion-based persistence share the same application workflow.

### Negative

- Application startup now depends on configuration validation.
- Invalid provider values prevent application initialization.
- Additional factory logic is required when new providers are introduced.

## Alternatives Considered

### Manual Repository Switching

Instantiate repository implementations directly inside ApplicationContainer.

Rejected because persistence changes would require source code modifications.

### Conditional Logic Inside Services

Allow services to choose repository implementations.

Rejected because it couples business logic to infrastructure concerns and violates separation of concerns.

### Multiple Application Containers

Create a dedicated application container for each persistence strategy.

Rejected because it duplicates composition logic and increases maintenance overhead.

## Implementation

The following components participate in repository selection:

- EnvironmentConfiguration
- createNotionConfiguration()
- RepositoryFactory
- InMemoryRepositoryFactory
- NotionRepositoryFactory
- createRepositoryFactory()
- ApplicationContainer

Repository creation flow:

ApplicationContainer
→ createNotionConfiguration()
→ createRepositoryFactory()
→ RepositoryFactory
→ Repository Implementations

## Related Decisions

- ADR-020 Infrastructure Layer Architecture
- ADR-022 Dependency Injection Architecture
- ADR-024 Repository Persistence Strategy
- ADR-028 Repository Implementation Selection Strategy
- ADR-032 Repository Composition Architecture
- ADR-033 Notion Page Extraction Strategy