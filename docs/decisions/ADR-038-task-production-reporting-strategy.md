# ADR-038 Task Production Reporting Strategy

## Status

Accepted

## Context

Business analysis revealed that task lifecycle data is not sufficient for operational reporting.

A task may produce multiple measurable outputs.

Example:

Task:
- Meter Installation

Production Results:
- 1 Meter Installed
- 35 Meters Of Cable Installed
- 20 Meters Of Excavation

Storing production data directly inside Task would limit reporting flexibility and future expansion.

Future statistics require production data to be stored independently.

Examples:

- Installed meters by project.
- Cable length by site.
- Excavation length by area.
- Production by contractor.
- Production by team.
- Production by equipment.
- Production by work type.

## Decision

Production reporting shall be separated from task lifecycle management.

A new entity shall be introduced:

TaskProductionEntry

A task may contain zero or more production entries.

Example:

Task
 ├── Production Entry
 ├── Production Entry
 └── Production Entry

Each production entry represents a measurable production result.

## Task Production Entry

Initial attributes:

- Production Entry Key
- Task Key
- Work Type Id
- Quantity
- Unit Of Measure Id

Optional attributes:

- Notes
- Safety Notes

## Examples

Task:
Meter Installation

Production Entries:

1)

Work Type:
Meter Installation

Quantity:
1

Unit:
Count

2)

Work Type:
Cable Installation

Quantity:
35

Unit:
Meter

3)

Work Type:
Excavation

Quantity:
20

Unit:
Meter

## Relationships

Task
  └── TaskProductionEntries

WorkType
  └── TaskProductionEntries

UnitOfMeasure
  └── TaskProductionEntries

## Consequences

Positive:

- Accurate production statistics.
- Flexible reporting.
- Multiple production records per task.
- Better support for future analytics.
- Better support for automation workflows.

Negative:

- Additional repositories required.
- Additional Notion database required.
- Additional synchronization logic required.

## Implementation Plan

Phase 1

- Create TaskProductionEntry model.

Phase 2

- Create repository contract.

Phase 3

- Create memory repository.

Phase 4

- Create Notion repository.

Phase 5

- Integrate task completion workflow.

Phase 6

- Build production reporting services.
