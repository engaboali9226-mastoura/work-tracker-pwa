# ADR-036 WorkDay Aggregate Strategy

## Status

Accepted

## Context

The current implementation derives WorkDay information from tasks through WorkDayQueryService.

Business analysis showed that WorkDay is not merely a reporting construct. It owns its own metadata, lifecycle, and business rules.

Examples:

- Area
- Site
- Project
- Contractor
- Contract Number
- Started At
- Ended At
- Status

In addition, work day operations affect task lifecycle directly.

Example:

Closing a work day automatically pauses all active tasks.

## Decision

WorkDay shall become a first-class aggregate root.

Tasks must belong to a WorkDay.

A dedicated WorkDayRepository shall be introduced.

WorkDay lifecycle shall be managed through dedicated application services.

## Business Rules

### WD-001

Only one open work day may exist at a time.

### WD-002

Closing a work day automatically pauses all active tasks.

Pause Reason:

End Of Work Day

### WD-003

A task must belong to a work day.

## Consequences

Positive:

- Explicit work day ownership.
- Better lifecycle management.
- Simpler reporting.
- Better support for automation.

Negative:

- New repository required.
- Notion schema expansion required.
- Migration from derived work day model required.

## Implementation Plan

1. Create WorkDay aggregate.
2. Create WorkDayRepository contract.
3. Implement MemoryWorkDayRepository.
4. Implement NotionWorkDayRepository.
5. Create WorkDay lifecycle services.
6. Update query services.
