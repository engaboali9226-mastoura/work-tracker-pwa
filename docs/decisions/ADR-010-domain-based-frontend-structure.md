# ADR-010

## Title

Use Domain-Based Frontend Structure

## Status

Approved

## Context

The system is being designed using a Domain-Driven Architecture.

Core business domains currently include:

- Attendance
- Tasks
- Notes
- Projects
- Sites
- Reports

Future domains may include:

- Statistics
- Notifications
- Settings

As the application grows into a PWA and later an Android application, organizing code around pages or technologies would increase coupling and reduce maintainability.

A structure centered around business domains provides a clearer and more scalable architecture.

## Decision

The frontend shall be organized around business domains.

Business logic, models, validation rules and domain-specific functionality shall be grouped within their respective domains.

Examples:

- Attendance Domain
- Task Domain
- Project Domain
- Site Domain
- Note Domain

UI pages may consume multiple domains but shall not own business logic.

## Structure Principles

Pages are responsible for:

- User interface
- Navigation
- Presentation

Domains are responsible for:

- Business rules
- Models
- Validation
- Domain operations

Services are responsible for:

- External communication
- API access
- Storage integration

Shared modules are responsible for:

- Reusable utilities
- Shared UI components
- Common constants

## Consequences

### Positive

- Better separation of concerns
- Improved maintainability
- Easier scalability
- Easier testing
- Better alignment with business requirements
- Easier migration to future platforms

### Negative

- Additional upfront architectural planning
- More folders and structure during early development

## Notes

The architecture should be driven by business domains rather than pages, screens or implementation technologies.

Pages may change over time.

Business domains are expected to remain stable and represent the core structure of the system.
