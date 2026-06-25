# ADR-037 Master Data Strategy

## Status

Accepted

## Context

Business analysis revealed that operational data relies on a shared set of reference entities.

Examples:

- Area
- Site
- Project
- Contractor
- Category
- SubCategory

Currently these concepts are represented as identifiers attached to tasks.

The current model does not define ownership, lifecycle, validation rules, or relationships for these entities.

Future reporting, automation, filtering, and statistics depend heavily on consistent master data.

Examples:

- Completed tasks by project.
- Completed tasks by site.
- Completed tasks by contractor.
- Production statistics by category.
- Work hours by area.

## Decision

The system shall introduce Master Data entities.

Initial entities:

- Area
- Site
- Project
- Contractor
- Category
- SubCategory

Tasks shall reference master data entities through identifiers.

WorkDay shall provide default context values.

Tasks may override WorkDay context when necessary.

## WorkDay Defaults

WorkDay may define:

- Area
- Site
- Project
- Contractor
- Contract Number

When a task is created:

If no explicit values are provided:

Task values inherit WorkDay values.

Example:

WorkDay
  Project = NEOM

Task
  Project = NEOM

If a task explicitly defines a value:

Task value overrides WorkDay value.

## Relationships

Area
  └── Sites

Project
  └── WorkDays

Project
  └── Tasks

Contractor
  └── Projects

Category
  └── SubCategories

Task
  ├── Category
  ├── SubCategory
  ├── Site
  ├── Project
  └── Contractor

## Consequences

Positive:

- Consistent reporting.
- Better filtering.
- Better automation support.
- Reduced duplication.
- Easier future expansion.

Negative:

- Additional repositories required.
- Additional Notion databases required.
- Additional synchronization logic required.

## Implementation Plan

Phase 1

- Define master data models.

Phase 2

- Define repository contracts.

Phase 3

- Create memory repositories.

Phase 4

- Create Notion repositories.

Phase 5

- Integrate WorkDay defaults.

Phase 6

- Integrate Task overrides.

