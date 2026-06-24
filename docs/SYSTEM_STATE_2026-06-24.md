# WT V2 - System State

Date: 2026-06-24

## Project Vision

WT V2 is a personal work tracking and execution system designed around Domain Driven Design and Clean Architecture principles.

The system aims to:

* Track daily work execution.
* Manage task lifecycle.
* Organize work by work days.
* Record operational events.
* Support multiple repository providers.
* Integrate with Notion as a persistence layer.
* Support future automation through n8n.

---

# Current Architecture

```text
UI

 ↓

Application Container

 ↓

Application Services

 ↓

Repository Contracts

 ↓

Infrastructure Repositories

 ↓

Persistence Provider
(Memory / Notion)
```

---

# Domains

## Active Domains

### Tasks

Responsible for:

* Task creation
* Task lifecycle
* Task querying

Services:

* TaskCreationService
* TaskLifecycleService
* TaskQueryService

Repository:

* TaskRepository

---

### Event Log

Responsible for:

* Recording domain events

Repository:

* EventRepository

---

### Work Days

Responsible for:

* Work day querying
* Work day aggregation

Services:

* WorkDayQueryService

Note:

WorkDay data is currently derived from tasks and does not have a dedicated repository.

---

# Supporting Domains

Present as models only:

* Areas
* Projects
* Sites
* Task Categories
* Notes

These domains are not yet fully implemented.

---

# Repository Providers

## Memory Provider

Implemented

Repositories:

* InMemoryTaskRepository
* InMemoryEventRepository

Purpose:

* Development
* Testing

---

## Notion Provider

Partially Implemented

Repositories:

* NotionTaskRepository
* NotionEventRepository

Supporting Components:

* NotionApiClient
* DTOs
* Mappers
* Extractors

Purpose:

* Production Persistence

---

# Application Composition

ApplicationContainer is responsible for:

* Building configuration
* Creating repository factory
* Creating repositories
* Creating services
* Exposing application services

Current Services:

* TaskCreationService
* TaskLifecycleService
* TaskQueryService
* WorkDayQueryService

---

# Implemented Capabilities

## Task Creation

Supported:

* Create task
* Save task
* Record creation event

---

## Task Lifecycle

Supported:

* Pause task
* Resume task
* Complete task
* Cancel task

Includes transition validation.

---

## Task Query

Supported:

* Find by key
* Find by work day
* Find by status
* Find active tasks

---

## Work Day Query

Supported:

* Get work day
* Get work day details
* Get work day tasks
* Get work days in range

---

# Configuration

Current provider selection:

* memory
* notion

Environment variables:

* VITE_REPOSITORY_PROVIDER
* VITE_NOTION_API_TOKEN
* VITE_NOTION_TASKS_DATABASE_ID
* VITE_NOTION_EVENTS_DATABASE_ID

---

# Known Architectural Issues

## Configuration Coupling

Current configuration validation requires Notion settings even when Memory provider is selected.

Desired behavior:

Memory provider should work without Notion configuration.

---

# Project Status

Domain Layer: Stable

Application Layer: Stable

Memory Provider: Stable

Notion Provider: In Progress

UI Layer: Not Started

Automation Layer: Not Started

---

# Next Priority

1. Fix configuration strategy.
2. Validate repository provider switching.
3. Complete Notion integration.
4. Build React UI.
5. Integrate n8n automation.
