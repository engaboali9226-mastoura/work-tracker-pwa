# ADR-042: Task Classification Strategy

## Status

Accepted

## Context

The current Task domain supports operational context inheritance from WorkDay:

- areaId
- siteId
- projectId
- contractorId

This structure identifies where work is performed but does not identify what kind of work is being performed.

As the system evolves toward production tracking and operational control, tasks must support hierarchical classification.

Without classification, reporting, KPI calculation, production measurement, and automation become difficult to scale.

## Decision

Introduce a task classification hierarchy:

Category
└── SubCategory

Tasks may reference both:

- categoryId
- subCategoryId

Classification remains independent from operational context.

Operational Context:

- Area
- Site
- Project
- Contractor

Classification Context:

- Category
- SubCategory

## Domain Model

### Category

Represents a top-level classification.

Examples:

- Electrical
- Civil
- Safety
- Quality
- Mechanical

Properties:

- id
- name
- isActive

### SubCategory

Represents a classification belonging to a Category.

Examples:

- Meter Installation
- Cable Pulling
- Excavation
- Backfilling
- Safety Observation

Properties:

- id
- categoryId
- name
- isActive

## Relationship

Category
└── SubCategory

A SubCategory must belong to exactly one Category.

## Task Changes

Task will support:

- categoryId
- subCategoryId

Both remain optional during the initial rollout.

## Validation Rules

When both values are supplied:

- categoryId
- subCategoryId

The system must verify:

- SubCategory exists
- SubCategory.categoryId equals categoryId

Otherwise task creation must fail.

## Repository Strategy

Introduce:

- CategoryRepository
- SubCategoryRepository

Repositories remain responsible only for persistence operations.

Business rules remain inside domain services.

## Query Strategy

Introduce:

- CategoryQueryService
- SubCategoryQueryService

Following the existing Master Data Query pattern.

## Consequences

### Positive

- Standardized task classification
- Better reporting
- Better KPI support
- Better automation support
- Foundation for production tracking

### Negative

- Additional domains
- Additional repositories
- Additional validation rules

## Result

The system adopts a hierarchical classification model:

Category
└── SubCategory

This decision establishes the foundation for future Production Tracking and Control System capabilities.
