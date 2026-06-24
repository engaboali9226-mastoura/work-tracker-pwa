# ADR-034: Notion Query Filter Strategy

## Status

Accepted

## Context

Repositories require filtering capabilities when querying Notion databases.

Embedding raw Notion filter objects directly inside repositories would tightly couple repository implementations to the Notion API filter structure.

A dedicated filter construction strategy is required.

## Decision

Introduce filter builders responsible for creating Notion query filter objects.

Repositories may compose filters through dedicated helper classes rather than constructing raw filter structures inline.

## Consequences

### Positive

* Cleaner repositories
* Reduced Notion API coupling
* Easier testing
* Centralized query construction

### Negative

* Additional infrastructure classes
