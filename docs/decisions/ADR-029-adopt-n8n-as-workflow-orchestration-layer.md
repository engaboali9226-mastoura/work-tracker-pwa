# ADR-029: Adopt n8n As Workflow Orchestration Layer

## Status

Accepted

---

## Context

Work Tracker V2 is intended to operate as a personal work control system rather than a simple task management application.

The system must support automated operational workflows such as:

- Automatic WorkDay creation
- Automatic WorkDay closure
- Daily summaries
- Weekly summaries
- Task monitoring
- Notifications
- Scheduled operations
- Cross-system integrations

These responsibilities do not belong inside the Domain Layer.

The Domain Layer is responsible for business rules.

Workflow execution and automation require a dedicated orchestration component.

---

## Decision

n8n shall be adopted as the primary workflow orchestration layer.

n8n shall act as the automation and coordination engine for the platform.

The PWA shall remain focused on user interaction and operational control.

The Domain Layer shall remain focused on business rules.

---

## Architectural Roles

### PWA

Responsibilities:

- Control center
- Dashboard
- User interaction
- Manual commands
- Operational visibility

The PWA shall not be responsible for scheduled automation.

---

### Domain Services

Responsibilities:

- Business rules
- State transitions
- Validation
- Query logic

Examples:

```text
TaskCreationService

TaskLifecycleService

TaskQueryService

WorkDayQueryService
```

The Domain Layer shall not contain workflow scheduling logic.

---

### Notion

Responsibilities:

- System memory
- Persistent storage
- Operational records
- Historical tracking

Notion shall act as the primary source of truth.

---

### n8n

Responsibilities:

- Workflow execution
- Scheduling
- Notifications
- Cross-system coordination
- Automated operations

n8n shall function as the operational orchestration layer.

---

## Example Workflows

### Daily WorkDay Creation

```text
Scheduled Trigger
        ↓
Create WorkDay
        ↓
Store In Notion
        ↓
Create Event
        ↓
Send Notification
```

---

### Daily Shutdown

```text
Scheduled Trigger
        ↓
Retrieve Active Tasks
        ↓
Close WorkDay
        ↓
Generate Summary
        ↓
Send Report
```

---

### Stale Task Monitoring

```text
Scheduled Trigger
        ↓
Query Active Tasks
        ↓
Detect Stale Tasks
        ↓
Send Reminder
```

---

### Weekly Reporting

```text
Scheduled Trigger
        ↓
Collect Metrics
        ↓
Generate Report
        ↓
Send Summary
```

---

## Rejected Alternative

### PWA-Centric Automation

```text
PWA
 ↓
Timers
 ↓
Automation Logic
```

Rejected because:

- Requires users to keep the application open
- Difficult to maintain
- Poor reliability
- Not suitable for scheduled operations

---

### Domain-Service Scheduling

```text
Domain Service
 ↓
Cron Logic
```

Rejected because scheduling concerns do not belong inside the business layer.

---

## Consequences

### Advantages

- Clear separation of concerns
- Reliable automation
- Independent workflow execution
- Easier integrations
- Scalable orchestration model

### Trade-offs

- Additional infrastructure component
- Workflow maintenance overhead

These trade-offs are acceptable because workflow orchestration is a core system requirement.

---

## Future Integrations

n8n may orchestrate integrations with:

```text
Notion

Telegram

WhatsApp

Email

Google Calendar

Google Sheets

OpenAI

Custom APIs
```

without impacting Domain Layer design.

---

## Outcome

n8n is adopted as a core architectural component.

The platform shall use n8n for workflow orchestration, scheduling, notifications, and automated operational processes.

The Domain Layer remains responsible for business rules, while n8n becomes responsible for operational automation.