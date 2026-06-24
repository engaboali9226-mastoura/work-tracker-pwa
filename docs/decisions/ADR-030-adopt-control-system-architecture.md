# ADR-030: Adopt Control System Architecture

## Status

Accepted

---

## Context

Work Tracker V2 is intended to function as a personal work control system.

The platform is not limited to task management.

The system must coordinate:

- Task execution
- Work day management
- Automation workflows
- Notifications
- Reporting
- Operational monitoring

A higher-level architecture is required to define the responsibilities of all major components.

---

## Decision

The platform shall adopt a Control System Architecture.

The architecture shall consist of four primary layers:

```text
Control Layer
      ↓
Business Layer
      ↓
Automation Layer
      ↓
Persistence Layer
```

---

## System Architecture

```text
┌─────────────────────────┐
│       React PWA         │
│     Control Center      │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│     Domain Services     │
│     Business Rules      │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│          n8n            │
│ Workflow Orchestrator   │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│        Notion           │
│     System Memory       │
└─────────────────────────┘
```

---

## Control Layer

### Component

```text
React PWA
```

### Responsibilities

- User interaction
- Dashboards
- Operational visibility
- Manual commands
- Configuration

The Control Layer shall not contain automation workflows.

---

## Business Layer

### Components

```text
TaskCreationService

TaskLifecycleService

TaskQueryService

WorkDayQueryService
```

### Responsibilities

- Business rules
- Validation
- State transitions
- Query logic

The Business Layer shall remain independent of automation tooling.

---

## Automation Layer

### Component

```text
n8n
```

### Responsibilities

- Scheduling
- Workflow execution
- Notifications
- Reports
- Integrations
- Automated operations

Examples:

```text
Create WorkDay

Close WorkDay

Send Reminder

Generate Daily Summary

Generate Weekly Report
```

---

## Persistence Layer

### Component

```text
Notion
```

### Responsibilities

- Data persistence
- Historical records
- Event storage
- Operational tracking

Notion shall remain the primary source of truth.

---

## Event Flow

### Manual Flow

```text
User
 ↓
PWA
 ↓
Domain Service
 ↓
Repository
 ↓
Notion
```

---

### Automated Flow

```text
n8n
 ↓
Domain Service
 ↓
Repository
 ↓
Notion
 ↓
Notification
```

---

## Rejected Alternative

### Monolithic PWA Architecture

```text
PWA
 ↓
Business Logic
 ↓
Automation
 ↓
Persistence
```

Rejected because responsibilities become tightly coupled and difficult to maintain.

---

## Consequences

### Advantages

- Clear separation of concerns
- Dedicated automation layer
- Scalable architecture
- Easier integrations
- Independent workflow execution

### Trade-offs

- Additional infrastructure complexity
- Additional deployment component

These trade-offs are acceptable because workflow orchestration is a core system requirement.

---

## Outcome

Work Tracker V2 shall be implemented as a Control System.

The PWA acts as the control center.

Domain services act as the business rules engine.

n8n acts as the workflow orchestration engine.

Notion acts as the system memory and source of truth.