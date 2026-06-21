# Domain Model

## As-Built Documentation

### Document

010-domain-model.md

### Status

Implemented

### Last Updated

2026-06-21

---

# Overview

This document describes the domain model currently implemented in Work Tracker PWA V2.

The contents of this document reflect the actual implementation in source code and not future plans or architectural intentions.

---

# Domain Structure

The current domain structure consists of:

* Area
* Project
* Site
* WorkDay
* Task
* TaskCategory
* Note
* EventLog

---

# Entity Relationships

```text
Area
 └─ Project
      └─ Site

WorkDay
 └─ Task
      ├─ Note
      └─ EventLog
```

---

# Area

Source:

src/domains/areas/models/area.model.ts

## Structure

```ts
export interface Area {
  areaId: string;
  name: string;
}
```

## Purpose

Represents a high-level organizational or operational area.

## Fields

| Field  | Type   | Description            |
| ------ | ------ | ---------------------- |
| areaId | string | Unique area identifier |
| name   | string | Area name              |

---

# Project

Source:

src/domains/projects/models/project.model.ts

## Structure

```ts
export interface Project {
  projectId: string;
  areaId: string;
  name: string;
}
```

## Purpose

Represents a project belonging to an Area.

## Fields

| Field     | Type   | Description               |
| --------- | ------ | ------------------------- |
| projectId | string | Unique project identifier |
| areaId    | string | Parent Area identifier    |
| name      | string | Project name              |

---

# Site

Source:

src/domains/sites/models/site.model.ts

## Structure

```ts
export interface Site {
  siteId: string;
  projectId: string;
  name: string;
}
```

## Purpose

Represents a physical work site associated with a Project.

## Fields

| Field     | Type   | Description               |
| --------- | ------ | ------------------------- |
| siteId    | string | Unique site identifier    |
| projectId | string | Parent project identifier |
| name      | string | Site name                 |

---

# WorkDay

Source:

src/domains/work-days/models/work-day.model.ts

## Structure

```ts
export interface WorkDay {
  dayKey: string;

  attendanceStart: string;

  attendanceEnd?: string;
}
```

## Purpose

Represents a work attendance period for a calendar day.

## Fields

| Field           | Type   | Description                |
| --------------- | ------ | -------------------------- |
| dayKey          | string | Unique work day identifier |
| attendanceStart | string | Attendance start timestamp |
| attendanceEnd   | string | Attendance end timestamp   |

---

# Task

Source:

src/domains/tasks/models/task.model.ts

## Structure

```ts
export interface Task {
  taskKey: string;

  workDayKey: string;

  title: string;

  categoryId: string;

  siteId?: string;

  projectId?: string;

  startTime: string;

  endTime?: string;

  status: TaskStatus;
}
```

## Purpose

Represents a unit of tracked work.

## Fields

| Field      | Type       | Description            |
| ---------- | ---------- | ---------------------- |
| taskKey    | string     | Unique task identifier |
| workDayKey | string     | Owning work day        |
| title      | string     | Task title             |
| categoryId | string     | Task category          |
| siteId     | string     | Related site           |
| projectId  | string     | Related project        |
| startTime  | string     | Task start timestamp   |
| endTime    | string     | Task end timestamp     |
| status     | TaskStatus | Current task state     |

## Notes

Task contains only current state information.

Task history is stored in EventLog.

pauseReason has been removed.

cancellationReason has been removed.

---

# Task Status

Source:

src/domains/tasks/models/task-status.ts

## Values

```text
active
paused
completed
cancelled
```

---

# Task Category

Source:

src/domains/task-categories/models/task-category.model.ts

## Structure

```ts
export interface TaskCategory {
  categoryId: string;

  name: string;

  description?: string;

  isActive: boolean;
}
```

## Purpose

Provides categorization for tasks.

## Fields

| Field       | Type    | Description                |
| ----------- | ------- | -------------------------- |
| categoryId  | string  | Unique category identifier |
| name        | string  | Category name              |
| description | string  | Optional description       |
| isActive    | boolean | Indicates active usage     |

---

# Note

Source:

src/domains/notes/models/note.model.ts

## Structure

```ts
export interface Note {
  noteId: string;

  taskKey: string;

  text: string;

  createdAt: string;
}
```

## Purpose

Represents a note attached to a task.

## Fields

| Field     | Type   | Description             |
| --------- | ------ | ----------------------- |
| noteId    | string | Unique note identifier  |
| taskKey   | string | Related task identifier |
| text      | string | Note content            |
| createdAt | string | Creation timestamp      |

---

# EventLog

Source:

src/domains/event-log/models/event.model.ts

## Structure

```ts
export interface EventLog {
  eventId: string;

  eventType: EventType;

  entityType: string;

  entityId: string;

  occurredAt: string;

  description?: string;
}
```

## Purpose

Provides a historical record of domain activity.

## Fields

| Field       | Type      | Description               |
| ----------- | --------- | ------------------------- |
| eventId     | string    | Unique event identifier   |
| eventType   | EventType | Event classification      |
| entityType  | string    | Domain entity type        |
| entityId    | string    | Related entity identifier |
| occurredAt  | string    | Event timestamp           |
| description | string    | Optional details          |

---

# Event Types

Source:

src/domains/event-log/models/event-type.ts

## Values

```text
attendance-started
attendance-ended
task-started
task-paused
task-resumed
task-completed
task-cancelled
```

---

# Current Business Rules

## Task Ownership

A task belongs to the WorkDay in which it starts.

---

## Cross-Day Tasks

Tasks may span multiple calendar days.

Ownership remains with the starting WorkDay.

---

## Parallel Tasks

Task overlap is allowed.

Multiple tasks may be active during overlapping time periods.

---

## Reporting Requirements

Future reporting must identify:

* Work carried from previous days
* Work extended into future days
* Parallel task execution periods

---

# Current Implementation Status

Implemented:

* Domain models
* Task status model
* Event model
* Event type model

Not yet implemented:

* Task lifecycle service
* Persistence layer
* Reporting engine
* Synchronization layer
* Application services
