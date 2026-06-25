# WT V2 - Business Workflow
Date: 2026-06-24

---

# System Purpose

WT V2 is a work execution tracking system designed to:

- Track work days.
- Track operational tasks.
- Record execution activities.
- Measure productivity.
- Generate operational statistics.
- Support future automation through n8n.

---

# System Components

## React UI

Responsibilities:

- Data entry.
- Task management.
- Work day management.
- Dashboards.
- Reports.
- Statistics.

---

## Notion

Responsibilities:

- Data persistence.
- Relationships.
- Historical records.
- Reporting source.

---

## n8n

Responsibilities:

- Automation.
- Scheduling.
- Notifications.
- Workflow orchestration.
- Background processes.

---

# Work Day Lifecycle

## Start Work Day

User selects:

- Current Time
or
- Custom Time

System creates an active Work Day.

---

## End Work Day

User selects:

- Current Time
or
- Custom Time

System closes the Work Day.

---

# Rule WD-001

When a Work Day is closed:

All active tasks must be automatically paused.

Pause Reason:

End Of Work Day

---

# Work Day Fields

- Area
- Site
- Project
- Contractor
- Contract Number

- Started At
- Ended At

- Status

---

# Task Lifecycle

## Create Task

User creates a task.

Initial Status:

Active

---

# Active Task Actions

- Pause
- Add Note
- Complete

---

# Pause Task

Task becomes:

Paused

Pause reason must be recorded.

Examples:

- End Of Work Day
- Waiting Materials
- Customer Request
- Weather
- Other

---

# Resume Task

Paused task becomes Active again.

---

# Complete Task

Task becomes Completed.

Completion reason must be recorded.

Examples:

- Work Completed
- Customer Cancelled
- Scope Changed
- Other

---

# Task Fields

- Title

- Category
- Sub Category

- Started At
- Ended At

- Status

- Crew

- Equipment

---

# Task Statistics

Required statistics:

## Time Based

- Daily
- Weekly
- Monthly
- Quarterly
- Yearly

---

## Operational

- Created Tasks
- Completed Tasks
- Paused Tasks
- Active Tasks

---

## Classification

By:

- Area
- Site
- Project
- Contractor
- Category
- Sub Category

---

# Audit Trail

Every system action must be recorded.

Examples:

- Work Day Started
- Work Day Ended

- Task Created
- Task Paused
- Task Resumed
- Task Completed

- Note Added

- Task Updated

---

# Future Extensions

Planned entities:

- Area
- Site
- Project
- Contractor

- Crew
- Equipment

- Task Achievement

