# Project Structure

## As-Built Documentation

### Document

020-project-structure.md

### Status

Implemented

### Last Updated

2026-06-21

---

# Overview

This document describes the actual repository structure implemented at the current baseline.

The structure reflects source code and documentation that exist in the repository.

---

# Documentation Structure

```text
docs/

├── architecture.md
├── decision-log.md
│
├── architecture/
│   ├── domain-model.md
│   ├── frontend-structure.md
│   └── modules.md
│
├── decisions/
│   ├── ADR-001-new-repository.md
│   ├── ADR-002-primary-data-store.md
│   ├── ADR-003-task-key.md
│   ├── ADR-004-day-key.md
│   ├── ADR-005-system-timezone.md
│   ├── ADR-006-domain-driven-architecture.md
│   ├── ADR-007-online-first-pwa.md
│   ├── ADR-008-api-abstraction-layer.md
│   ├── ADR-009-vite-build-system.md
│   ├── ADR-010-domain-based-frontend-structure.md
│   ├── ADR-011-github-pages-deployment-strategy.md
│   └── ADR-012-task-day-ownership.md
│
└── as-built/
```

---

# Source Structure

```text
src/

├── App.tsx
├── main.tsx
├── index.css
│
├── shared/
│   └── types/
│       └── date-time.ts
│
└── domains/
    ├── areas/
    │   └── models/
    │
    ├── projects/
    │   └── models/
    │
    ├── sites/
    │   └── models/
    │
    ├── work-days/
    │   └── models/
    │
    ├── tasks/
    │   ├── docs/
    │   └── models/
    │
    ├── task-categories/
    │   └── models/
    │
    ├── notes/
    │   └── models/
    │
    └── event-log/
        └── models/
```

---

# Implemented Layers

Current implemented layers:

* Domain Layer
* Shared Layer
* Frontend Bootstrap Layer

---

# Current Focus

The repository is currently focused on domain modeling, architectural documentation, and project foundation setup.

Business logic services have not yet been implemented.
