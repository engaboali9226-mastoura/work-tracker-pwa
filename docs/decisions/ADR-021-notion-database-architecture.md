# ADR-021: Notion Database Architecture

## Status

Accepted

---

## Context

Work Tracker V2 uses Notion as its primary data store as defined in ADR-002.

The application manages three primary domain concepts:

- Tasks
- Events
- WorkDays

A clear database architecture is required before implementing repository and integration layers.

The architecture must:

- Support Domain-Driven Design boundaries
- Keep repositories simple and predictable
- Enable efficient querying
- Minimize data duplication
- Support future schema evolution

---

## Decision

The system shall use two primary Notion databases:

```text
Tasks Database
Events Database
```

WorkDay data will not be stored directly.

Instead, WorkDay views will be derived dynamically from Tasks and Events as defined in ADR-019.

---

## Database Overview

### Tasks Database

Stores the current state of every task.

Each task exists exactly once in this database.

Responsibilities:

- Task creation
- Task updates
- Task status tracking
- Task ownership tracking
- Task querying

---

### Events Database

Stores immutable task lifecycle events.

Each event represents a historical action that occurred within the system.

Responsibilities:

- Event history
- Audit trail
- Task activity reconstruction
- Future reporting and analytics

---

## Tasks Database Schema

### Required Properties

| Property | Type | Purpose |
|-----------|--------|----------|
| Task Key | Title | Primary task identifier |
| Title | Rich Text | Task title |
| Status | Select | Current task status |
| Owner Day Key | Rich Text | WorkDay ownership |
| Created At | Date | Creation timestamp |
| Updated At | Date | Last modification timestamp |

---

### Optional Properties

| Property | Type | Purpose |
|-----------|--------|----------|
| Description | Rich Text | Task details |
| Started At | Date | Work start timestamp |
| Completed At | Date | Completion timestamp |
| Archived At | Date | Archive timestamp |

---

## Events Database Schema

### Required Properties

| Property | Type | Purpose |
|-----------|--------|----------|
| Event Key | Title | Primary event identifier |
| Task Key | Rich Text | Related task |
| Event Type | Select | Event category |
| Timestamp | Date | Event timestamp |

---

### Optional Properties

| Property | Type | Purpose |
|-----------|--------|----------|
| Previous Status | Rich Text | State before change |
| New Status | Rich Text | State after change |
| Notes | Rich Text | Additional information |

---

## WorkDay Strategy

No WorkDay database shall exist.

WorkDay data shall be generated dynamically by:

```text
Tasks
+
Events
=
Derived WorkDay
```

Benefits:

- No duplicated data
- Single source of truth
- Consistency with ADR-019

---

## Property Naming Convention

All Notion properties shall use:

```text
Title Case
```

Examples:

```text
Task Key
Owner Day Key
Created At
Updated At
Event Type
```

Abbreviations and cryptic names are prohibited.

---

## Key Strategy

Task identity shall be based on:

```text
Task Key
```

Event identity shall be based on:

```text
Event Key
```

Notion Page IDs shall never be used as Domain identifiers.

They remain Infrastructure-only identifiers.

---

## Relationship Strategy

Relationships shall be represented using Domain Keys.

Example:

```text
Event
    →
Task Key
```

No direct dependency on Notion Relation fields is required.

This keeps the data model portable and independent of Notion-specific features.

---

## Query Strategy

Task queries shall primarily target:

```text
Tasks Database
```

Event queries shall primarily target:

```text
Events Database
```

WorkDay queries shall aggregate information from both databases and construct derived WorkDay models.

---

## Consequences

### Advantages

- Simple database structure
- Clear ownership of data
- Strong alignment with Domain Model
- Easier migration away from Notion
- No duplicated WorkDay storage

### Trade-offs

- WorkDay generation requires aggregation logic
- Additional processing during WorkDay queries

These trade-offs are acceptable because they preserve consistency and reduce storage complexity.

---

## Outcome

Work Tracker V2 shall use:

```text
Tasks Database
Events Database
```

as its only persistent databases.

WorkDay data shall remain a derived model generated dynamically from stored Tasks and Events.