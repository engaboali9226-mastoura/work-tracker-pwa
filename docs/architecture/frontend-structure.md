# Frontend Structure

## Status

Approved

---

# Goal

Define the frontend project structure before implementation.

The structure must support:

- GitHub Pages
- Progressive Web App (PWA)
- Future Android Packaging
- Domain-Driven Architecture
- API Abstraction Layer

---

# Project Structure

src/

├── app/

├── domains/

├── services/

├── shared/

├── assets/

├── config/

└── pwa/

---

# Responsibilities

## app

Application pages and navigation.

Examples:

- Dashboard
- Attendance
- Tasks
- Projects
- Sites
- Reports
- Settings

Pages must not contain business logic.

---

## domains

Business domains.

Examples:

- Attendance
- Tasks
- Notes
- Projects
- Sites

Responsibilities:

- Business rules
- Validation
- Models
- Domain operations

---

## services

External integrations.

Examples:

- API services
- Storage services
- Notification services

Only services may communicate with external systems.

---

## shared

Reusable modules.

Examples:

- UI components
- Utilities
- Constants

---

## assets

Static resources.

Examples:

- Images
- Icons
- Fonts

---

## config

Application configuration.

Examples:

- Environment configuration
- Timezone configuration
- Application settings

---

## pwa

Progressive Web App resources.

Examples:

- Manifest
- Service Worker
- PWA Icons

---

# Architecture Principles

- Pages are presentation-focused.
- Domains own business logic.
- Services own external communication.
- Shared modules contain reusable code.
- Configuration is centralized.
- PWA resources are isolated.

---

# Status

Approved
