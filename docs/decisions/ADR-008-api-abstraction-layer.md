# ADR-008

## Title

Use API Abstraction Layer

## Status

Approved

## Context

The system currently communicates with backend services through n8n workflows.

Future architecture may evolve to include:

- Additional n8n workflows
- Alternative databases
- New integrations
- Authentication services
- Android application support

Direct communication between frontend components and backend endpoints would create tight coupling and increase maintenance complexity.

## Decision

All frontend communication with external services shall be performed through a dedicated API abstraction layer.

Frontend modules must not directly call:

- n8n Webhooks
- Database endpoints
- Third-party services

Instead, all communication must be routed through domain-specific API services.

Examples:

Attendance API

- Start Work
- End Work

Task API

- Start Task
- Finish Task

Note API

- Add Note

## Consequences

### Positive

- Reduced coupling between frontend and backend
- Easier backend replacement or migration
- Centralized request handling
- Centralized error handling
- Improved maintainability
- Improved testability

### Negative

- Additional abstraction layer to maintain
- Slight increase in initial development effort

## Notes

Frontend code should depend on business operations rather than backend implementation details.

Example:

Preferred:

attendanceApi.startWork()

Avoid:

fetch(webhookUrl)
