# ADR-025: Notion Database Separation Strategy

## Status

Accepted

---

## Context

The application persists multiple aggregate types.

Current aggregates include:

- Tasks
- Event Logs

Future aggregates may include:

- Projects
- Areas
- Sites
- Notes
- Task Categories

The Infrastructure Layer uses Notion as the primary persistence provider.

A storage strategy is required to determine whether all aggregates should share a single database or be stored in separate databases.

---

## Decision

Each aggregate shall be stored in its own dedicated Notion database.

Current database structure:

```text
Tasks Database

Events Database
```

Future aggregates may introduce additional databases as needed.

Examples:

```text
Projects Database

Areas Database

Sites Database

Notes Database

Task Categories Database
```

---

## Rationale

Each aggregate represents an independent domain concept.

Separate databases provide:

- Clear ownership boundaries
- Simpler query logic
- Simpler mappings
- Better maintainability
- Better scalability

The database structure shall reflect aggregate boundaries defined by the domain model.

---

## Tasks Database Responsibilities

The Tasks Database shall contain:

```text
Task Aggregate
```

Examples:

- Task Key
- Work Day Key
- Title
- Category
- Site
- Project
- Start Time
- End Time
- Status

Only task-related information shall be stored within this database.

---

## Events Database Responsibilities

The Events Database shall contain:

```text
Event Aggregate
```

Examples:

- Event Id
- Event Type
- Entity Type
- Entity Id
- Occurred At
- Description

Only event-related information shall be stored within this database.

---

## Infrastructure Implications

Each repository implementation shall target a single database.

Examples:

```text
NotionTaskRepository
        ↓
Tasks Database

NotionEventRepository
        ↓
Events Database
```

Repositories shall not manage multiple aggregate databases simultaneously.

---

## Query Strategy

Queries shall execute against the database associated with the target aggregate.

Examples:

```text
TaskRepository
        ↓
Tasks Database

EventRepository
        ↓
Events Database
```

Cross-aggregate reporting shall be performed within the application layer rather than through shared storage structures.

---

## Consequences

### Advantages

- Strong aggregate isolation
- Simpler repository implementations
- Simpler DTO mappings
- Improved maintainability
- Easier future expansion

### Trade-offs

- Additional database management
- More Notion configuration

These trade-offs are acceptable because they preserve architectural clarity and domain boundaries.

---

## Outcome

Each aggregate shall be persisted within a dedicated Notion database.

Repository implementations shall interact with exactly one aggregate database.

The Notion storage model shall mirror the aggregate boundaries defined by the domain architecture.