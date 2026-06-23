# ADR-028: Repository Implementation Selection Strategy

## Status

Accepted

---

## Context

The application defines repository contracts within the Domain Layer.

Multiple repository implementations exist or are expected to exist.

Examples:

```text
TaskRepository
    ├─ InMemoryTaskRepository
    └─ NotionTaskRepository

EventRepository
    ├─ InMemoryEventRepository
    └─ NotionEventRepository
```

Different environments require different persistence strategies.

Development workflows benefit from lightweight in-memory storage.

Production deployments require persistent storage through Notion.

A consistent strategy is required to select repository implementations without affecting domain services.

---

## Decision

Repository implementations shall be selected by the Application Layer.

Domain services shall depend only on repository contracts.

Implementation selection shall occur during application startup.

Selection flow:

```text
Environment
      ↓
Repository Factory
      ↓
Repository Implementation
      ↓
Application Container
      ↓
Domain Services
```

---

## Development Environment

Development environments shall use in-memory repositories by default.

Examples:

```text
TaskRepository
      ↓
InMemoryTaskRepository

EventRepository
      ↓
InMemoryEventRepository
```

This enables:

- Faster local development
- Simplified testing
- No external dependencies
- Offline execution

---

## Production Environment

Production environments shall use Notion-backed repositories.

Examples:

```text
TaskRepository
      ↓
NotionTaskRepository

EventRepository
      ↓
NotionEventRepository
```

This enables:

- Persistent storage
- Shared data access
- Cross-device synchronization

---

## Repository Factory Responsibilities

The repository factory shall:

- Detect the active environment
- Select repository implementations
- Create repository instances
- Hide implementation details from consumers

The factory shall not contain domain logic.

---

## Application Container Responsibilities

The Application Container shall:

- Request repositories from the repository factory
- Construct domain services
- Manage dependency composition

The container shall remain independent from implementation-specific details.

---

## Rejected Alternative

### Direct Repository Construction

```text
Application Container
      ↓
new InMemoryTaskRepository()

new NotionTaskRepository()
```

Rejected because implementation selection becomes distributed and difficult to maintain.

---

## Consequences

### Advantages

- Centralized implementation selection
- Improved maintainability
- Easier testing
- Cleaner dependency composition
- Better separation of concerns

### Trade-offs

- Additional factory layer
- Additional configuration logic

These trade-offs are acceptable because they improve architectural flexibility.

---

## Future Expansion

Additional repository implementations may be introduced.

Examples:

```text
IndexedDbTaskRepository

LocalStorageTaskRepository

SqlTaskRepository
```

The selection strategy shall remain unchanged.

Only the factory implementation shall require modification.

---

## Outcome

Repository implementations shall be selected through a dedicated factory mechanism.

Domain services shall remain dependent on repository contracts only.

Environment-specific persistence concerns shall be isolated within the Application Layer.