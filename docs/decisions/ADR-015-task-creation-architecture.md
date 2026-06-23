# ADR-015 Task Creation Architecture

Status: Approved

## Decision

Task creation shall be handled through a dedicated task creation workflow.

Creating a task immediately starts the task.

A newly created task shall be created in the active state.

Task creation is considered the source of the task-started lifecycle event.

## Required Fields

The following fields are required when creating a task:

- taskKey
- workDayKey
- title
- categoryId
- startTime

## Optional Fields

The following fields are optional:

- siteId
- projectId

## Initial Values

A newly created task shall be initialized with:

- status = active
- endTime = undefined

## Timestamp Selection

Task creation may use either:

- Current Time
- User-selected Custom Time

The selected timestamp becomes the official task start time.

Task.startTime shall be assigned using the selected timestamp.

## EventLog Integration

Task creation must create an EventLog entry.

Event mapping:

| Operation | Event Type |
| ---------- | ---------- |
| Task Creation | task-started |

The generated EventLog entry shall:

- reference the created task
- use the selected start timestamp
- be stored through EventRepository

## WorkDay Ownership

Each task must belong to a single WorkDay.

The task shall remain associated with the WorkDay in which it was created.

This association shall not change during the task lifecycle.

## Validation Rules

Task creation shall reject requests when:

- taskKey is missing
- workDayKey is missing
- title is empty
- categoryId is missing
- startTime is missing

## Source of Truth

Task stores:

- current task state
- current task metadata

EventLog stores:

- task creation history
- lifecycle history

## Consequences

### Advantages

- Simple task creation workflow
- Consistent lifecycle behavior
- Immediate task usability
- Complete audit history
- Supports retrospective task entry

### Disadvantages

- Task creation always starts work immediately
- Draft task support would require a future architectural decision
