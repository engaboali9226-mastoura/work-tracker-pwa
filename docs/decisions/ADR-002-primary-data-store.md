# ADR-002

## Title

Use Notion As Primary Data Store

## Status

Approved

## Context

The current system uses Notion databases for:

- Work Days
- Activity Log

The project is currently single-user and does not require a dedicated application database.

## Decision

Use Notion as the primary data store.

Frontend data flows through:

Frontend
↓
API Layer
↓
n8n
↓
Notion

## Consequences

### Positive

- Fast development
- Easy maintenance
- Existing workflows remain valid

### Negative

- Notion performance limits may appear in the future

## Future Strategy

If data volume grows significantly:

- Quarterly Archiving
- Evaluate migration strategy
