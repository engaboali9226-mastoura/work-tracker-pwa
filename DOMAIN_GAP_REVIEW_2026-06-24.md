# WT V2 - Domain Gap Review
Date: 2026-06-24

---

# Purpose

Compare:

- Current Code Base
- Current Notion Schema
- Target Domain Model

Identify implementation priorities.

---

# Domain Coverage

| Entity | Current Code | Target Domain | Gap |
|----------|----------|----------|----------|
| WorkDay | Minimal | Full Aggregate | High |
| Task | Partial | Operational Aggregate | Medium |
| Event | Good | Audit Trail | Low |
| Area | Missing | Master Data | High |
| Site | Partial | Master Data | High |
| Project | Partial | Master Data | High |
| Contractor | Missing | Master Data | High |
| Category | Partial | Master Data | Medium |
| SubCategory | Missing | Master Data | High |
| Crew | Missing | Operational Entity | High |
| Equipment | Missing | Operational Entity | High |
| TaskAchievement | Missing | Production Entity | High |

---

# Current WorkDay

Current Model:

- dayKey

Target Model:

- dayKey
- date

- area
- site
- project

- contractor
- contractNumber

- startedAt
- endedAt

- status

Gap:

HIGH

---

# Current Task

Current Model:

- taskKey
- workDayKey
- title

- categoryId

- siteId
- projectId

- startTime
- endTime

- status

Missing:

- subCategory
- pauseReason
- completionReason

- crew
- equipment

- notes

Gap:

MEDIUM

---

# Current Event

Current Model:

- eventId
- eventType
- entityType
- entityId
- occurredAt
- description

Missing:

- recordedAt
- metadata

Gap:

LOW

---

# Master Data Gap

Missing Domains:

- Area
- Contractor
- SubCategory

Partially Defined:

- Site
- Project
- Category

Gap:

HIGH

---

# Operational Resources Gap

Missing:

- Crew
- Equipment

Gap:

HIGH

---

# Production Tracking Gap

Missing:

- Achievement Type
- Quantity
- Unit

Gap:

HIGH

Examples:

- Meter Installation
- Excavation
- Cable Laying

---

# Notion Gap

Current Databases:

- Work Days
- Activity Log

Target Databases:

- Work Days
- Tasks
- Events

- Projects
- Sites
- Areas
- Contractors

- Categories
- SubCategories

Future:

- Crew
- Equipment

Gap:

HIGH

---

# Recommended Implementation Order

Phase 1

ADR-036

WorkDay Aggregate

---

Phase 2

ADR-037

Master Data Strategy

- Area
- Site
- Project
- Contractor
- Category
- SubCategory

---

Phase 3

Task Enhancements

- Pause Reason
- Completion Reason

---

Phase 4

Task Resources

- Crew
- Equipment

---

Phase 5

Task Achievement

- Quantity
- Unit
- Achievement Type

---

Phase 6

Notion Schema Alignment

---

Phase 7

React UI

---

Phase 8

n8n Automation

