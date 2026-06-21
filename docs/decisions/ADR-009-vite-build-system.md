# ADR-009

## Title

Adopt Vite As Frontend Build System

## Status

Approved

## Context

The project is expected to evolve through multiple stages:

GitHub Pages
↓
Progressive Web App (PWA)
↓
Android Application

The system is also expected to grow in scope and functionality, including:

- Attendance
- Tasks
- Notes
- Projects
- Sites
- Reports
- Statistics
- Notifications
- Settings

Maintaining a growing codebase using standalone HTML, CSS and JavaScript files without a build system would eventually reduce maintainability and increase complexity.

A modern frontend build system is required to support:

- Modular architecture
- Code organization
- Asset management
- PWA capabilities
- Future scalability

At the same time, the project should remain lightweight and avoid unnecessary framework complexity.

## Decision

The frontend shall use Vite as the official build system.

The application programming model shall remain:

- Vanilla JavaScript
- ES Modules
- HTML
- CSS

No frontend framework is required for the current architecture.

## Scope

Vite shall be responsible for:

- Development server
- Module bundling
- Build process
- Asset handling
- Environment configuration
- PWA integration support
- Production optimization

Business logic shall remain framework-independent.

## Non-Goals

The following technologies are not part of the current architecture:

- React
- Vue
- Angular
- Next.js
- Nuxt

Future adoption of any framework would require a separate architectural decision.

## Consequences

### Positive

- Modern development workflow
- Native ES Module support
- Improved project organization
- Easier scaling of the codebase
- Better PWA readiness
- Easier deployment process
- Improved maintainability

### Negative

- Additional tooling to maintain
- Slight increase in project setup complexity
- Build step required before deployment

## Notes

The purpose of adopting Vite is to improve project architecture and scalability while preserving the simplicity of Vanilla JavaScript.

The frontend should remain organized around business domains rather than framework-specific patterns.
