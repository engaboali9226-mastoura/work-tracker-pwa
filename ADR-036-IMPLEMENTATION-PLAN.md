# ADR-036 Implementation Plan

Date: 2026-06-24

---

# Goal

Transform WorkDay from:

WorkDay
 └── dayKey

To:

WorkDay
 ├── dayKey
 ├── date
 ├── areaId
 ├── siteId
 ├── projectId
 ├── contractorId
 ├── contractNumber
 ├── startedAt
 ├── endedAt
 ├── status
 ├── createdAt
 └── updatedAt

---

# Phase 1

Create WorkDayStatus

Values:

- Open
- Closed

---

# Phase 2

Expand WorkDay model

Add all required fields.

---

# Phase 3

Create WorkDayRepository

Operations:

- create
- update
- getByKey
- getOpenWorkDay
- getAll

---

# Phase 4

Create WorkDayLifecycleService

Operations:

- startWorkDay
- closeWorkDay

---

# Phase 5

Implement WD-001

Only one open work day.

---

# Phase 6

Implement WD-002

Closing a work day pauses all active tasks.

Pause Reason:

End Of Work Day

---

# Phase 7

Create MemoryWorkDayRepository

---

# Phase 8

Create NotionWorkDayRepository

---

# Phase 9

Update ApplicationContainer

Register new services.

