# Work Tracker V2

# Application Layer

**Document Purpose**

This document defines the purpose, responsibilities, boundaries and communication rules of the Application Layer.

The Application Layer acts as the orchestration layer between the Presentation Layer and the Domain Layer.

It exposes application use cases while keeping all business rules inside the Domain Layer.

---

# 1. Purpose

The Application Layer provides a simplified entry point into the system.

Presentation components never communicate directly with Domain Services.

Instead, they communicate through Application Services.

---

# 2. Responsibilities

Application Services are responsible for:

- Coordinating one or more Domain Services.
- Executing complete application use cases.
- Providing a stable API for Presentation.
- Translating user intentions into domain operations.
- Preparing results for Presentation when necessary.

---

# 3. Non Responsibilities

Application Services must NOT:

- Contain business rules.
- Validate business logic.
- Access repositories directly.
- Communicate directly with Infrastructure.
- Persist business entities.

Business rules always belong to the Domain Layer.

---

# 4. Communication Rules

The Application Layer may communicate with:

- Domain Services

The Application Layer must NOT communicate directly with:

- Repository Implementations
- Notion API
- Database Providers
- External Services

All persistence remains behind Repository Interfaces.

---

# 5. Dependency Rules

Allowed dependencies:

Presentation

↓

Application Layer

↓

Domain Layer

↓

Repository Interfaces

↓

Infrastructure

Reverse dependencies are prohibited.

---

# 6. Application Services

Current Application Services:

## TaskApplicationService

Responsibilities

- Create Task
- Complete Task
- Retrieve Task
- Retrieve Tasks for Work Day
- Retrieve Active Tasks

---

Future Application Services:

## WorkDayApplicationService

Responsibilities

- Create Work Day
- Start Work Day
- Complete Work Day
- Retrieve Work Days

---

## ProductionApplicationService

Responsibilities

- Record Production
- Retrieve Production Records

---

# 7. Design Principles

Application Services should be:

- Thin
- Stateless
- Focused on orchestration
- Independent of infrastructure
- Easy to test

---

# 8. Typical Flow

Presentation

↓

Application Service

↓

Domain Service(s)

↓

Repository Interfaces

↓

Infrastructure

---

# 9. Example

Task creation flow:

React UI

↓

TaskApplicationService

↓

TaskCreationService

↓

Repositories

↓

Infrastructure

The Application Service coordinates the use case.

The Domain Service executes the business rules.

Repositories persist the resulting aggregates.

---

# 10. Future Extensions

The Application Layer is the preferred integration point for:

- REST APIs
- GraphQL APIs
- Mobile Applications
- Background Jobs
- n8n Workflows
- Scheduled Tasks
- External Integrations

No external consumer should communicate directly with Domain Services.

---

# Summary

The Application Layer provides a stable orchestration boundary between Presentation and Domain.

It simplifies application development while preserving the integrity of the business model.

Business logic remains exclusively inside the Domain Layer.

Application logic remains focused on coordinating use cases.
