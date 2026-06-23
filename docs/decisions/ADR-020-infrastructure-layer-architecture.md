# ADR-020: Infrastructure Layer Architecture

## Status

Accepted

---

## Context

After completing the core Domain Services:

- TaskCreationService
- TaskLifecycleService
- TaskQueryService
- WorkDayQueryService

All business rules are now isolated from external data sources.

The next step is to establish the Infrastructure Layer responsible for:

- Integrating with Notion API
- Mapping data between Domain Models and external representations
- Implementing Repository Interfaces
- Handling external communication and infrastructure concerns

The Domain layer must remain completely independent of Notion and any external provider.

---

## Decision

Adopt a dedicated Infrastructure Layer composed of four sub-layers:

```text
Infrastructure
│
├── api
│   ├── clients
│   ├── dto
│   └── mappers
│
├── repositories
│
├── configuration
│
└── errors
```

---

### 1. API Client Layer

Responsible for all external communications.

Example:

```text
NotionApiClient
```

Responsibilities:

- Execute HTTP requests
- Handle API communication
- Return raw external responses
- Contain no business logic
- Create no Domain entities

---

### 2. DTO Layer

Represents the raw data structures exchanged with Notion.

Examples:

```typescript
interface NotionTaskDto
interface NotionEventDto
interface NotionWorkDayDto
```

DTOs are Infrastructure-only artifacts and must never be exposed outside the Infrastructure Layer.

---

### 3. Mapper Layer

Responsible for translating between external DTOs and Domain entities.

```text
Notion DTO
    ↔
Domain Entity
```

Examples:

```text
TaskMapper
EventMapper
WorkDayMapper
```

---

### 4. Repository Layer

Provides concrete implementations of Repository Interfaces defined in the Domain.

Examples:

```text
TaskRepositoryImpl
EventRepositoryImpl
```

Responsibilities:

- Use API Clients
- Use Mappers
- Return Domain entities only
- Hide all external implementation details

---

## Dependency Flow

Allowed dependency direction:

```text
Application Services
        ↓
Repository Interfaces
        ↓
Repository Implementations
        ↓
Api Clients
        ↓
Notion API
```

---

## Forbidden Dependencies

The following dependency directions are prohibited:

```text
Domain
   ↓
Notion SDK
```

```text
Domain
   ↓
DTO
```

```text
Service
   ↓
Api Client
```

All external communication must pass through Repository Interfaces.

---

## Repository Responsibilities

### TaskRepositoryImpl

Responsible for:

```text
Create Task
Update Task
Get Task By Key
Query Tasks
```

### EventRepositoryImpl

Responsible for:

```text
Create Event
Get Event By Key
Get Task Events
Query Events
```

---

## Error Handling Strategy

Infrastructure-specific errors shall be defined:

```text
InfrastructureError
NotionApiError
MappingError
RepositoryError
```

Raw SDK or API errors must not be propagated directly to the Domain Layer.

---

## Mapping Strategy

Each Domain entity shall have a dedicated mapper.

Example:

```text
TaskMapper
    toDomain()
    toDto()

EventMapper
    toDomain()
    toDto()

WorkDayMapper
    toDomain()
    toDto()
```

---

## Consequences

### Advantages

- Complete separation between Domain and Notion
- Easier future provider replacement
- Improved testability through mocking
- Clear separation of responsibilities
- Better long-term maintainability

### Trade-offs

- Additional files and abstractions
- Additional mapping layer to maintain

These trade-offs are acceptable in exchange for preserving Domain independence.

---

## Outcome

The Infrastructure Layer shall be implemented using:

- API Clients
- DTOs
- Mappers
- Repository Implementations

The Domain Layer remains completely isolated from external systems and infrastructure concerns.