# ADR-006

## Title

Adopt Domain-Driven Architecture

## Status

Approved

## Context

The system is expected to grow beyond simple attendance and task tracking.

Future capabilities may include:

- Areas
- Projects
- Sites
- Reports
- Statistics
- Notifications

Organizing the system around pages would make future expansion difficult.

## Decision

The system architecture shall be organized around business domains and entities rather than UI pages.

Core entities currently identified:

- Area
- Project
- Site
- Work Day
- Task
- Note

Pages, APIs, workflows and future applications should be designed around these entities.

## Consequences

### Positive

- Easier scaling
- Clear business structure
- Better maintainability
- Easier transition to PWA and Android

### Negative

- Requires more upfront design effort

## Notes

UI pages are implementation details.

Business entities are the primary architectural concern.
