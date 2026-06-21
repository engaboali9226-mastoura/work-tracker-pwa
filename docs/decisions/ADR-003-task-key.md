# ADR-003

## Title

Use Task Key As Primary Task Identifier

## Status

Approved

## Context

Task names may be duplicated.

Examples:

- Inspection
- Testing
- Site Visit

The same task name can appear multiple times.

## Decision

Every task must have a unique Task Key.

All update operations must use Task Key instead of Task Name.

Examples:

- Add Note
- Finish Task
- Future Updates

## Consequences

### Positive

- No duplicate task conflicts
- Reliable updates
- Easier workflow maintenance

### Negative

- Additional identifier field required
