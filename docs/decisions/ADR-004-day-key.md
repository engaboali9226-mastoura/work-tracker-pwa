# ADR-004

## Title

Use Day Key For Daily Tracking

## Status

Approved

## Context

Work activities belong to a specific work day.

The system requires a reliable way to group activities under a single day record.

## Decision

Every work day must have a unique Day Key.

All daily summaries and activity relations use Day Key.

Example:

DAY-20260621

## Consequences

### Positive

- Reliable day grouping
- Easier reporting
- Simplified relations between databases

### Negative

- Additional identifier field required
