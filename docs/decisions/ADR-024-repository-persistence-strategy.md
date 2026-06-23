# ADR-024: Repository Persistence Strategy

## Status

Accepted

---

## Context

The domain repositories expose a single persistence operation:

```typescript
save(entity)
```

Neither `TaskRepository` nor `EventRepository` distinguish between create and update operations.

The Infrastructure Layer requires a consistent strategy for translating save operations into storage operations within Notion.

Without a defined persistence strategy, repository implementations may apply inconsistent behavior when handling existing entities.

---

## Decision

The `save` operation shall be treated as an Upsert operation.

```text
save(entity)
      ↓
Repository
      ↓
Create or Update
```

The repository implementation shall determine whether the entity already exists and perform the appropriate storage action.

---

## Task Repository Strategy

`TaskRepository` shall use:

```text
taskKey
```

as the primary business identifier.

Repository behavior:

```text
Task Exists
    ↓
Update Existing Record

Task Does Not Exist
    ↓
Create New Record
```

Application services shall not be responsible for deciding whether a task is new or existing.

This responsibility belongs exclusively to the repository implementation.

---

## Event Repository Strategy

`EventRepository` shall use:

```text
eventId
```

as the primary business identifier.

Repository behavior:

```text
Event Exists
    ↓
Update Existing Record

Event Does Not Exist
    ↓
Create New Record
```

---

## Infrastructure Responsibility

Repositories shall encapsulate all persistence-specific decisions.

Examples:

* Create operations
* Update operations
* Storage lookups
* Provider-specific behavior

The Domain Layer shall remain unaware of persistence mechanics.

---

## Notion Implementation Strategy

For Notion-based repositories:

```text
save(entity)
      ↓
Lookup by Business Key
      ↓
Record Found?
      ↓
Yes → Update Page

No → Create Page
```

Business keys shall remain stable and provider-independent.

Examples:

```text
taskKey
eventId
```

Notion page identifiers shall not be exposed outside the Infrastructure Layer.

---

## Consequences

### Advantages

* Simple repository contract
* Consistent persistence behavior
* Infrastructure encapsulation
* Domain independence from storage details
* Compatible with Notion storage model

### Trade-offs

* Additional lookup before update operations
* Slightly more repository complexity

These trade-offs are acceptable because they preserve architectural boundaries and simplify application services.

---

## Outcome

The repository save operation shall be implemented as an Upsert.

Repositories shall determine whether to create or update records.

Business identifiers shall remain the authoritative keys for persistence operations.

Storage-specific identifiers shall remain internal to the Infrastructure Layer.
