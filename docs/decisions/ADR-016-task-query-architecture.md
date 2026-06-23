# ADR-016 Task Query Architecture

Status: Approved

## Decision

A dedicated TaskQueryService shall manage task retrieval operations.

Task query logic must not be scattered across application code.

All task retrieval operations shall be executed through TaskQueryService.

## Supported Queries

The service shall support:

* getTaskByKey()
* getTasksByWorkDay()
* getTasksByStatus()
* getActiveTasks()

## Query Definitions

### getTaskByKey()

Returns a single Task identified by taskKey.

If no Task exists for the supplied key, null shall be returned.

### getTasksByWorkDay()

Returns all Tasks belonging to a specific WorkDay.

Task ownership is determined by workDayKey.

### getTasksByStatus()

Returns all Tasks matching a specific TaskStatus.

Supported statuses:

* active
* paused
* completed
* cancelled

### getActiveTasks()

Returns Tasks currently in active status only.

Paused Tasks shall not be included.

Completed Tasks shall not be included.

Cancelled Tasks shall not be included.

## Source Of Truth

Task data shall be retrieved from TaskRepository.

TaskQueryService shall not access storage implementations directly.

## Repository Integration

TaskQueryService depends on TaskRepository.

All query operations shall be delegated through repository contracts.

## Separation Of Responsibilities

TaskQueryService is responsible for retrieval operations only.

TaskCreationService remains responsible for task creation.

TaskLifecycleService remains responsible for task state transitions.

## Future Expansion

Additional query operations may be introduced in the future, including:

* getTasksByProject()
* getTasksByCategory()
* getTasksBySite()
* searchTasks()

These operations are outside the scope of this decision.

## Consequences

### Advantages

* Centralized task query logic
* Consistent retrieval behavior
* Clear separation between commands and queries
* Easier testing
* Easier future reporting features

### Disadvantages

* Additional service layer
* More repository operations required
