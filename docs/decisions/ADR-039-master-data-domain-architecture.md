# ADR-039 Master Data Domain Architecture

## Status

Accepted

## Context

The system currently contains operational domains:

- Task
- WorkDay
- Event Log

Business analysis identified a growing dependency on shared reference data.

Examples:

- Area
- Site
- Project
- Contractor
- Category
- SubCategory
- Work Type
- Team
- Equipment
- Unit Of Measure

These entities are used across work days, tasks, production reporting, statistics, dashboards, and automation workflows.

The current implementation contains only partial models for some reference entities and does not define a unified architecture for master data management.

## Decision

The system shall adopt a dedicated Master Data Domain Architecture.

The initial master data entities are:

- Area
- Site
- Project
- Contractor

- Category
- SubCategory
- WorkType

- Team
- Equipment

- UnitOfMeasure

Master data entities shall act as reference data and be managed independently from operational domains.

## Architecture

Each Master Data Domain shall contain:

- Model
- Repository
- Query Service

Master Data Domains shall not contain:

- Lifecycle Services
- State Machines
- Workflow Logic

Master Data entities are considered reference data and do not participate in operational workflows.

## Usage Rules

### WorkDay Defaults

WorkDay may define default values for:

- Area
- Site
- Project
- Contractor
- Contract Number

### Task Inheritance

Tasks may inherit values from WorkDay.

Tasks may override inherited values when required.

## Future Integration

Master Data shall be used by:

- WorkDay Domain
- Task Domain
- Task Production Domain
- Reporting
- Dashboards
- n8n Automation Workflows

## Consequences

### Positive

- Consistent reporting
- Centralized reference data
- Better validation
- Reduced duplication
- Improved scalability

### Negative

- Additional repositories required
- Additional Notion databases required
- Additional synchronization logic required

## Implementation Plan

Phase 1

- Area
- Project
- Site
- Contractor

Phase 2

- Category
- SubCategory
- WorkType
- UnitOfMeasure

Phase 3

- Team
- Equipment

Phase 4

- Integrate WorkDay defaults

Phase 5

- Integrate Task inheritance and overrides

## Related Decisions

- ADR-036 WorkDay Aggregate Strategy
- ADR-037 Master Data Strategy
- ADR-038 Task Production Reporting Strategy
