# ADR-007

## Title

Adopt Online-First PWA Architecture

## Status

Approved

## Context

The system is planned to evolve through the following stages:

GitHub Pages
↓
Progressive Web App (PWA)
↓
Android Application

The current backend architecture depends on:

Frontend
↓
API Layer
↓
n8n
↓
Notion

Most business operations require server communication, including:

- Start Work
- End Work
- Start Task
- Finish Task
- Add Note
- Dashboard Data

Implementing full Offline-First support at this stage would introduce significant complexity.

## Decision

The system shall adopt an Online-First PWA architecture.

The application must:

- Be installable as a PWA
- Work primarily with an active internet connection
- Use web APIs compatible with future Android packaging
- Be designed to support future offline capabilities

Offline support is not required for the initial V2 release.

## Future Strategy

Offline capabilities may be introduced incrementally:

Phase 1
- Installable PWA
- Online operation

Phase 2
- Static asset caching
- Faster loading

Phase 3
- Cached screens and recent data

Phase 4
- Offline action queue
- Background synchronization

Phase 5
- Full Offline-First capabilities

## Consequences

### Positive

- Faster development
- Lower architectural complexity
- Easier integration with n8n and Notion
- Clear migration path toward Android

### Negative

- Internet connection required for business operations
- Offline productivity limited during early releases

## Notes

Offline support is considered a future enhancement, not a V2 launch requirement.
