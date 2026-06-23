# ADR-019: Derived WorkDay Model

## Status

Accepted

## Context

ADR-017 introduced WorkDay as the aggregate responsible for organizing tasks by ownership day.

During the design of ADR-018, it became clear that WorkDay does not require independent persistence because all information needed to construct a WorkDay already exists within task ownership data.

Introducing a dedicated WorkDay persistence model would duplicate information already available through tasks and create unnecessary repository complexity.

The architecture therefore requires a clear definition of the WorkDay data source.

## Decision

### Derived Aggregate

WorkDay shall be treated as a derived aggregate.

WorkDay instances shall be generated dynamically from task ownership data.

Example:

```ts
const workDay: WorkDay = {
  key: ownerDayKey
};
```

### Single Source of Truth

Task ownership data shall be the single source of truth for WorkDay generation.

Ownership shall be determined using:

```ts
task.ownerDayKey
```

No additional ownership tracking mechanism shall be introduced.

### No Persistence

WorkDay instances shall not be persisted.

The system shall not store WorkDay records in:

* Notion
* Local storage
* IndexedDB
* Any future persistence layer

WorkDay shall always be generated on demand.

### No Repository

The system shall not introduce:

```ts
WorkDayRepository
```

All WorkDay queries shall be resolved through:

```ts
TaskRepository
```

and transformed into WorkDay representations by application services.

### Query Generation

WorkDayQueryService shall generate WorkDay instances from task ownership data.

If tasks exist for a given DayKey:

```ts
ownerDayKey === dayKey
```

the corresponding WorkDay shall be considered to exist.

If no tasks exist for a DayKey, no WorkDay shall exist.

## Consequences

### Positive

* Eliminates redundant persistence.
* Maintains a single source of truth.
* Simplifies repository architecture.
* Reduces synchronization concerns.
* Reduces Notion storage requirements.

### Negative

* WorkDay instances must be generated repeatedly.
* Aggregate existence depends entirely on task ownership data.
* Future WorkDay-specific metadata may require revisiting this decision.

## Decision Date

2026-06-23
