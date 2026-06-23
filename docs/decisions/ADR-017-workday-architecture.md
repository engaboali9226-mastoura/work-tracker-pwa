# ADR-017: WorkDay Architecture

## Status

Accepted

## Context

The system organizes work around daily tracking and reporting. Tasks are created, managed, and queried within the context of a work day.

ADR-012 established that cross-day tasks remain owned by the day on which they were created. As a result, the WorkDay architecture must provide a stable ownership model that preserves historical consistency and avoids ownership transfers between days.

The system also requires a dedicated aggregate to represent a work day and serve as the primary entry point for daily task queries.

## Decision

### WorkDay Aggregate

A WorkDay shall be implemented as an Aggregate Root representing a single day within the system.

The identity of a WorkDay shall be its DayKey.

```ts
export interface WorkDay {
  key: DayKey;
}
```

No additional identifier shall be introduced.

### Task Ownership

Each Task shall belong to exactly one WorkDay.

Ownership shall be represented through:

```ts
ownerDayKey: DayKey;
```

The `ownerDayKey` value shall be assigned when the task is created and shall remain immutable throughout the task lifecycle.

```text
ownerDayKey = creationDayKey
```

### Cross-Day Tasks

Tasks that span multiple calendar days shall remain owned by their original WorkDay.

Example:

```text
Created: 2026-06-21
Completed: 2026-06-24

Owner WorkDay:
2026-06-21
```

This decision is consistent with ADR-012.

### WorkDay Creation

WorkDays shall be created automatically on demand.

When a task is created:

1. The system shall check whether the corresponding WorkDay exists.
2. If it does not exist, a new WorkDay shall be created.
3. The task shall then be assigned to that WorkDay.

No dedicated use case shall exist for manual WorkDay creation.

### Uniqueness

Only one WorkDay may exist for a given DayKey.

```text
DayKey ↔ WorkDay
```

Therefore:

```ts
workDay.key === dayKey
```

### Query Support

The architecture shall support the following query operations:

```ts
getWorkDay(dayKey)
```

```ts
getTasksByWorkDay(dayKey)
```

```ts
getWorkDays(startDayKey, endDayKey)
```

```ts
getWorkDayDetails(dayKey)
```

### Lifecycle

WorkDay shall not maintain lifecycle states.

The following states shall not be introduced in V2:

- Open
- Closed
- Archived

A WorkDay acts solely as a logical grouping and ownership boundary for tasks.

### Deletion

WorkDays shall not be deleted independently.

Automatic cleanup of empty WorkDays is out of scope for V2 and may be considered in a future ADR.

## Consequences

### Positive

- Simple and predictable domain model.
- Full alignment with ADR-012.
- Stable task ownership throughout the task lifecycle.
- Straightforward daily query operations.
- Preserves historical reporting consistency.

### Negative

- Empty WorkDays may exist in the future.
- Daily statistics must be calculated dynamically.
- WorkDay currently provides no operational lifecycle.

## Decision Date

2026-06-23