# WT V2 - Domain Model V1
Date: 2026-06-24

---

# Core Domain

The system is built around three primary entities:

- WorkDay
- Task
- Event

Additional entities will be introduced gradually.

---

# WorkDay

Represents a single operational work day.

## Fields

- WorkDayId
- Date

- Area
- Site
- Project

- Contractor
- ContractNumber

- StartedAt
- EndedAt

- Status

- CreatedAt
- UpdatedAt

---

## Status

- Open
- Closed

---

## Rules

### WD-001

Only one active work day can exist at a time.

---

### WD-002

Closing a work day automatically pauses all active tasks.

Pause Reason:

End Of Work Day

---

# Task

Represents a work activity performed during a work day.

## Fields

- TaskId
- WorkDayId

- Title

- Category
- SubCategory

- StartedAt
- EndedAt

- Status

- PauseReason
- CompletionReason

- CreatedAt
- UpdatedAt

---

## Status

- Active
- Paused
- Completed

---

## Rules

### TASK-001

Task becomes Active immediately after creation.

---

### TASK-002

Paused tasks may be resumed.

---

### TASK-003

Completed tasks cannot be resumed.

---

### TASK-004

Pause operations must record a reason.

---

### TASK-005

Completion operations must record a reason.

---

# Event

Represents an audit record of system activity.

## Fields

- EventId

- EntityType
- EntityId

- EventType

- OccurredAt
- RecordedAt

- Description

- Metadata

---

## Event Types

### Work Day Events

- WorkDayStarted
- WorkDayEnded

### Task Events

- TaskCreated
- TaskPaused
- TaskResumed
- TaskCompleted

### System Events

- NoteAdded
- TaskUpdated
- WorkDayUpdated

---

# Future Master Data

The following entities will become standalone domains:

## Area

Represents a geographical area.

---

## Site

Represents a physical location.

---

## Project

Represents a project.

---

## Contractor

Represents the executing contractor.

---

# Future Operational Entities

## Crew

Represents task workforce allocation.

Fields:

- Name
- Role
- Count

---

## Equipment

Represents task equipment allocation.

Fields:

- EquipmentName
- Purpose

---

## TaskAchievement

Represents measurable task output.

Examples:

- Meter Installation
- Excavation
- Cable Laying

Fields:

- AchievementType
- Unit
- Quantity

---

# Relationships

WorkDay
 └── Tasks

Task
 ├── Events
 ├── Crew
 ├── Equipment
 └── Achievements

Area
 └── Sites

Project
 └── WorkDays

