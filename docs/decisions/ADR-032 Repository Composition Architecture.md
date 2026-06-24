# ADR-032: Repository Composition Architecture

## Status

Accepted

## Context

The application currently contains:

- Domain Services
- Repository Contracts
- Infrastructure Repository Implementations
- Notion Integration Layer

A composition mechanism is required to:

- Select repository implementations
- Construct dependencies
- Wire domain services
- Isolate infrastructure concerns from the domain layer

Without a dedicated composition root, infrastructure knowledge may leak into domain services or UI layers.

## Decision

Adopt an Application Composition Root responsible for:

- Creating repository factories
- Selecting repository implementations
- Constructing infrastructure dependencies
- Wiring domain services

Domain services must depend only on repository contracts.

The domain layer must not know:

- Notion implementations
- Environment configuration
- Infrastructure-specific classes

Repository implementation selection must occur exclusively within the composition root.

## Architecture

```text
UI
 │
 ▼
Composition Root
 │
 ▼
Repository Factory
 │
 ▼
Repository Implementations
 │
 ▼
Notion
```

Domain Services remain the single business entry point.

```text
UI / n8n
    │
    ▼
Domain Services
    │
    ▼
Repository Contracts
```

## Consequences

### Positive

- Clear dependency direction
- Infrastructure isolation
- Easier testing
- Future support for multiple persistence providers
- Centralized dependency wiring

### Negative

- Additional composition layer
- More bootstrap code

## Future Extensions

Repository selection may later support:

- Notion
- Supabase
- SQLite
- In-Memory Repositories

without changes to the domain layer.