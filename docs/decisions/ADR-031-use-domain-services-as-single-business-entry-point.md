# ADR-031: Use Domain Services As Single Business Entry Point

## Status

Accepted

---

## Context

Work Tracker V2 contains multiple system actors.

Examples:

```text
User

React PWA

n8n Workflows

Future Integrations
```

All actors may initiate business operations.

Examples:

```text
Create Task

Pause Task

Resume Task

Complete Task

Create WorkDay

Close WorkDay
```

Without a unified entry point, business rules may become duplicated across multiple components.

This would create inconsistency and increase maintenance complexity.

---

## Decision

All business operations shall be executed through Domain Services.

Domain Services shall act as the single business entry point for the system.

No actor shall bypass Domain Services when performing business operations.

---

## Allowed Flow

### User Initiated Operations

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

### Automated Operations

```text
n8n
 ↓
Domain Service
 ↓
Repository
 ↓
Notion
```

---

## Responsibilities

### Domain Services

Responsibilities:

- Business rules
- Validation
- State transitions
- Event generation
- Domain consistency

Examples:

```text
TaskCreationService

TaskLifecycleService

TaskQueryService

WorkDayQueryService
```

---

### PWA

Responsibilities:

- User interaction
- Command submission
- Display

The PWA shall not implement business rules.

---

### n8n

Responsibilities:

- Scheduling
- Automation
- Workflow orchestration

n8n shall not implement business rules.

---

## Rejected Alternative

### Duplicate Business Logic

```text
PWA
 ↓
Business Rules

n8n
 ↓
Business Rules
```

Rejected because business rules would exist in multiple locations.

---

### Direct Repository Access

```text
PWA
 ↓
Repository

n8n
 ↓
Repository
```

Rejected because business validation could be bypassed.

---

## Consequences

### Advantages

- Single source of business truth
- Consistent behavior
- Easier testing
- Reduced duplication
- Improved maintainability

### Trade-offs

- Additional service layer

This trade-off is acceptable because consistency is a primary architectural requirement.

---

## Outcome

All business operations shall be executed through Domain Services.

PWA, n8n, and future integrations shall interact with the system through Domain Services only.

Domain Services become the single business entry point of Work Tracker V2.