# ADR-044: Production Record Architecture

## Status

Accepted

## Context

Tasks represent work activities.

Production quantities should not be stored directly on Task.

A single task may generate multiple production entries during its lifecycle.

Examples:

- Morning production update
- Midday production update
- End-of-day production update

Storing production inside Task would make reporting, auditing, and future integrations difficult.

## Decision

Introduce a dedicated ProductionRecord domain.

Relationship:

Task
└── ProductionRecord*

A task may have zero or many production records.

Each production record belongs to exactly one task.

## Model

ProductionRecord

- productionRecordId
- taskKey
- quantity
- unit
- recordedAt

## Rules

Production records may only be created for tasks whose category is:

Production

Tasks belonging to:

- Safety
- Quality
- Logistics
- Administration

must not accept production records.

## Consequences

Benefits:

- Historical production tracking
- Auditable production entries
- Multiple production updates per task
- Future reporting support
- Future dashboard support

Tradeoffs:

- Additional domain complexity
- Additional repository and services

Accepted because long-term reporting requirements outweigh complexity.
