# ADR-033: Notion Page Extraction Strategy

## Status

Accepted

## Context

The Notion API returns raw page objects that contain nested property structures.

Task repositories require domain entities and should not be responsible for understanding or parsing raw Notion responses.

As the system expands, multiple repositories may need to read data from Notion databases. Embedding Notion-specific extraction logic inside repositories would increase coupling and reduce maintainability.

A dedicated extraction layer is required to isolate Notion response structures from repository implementations.

## Decision

Introduce Notion Page Extractors responsible for transforming raw Notion API responses into strongly typed page DTOs.

Repositories will use extractors to convert raw Notion pages into page DTOs before applying domain mapping.

The data flow becomes:

Raw Notion Page

↓

Notion Page Extractor

↓

Notion Page DTO

↓

Domain Mapper

↓

Domain Entity

Repositories remain responsible only for persistence operations and query orchestration.

Notion-specific property extraction logic must not be implemented directly inside repositories.

## Consequences

### Positive

* Clear separation of responsibilities
* Cleaner repository implementations
* Reduced coupling to Notion API structures
* Improved testability
* Easier support for additional repositories

### Negative

* Additional mapper/extractor classes
* Slightly larger infrastructure layer

## Implementation Notes

Examples:

* NotionTaskPageExtractor
* NotionEventPageExtractor

Extractors belong to the Infrastructure layer and are responsible only for reading Notion page structures.

Domain services and domain models remain unaware of Notion-specific implementations.
