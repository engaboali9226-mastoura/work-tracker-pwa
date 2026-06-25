# ADR-040 Task Context Ownership Strategy

## Status

Accepted

## Context

The introduction of WorkDay as an Aggregate Root (ADR-036) and the Master Data architecture (ADR-037) created a new question:

Where should operational context be owned?

A task is executed within a specific operational context that includes:

- Area
- Site
- Project
- Contractor

Initially, these values could be obtained indirectly from the associated WorkDay.

However, relying on WorkDay as the sole source of operational context creates historical consistency problems.

Examples:

- A WorkDay may later be corrected.
- Project assignments may change.
- Contractor relationships may change.

Business reporting must remain historically accurate even if WorkDay metadata changes after task creation.

## Decision

Task shall become the owner of its operational context.

The following fields shall be stored directly on Task:

- areaId
- siteId
- projectId
- contractorId

These values are persisted as part of the Task aggregate.

Task reporting must use the values stored on the Task itself.

Historical reporting must not depend on reading current values from WorkDay.

## Rules

### TC-001

Every Task stores its own operational context.

### TC-002

Operational context includes:

- Area
- Site
- Project
- Contractor

### TC-003

Historical reports must use Task context values.

### TC-004

Changes to WorkDay after Task creation must not alter Task context.

### TC-005

Task context is considered part of the Task aggregate state.

## Consequences

### Positive

- Historical accuracy is preserved.
- Reporting becomes deterministic.
- Tasks remain self-contained.
- Future analytics become simpler.

### Negative

- Context data is duplicated between WorkDay and Task.
- Additional fields must be persisted.
- Synchronization logic is required during task creation.

## Related Decisions

- ADR-036 WorkDay Aggregate Strategy
- ADR-037 Master Data Strategy
- ADR-041 Task Context Inheritance Strategy

## Implementation Notes

Task was expanded to store:

- areaId
- siteId
- projectId
- contractorId

Task creation later inherited these values from WorkDay by default.

Inheritance behavior was formalized separately in ADR-041.
