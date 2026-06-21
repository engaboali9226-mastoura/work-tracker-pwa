# ADR-005

## Title

Use Configurable System Timezone

## Status

Approved

## Context

The system records and processes:

- Work Start Time
- Work End Time
- Task Start Time
- Task End Time
- Daily Reports
- Future Notifications

Accurate and consistent timestamps are required across all system layers.

The current operating region is Saudi Arabia, therefore the system currently uses Asia/Riyadh.

However, the architecture should remain flexible and not be permanently tied to a specific timezone.

## Decision

The system shall support a configurable system timezone.

Current Default Timezone:

Asia/Riyadh (+03:00)

The configured timezone must be used consistently by:

- Frontend
- API Layer
- n8n Workflows
- Notion Records
- Future PWA Features

Future timezone changes must be possible without modifying business logic or database structure.

## Consequences

### Positive

- Future flexibility
- Easier expansion to other regions
- Consistent timestamp handling
- Reduced dependency on hardcoded timezone values

### Negative

- Future Settings module will be required to manage configuration
- Additional validation may be needed when changing timezone settings

## Notes

Current production configuration:

Timezone = Asia/Riyadh

This is a configuration value, not a permanent architectural constraint.

