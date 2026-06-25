# ADR-041 Task Context Inheritance Strategy

## Status

Accepted

## Context

WorkDay owns operational context.

Examples:

- Area
- Site
- Project
- Contractor

Tasks belong to a WorkDay.

Requiring users to repeatedly enter the same context for every task creates duplication and increases data inconsistency.

ADR-037 established that WorkDay acts as the default operational context.

A strategy is required to define how tasks obtain context values.

## Decision

Tasks shall inherit context values from their parent WorkDay.

Inherited fields:

- Area
- Site
- Project
- Contractor

Task creation may optionally override inherited values.

Inheritance is resolved by TaskCreationService.

## Rules

### TCI-001

A Task cannot be created without a valid WorkDay.

### TCI-002

If a context field is not provided in the task command:

Task inherits the value from WorkDay.

### TCI-003

If a context field is explicitly provided:

Task value overrides WorkDay value.

### TCI-004

Inherited values are copied into the Task aggregate.

Tasks do not dynamically reference WorkDay values.

## Consequences

Positive:

- Reduced data duplication.
- Faster task creation.
- Consistent reporting.
- Better user experience.

Negative:

- Task creation logic becomes more complex.
- Additional validation required.

## Related Decisions

- ADR-036 WorkDay Aggregate Strategy
- ADR-037 Master Data Strategy
- ADR-040 Task Context Ownership Strategy
