# Component Catalog

---

# Application Composition

Type: Composition Root

Responsibility

- Build the application
- Create repositories
- Create business services
- Inject dependencies

Inputs

- Environment Configuration
- Repository Provider

Outputs

- Application Container

Depends On

- Repository Factory
- Infrastructure

Consumed By

- React UI

---

# Work Day Management

Type: Business Component

Owns

- WorkDay

Services

- WorkDayCreationService
- WorkDayLifecycleService
- WorkDayQueryService

Repositories

- WorkDayRepository

Produces

- WorkDay
- Event

Depends On

- Event Repository

Consumed By

- Task Management

---

# Task Management

Type: Business Component

Owns

- Task

Services

- TaskCreationService
- TaskLifecycleService
- TaskQueryService

Repositories

- TaskRepository

Produces

- Task
- Event

Depends On

- WorkDay
- Classification

Consumed By

- Production Tracking

---

# Production Tracking

Owns

- ProductionRecord

Services

- ProductionRecordCreationService
- ProductionRecordQueryService

Repositories

- ProductionRecordRepository

Depends On

- Task

Produces

- ProductionRecord

---

# Classification

Owns

- Category
- SubCategory

Repositories

- TaskCategoryRepository
- SubCategoryRepository

Used By

- Task Management

---

# Reference Data

Owns

- Area
- Site
- Project
- Contractor

Repositories

- AreaRepository
- SiteRepository
- ProjectRepository
- ContractorRepository

---

# Event Logging

Owns

- EventLog

Repositories

- EventRepository

Produces

- Business Events

---

# Repository Layer

Responsibility

Hide persistence implementation.

Current Providers

- In Memory
- Notion

---

# Infrastructure

Responsibilities

- API
- DTO
- Mapper
- Configuration

Contains no business logic.