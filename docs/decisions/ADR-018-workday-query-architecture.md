# ADR-018: WorkDay Query Architecture

## Status

Accepted

## Context

ADR-017 established WorkDay as the aggregate root responsible for organizing tasks by ownership day.

The application requires query capabilities to:

* Retrieve a single WorkDay.
* Retrieve all tasks owned by a WorkDay.
* Retrieve WorkDays within a date range.
* Retrieve a WorkDay together with its associated tasks.

WorkDay instances are not stored independently. They are derived dynamically from task ownership data.

To maintain consistency with ADR-016 (Task Query Architecture), query responsibilities must remain separated from task lifecycle and task creation concerns.

## Decision

### Dedicated Query Service

A dedicated WorkDayQueryService shall be introduced.

The service shall be responsible for all WorkDay-related query operations.

The service shall not perform:

* Task creation
* Task updates
* Task lifecycle transitions
* WorkDay mutations

Its responsibility is read-only access to WorkDay data.

### Repository Dependencies

WorkDayQueryService shall depend on:

```ts
TaskRepository
```

Task ownership data shall be the single source of truth for WorkDay queries.

WorkDay instances shall be generated dynamically from task ownership information and shall not be stored independently.

### Derived WorkDay Model

WorkDay shall be treated as a derived aggregate.

Given one or more tasks with the same ownerDayKey:

```ts
task.ownerDayKey
```

the system shall dynamically generate:

```ts
const workDay: WorkDay = {
  key: ownerDayKey
};
```

No WorkDay persistence layer shall be introduced.

### Supported Operations

The service shall expose the following operations.

#### Get WorkDay

```ts
getWorkDay(dayKey: DayKey): Promise<WorkDay | null>
```

Returns a generated WorkDay if tasks exist for the specified day.

Returns null if no tasks are owned by the specified day.

#### Get WorkDay Tasks

```ts
getWorkDayTasks(dayKey: DayKey): Promise<Task[]>
```

Returns all tasks owned by the specified WorkDay.

Ownership shall be determined using:

```ts
task.ownerDayKey
```

#### Get WorkDay Details

```ts
getWorkDayDetails(dayKey: DayKey): Promise<WorkDayDetails | null>
```

Returns a generated WorkDay together with all owned tasks.

#### Get WorkDays Range

```ts
getWorkDays(
  startDayKey: DayKey,
  endDayKey: DayKey
): Promise<WorkDay[]>
```

Returns generated WorkDay instances for all ownership days found within the specified range.

### WorkDayDetails DTO

A dedicated DTO shall be introduced.

```ts
export interface WorkDayDetails {
  workDay: WorkDay;
  tasks: Task[];
}
```

This DTO is intended for UI consumption and reporting scenarios.

### WorkDaySummary DTO

A lightweight summary DTO may be introduced.

```ts
export interface WorkDaySummary {
  dayKey: DayKey;
  taskCount: number;
}
```

Summary DTOs shall contain derived values only.

They shall not replace the WorkDay aggregate.

### Query Ownership Rule

All task retrieval operations shall use:

```ts
ownerDayKey
```

and shall not depend on:

```ts
createdAt
startedAt
completedAt
```

This preserves consistency with ADR-012 and ADR-017.

### Error Handling

Query operations shall never throw domain errors for missing WorkDays.

Missing WorkDays shall return:

```ts
null
```

or

```ts
[]
```

depending on the operation.

## Consequences

### Positive

* Clear separation of read and write responsibilities.
* Consistent ownership-based querying.
* Simplified UI integration.
* No additional persistence layer is required.
* Single source of truth remains TaskRepository.
* Alignment with ADR-012, ADR-016, and ADR-017.

### Negative

* WorkDayDetails requires additional aggregation logic.
* Summary values are computed dynamically.
* WorkDay instances are recreated on demand.

## Decision Date

2026-06-23
