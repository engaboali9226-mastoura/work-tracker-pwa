# Dependency Graph

```
React UI
    │
    ▼
Application Composition
    │
    ├──────────────┐
    ▼              ▼
Work Day      Task Management
    │              │
    │              ▼
    │       Classification
    │              │
    └──────┬───────┘
           ▼
Production Tracking
           │
           ▼
Event Logging
           │
           ▼
Repository Layer
      │           │
      ▼           ▼
In Memory      Notion
```

## Dependency Rules

- UI depends on Services.
- Services depend on Repository Interfaces.
- Infrastructure depends on External Systems.
- Business Components never depend on Infrastructure.
- Repository implementations never contain business rules.