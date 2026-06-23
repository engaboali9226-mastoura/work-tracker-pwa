# ADR-022: Dependency Injection Architecture

## Status

Accepted

---

## Context

Work Tracker V2 follows a layered Domain-Driven Design architecture.

The system currently contains:

- Domain Entities
- Domain Services
- Repository Interfaces

The next phase introduces Infrastructure implementations such as:

- TaskRepositoryImpl
- EventRepositoryImpl
- NotionApiClient

A consistent dependency injection strategy is required to:

- Prevent tight coupling
- Centralize dependency creation
- Simplify testing
- Support future infrastructure replacements

---

## Decision

The application shall use Manual Dependency Injection with a single Composition Root.

Dependencies will be created once during application startup and injected into consuming services.

No external dependency injection framework shall be used.

---

## Dependency Injection Strategy

The system shall follow Constructor Injection.

Example:

```typescript
export class TaskQueryServiceImpl implements TaskQueryService {
  constructor(
    private readonly taskRepository: TaskRepository
  ) {}
}
```

Dependencies must never be created internally by services.

The following pattern is prohibited:

```typescript
export class TaskQueryServiceImpl {
  private readonly repository = new TaskRepositoryImpl();
}
```

---

## Composition Root

A single Composition Root shall be responsible for wiring the entire application.

Example:

```text
src/app/composition-root.ts
```

Responsibilities:

- Create infrastructure dependencies
- Create repository implementations
- Create application services
- Expose configured services

No other module may instantiate infrastructure dependencies directly.

---

## Dependency Flow

The dependency graph shall follow:

```text
NotionApiClient
        ↓
Repository Implementations
        ↓
Domain Services
        ↓
Application Layer
```

Creation occurs from bottom to top.

Usage occurs from top to bottom.

---

## Repository Registration

Repositories shall be instantiated inside the Composition Root.

Example:

```typescript
const notionApiClient = new NotionApiClient();

const taskRepository =
  new TaskRepositoryImpl(
    notionApiClient
  );

const eventRepository =
  new EventRepositoryImpl(
    notionApiClient
  );
```

---

## Service Registration

Services shall receive repository interfaces through constructors.

Example:

```typescript
const taskCreationService =
  new TaskCreationServiceImpl(
    taskRepository,
    eventRepository
  );
```

```typescript
const taskLifecycleService =
  new TaskLifecycleServiceImpl(
    taskRepository,
    eventRepository
  );
```

```typescript
const taskQueryService =
  new TaskQueryServiceImpl(
    taskRepository
  );
```

```typescript
const workDayQueryService =
  new WorkDayQueryServiceImpl(
    taskRepository,
    eventRepository
  );
```

---

## Infrastructure Isolation

Domain Services shall depend only on repository contracts.

Allowed:

```text
Service
    →
Repository Interface
```

Prohibited:

```text
Service
    →
Repository Implementation
```

Prohibited:

```text
Service
    →
NotionApiClient
```

---

## Testing Strategy

Dependencies shall be replaceable using test doubles.

Example:

```typescript
const fakeTaskRepository =
  new FakeTaskRepository();

const service =
  new TaskQueryServiceImpl(
    fakeTaskRepository
  );
```

No infrastructure setup should be required for unit testing.

---

## Application Startup Flow

The application startup sequence shall be:

```text
Create Configuration
        ↓
Create Api Clients
        ↓
Create Repository Implementations
        ↓
Create Domain Services
        ↓
Expose Application Services
```

---

## Future Extensibility

If the application grows significantly, the manual dependency injection approach may be replaced with a dedicated container.

Possible future options:

- Inversify
- Tsyringe
- NestJS Container

Until such complexity exists, manual dependency injection remains the preferred approach.

---

## Consequences

### Advantages

- Minimal complexity
- No framework dependency
- Easy testing
- Explicit dependencies
- Clear application wiring

### Trade-offs

- Manual registration of dependencies
- Composition Root grows as the application grows

These trade-offs are acceptable given the current project size.

---

## Outcome

Work Tracker V2 shall use:

- Manual Dependency Injection
- Constructor Injection
- Single Composition Root

All dependency creation and wiring shall be centralized and controlled through the Composition Root.