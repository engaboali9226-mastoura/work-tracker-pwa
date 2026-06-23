# ADR-013 Task Lifecycle Architecture

Status: Approved

## Decision

A dedicated TaskLifecycleService shall manage all task lifecycle transitions.

Task status updates must not be performed directly by application code.

All lifecycle changes shall be executed through TaskLifecycleService.

Task creation immediately starts the task and places it in the active state.

Task creation is considered the task start operation.

No separate startTask() lifecycle operation shall exist.

## Task States

Supported task states:

* active
* paused
* completed
* cancelled

## Allowed Transitions

active

* paused
* completed
* cancelled

paused

* active
* completed
* cancelled

## Forbidden Transitions

No transitions are allowed from:

* completed
* cancelled

These states are terminal.

## Lifecycle Operations

The service shall support:

* pauseTask()
* resumeTask()
* completeTask()
* cancelTask()

Task creation and task startup are handled by the task creation workflow.

A newly created task shall be created directly in the active state.

## Timestamp Selection

Task creation and lifecycle operations may use either:

* Current Time
* User-selected Custom Time

The selected timestamp becomes the official timestamp recorded for the operation.

Task state updates and EventLog entries shall use the selected timestamp rather than application execution time.

This supports retrospective work entry and manual time correction.

## Reason Capture

Pause operations require a reason.

Resume operations require a reason describing why work is being resumed.

The reason may indicate that the original pause condition was resolved or that another circumstance enabled work to continue.

Cancel operations require a reason.

All provided reasons shall be recorded in EventLog entries.

Completion operations do not require a reason.

## EventLog Integration

Each lifecycle operation must create an EventLog entry.

Operation to event mapping:

| Operation     | Event Type     |
| ------------- | -------------- |
| Task Creation | task-started   |
| pauseTask     | task-paused    |
| resumeTask    | task-resumed   |
| completeTask  | task-completed |
| cancelTask    | task-cancelled |

## Source of Truth

Task stores current state only.

EventLog stores historical activity.

Task lifecycle history shall not be stored inside the Task entity.

## Time Tracking

Task.startTime represents the original task start time.

Task.endTime represents the final completion or cancellation time.

Pause and resume intervals shall not be stored in Task.

Lifecycle duration analysis shall be derived from EventLog records.

## Parallel Tasks

Multiple active tasks are allowed simultaneously.

Task overlap is permitted.

## Cross-Day Tasks

Tasks may span multiple calendar days.

Task ownership remains assigned to the WorkDay in which the task started.

## Consequences

### Advantages

* Simple task model
* Centralized lifecycle rules
* Complete audit history
* Support for custom timestamps
* Detailed operational history
* Future reporting support
* Simpler task creation workflow
* No inactive task state required

### Disadvantages

* Lifecycle analytics require EventLog processing
* Some reports may require event reconstruction
  }
