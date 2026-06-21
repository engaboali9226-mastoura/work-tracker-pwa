# Work Tracker PWA V2

## As-Built Documentation

### Document

000-project-status.md

### Status

Current implementation baseline.

### Last Updated

2026-06-21

---

# Project Overview

Work Tracker PWA V2 is a Progressive Web Application designed to track attendance, work activities, tasks, projects, sites, and operational notes.

The application is currently in the domain modeling phase.

---

# Repository

work-tracker-pwa

---

# Development Environment

GitHub Web

GitHub Codespaces

Vite

TypeScript

---

# Current Build Status

Build successful.

Initial project setup completed.

---

# Completed Work

## Architecture

Architecture documentation completed.

ADR-001 through ADR-012 completed and approved.

---

## Core Domain Models

The following domain models have been implemented.

### Area

Location grouping and organizational boundary.

File:

src/domains/areas/models/area.model.ts

---

### Project

Represents a tracked project.

File:

src/domains/projects/models/project.model.ts

---

### Site

Represents a physical work location.

File:

src/domains/sites/models/site.model.ts

---

### WorkDay

Represents a working day.

File:

src/domains/work-days/models/work-day.model.ts

---

### Task

Represents a unit of work.

File:

src/domains/tasks/models/task.model.ts

Current structure:

* taskKey
* workDayKey
* title
* categoryId
* siteId
* projectId
* startTime
* endTime
* status

Notes:

pauseReason removed.

cancellationReason removed.

Reasons are planned to be recorded through EventLog entries.

---

### Task Status

File:

src/domains/tasks/models/task-status.ts

Values:

* active
* paused
* completed
* cancelled

---

### Task Category

File:

src/domains/task-categories/models/task-category.model.ts

---

### Note

File:

src/domains/notes/models/note.model.ts

---

### Event Log

File:

src/domains/event-log/models/event.model.ts

Current structure:

* eventId
* eventType
* entityType
* entityId
* occurredAt
* description

Purpose:

Provides historical audit records for domain activities.

---

### Event Types

File:

src/domains/event-log/models/event-type.ts

Values:

* attendance-started
* attendance-ended
* task-started
* task-paused
* task-resumed
* task-completed
* task-cancelled

---

# Implemented Business Rules

## Task Ownership

A task belongs to the Work Day in which it starts.

---

## Cross-Day Tasks

Tasks may continue across multiple calendar days.

Ownership remains with the starting Work Day.

---

## Parallel Tasks

Multiple tasks may overlap in time.

Parallel execution is allowed.

Future reporting should identify overlapping work periods.

---

## Reporting Requirements

Future reports must identify:

* Work carried from previous days
* Work extended into following days
* Parallel task execution

---

# Current Architecture State

Task represents current state.

EventLog represents historical activity.

Lifecycle services are not yet implemented.

Persistence layer is not yet implemented.

Reporting layer is not yet implemented.

---

# Next Planned Phase

Task Lifecycle Service

Planned operations:

* startTask()
* pauseTask()
* resumeTask()
* completeTask()
* cancelTask()

Each lifecycle transition must create a corresponding EventLog entry.

Implementation not started.
