# Domain Model

## Status

Draft

---

# Core Business Entities

## Area

Represents an operational area, region, branch or business unit.

Examples:

- Riyadh
- Jeddah
- Eastern Region

---

## Project

Represents a business project or contract.

A Project belongs to an Area.

---

## Site

Represents a physical work location.

A Site belongs to a Project.

---

## Work Day

Represents a daily attendance record.

Identified by:

- Day Key

---

## Task

Represents a work activity.

Identified by:

- Task Key

A Task may be associated with:

- Work Day
- Site
- Project

---

## Note

Represents task-related notes.

A Note belongs to a Task.

---

# Current Hierarchy

Area
└── Project
    └── Site
        └── Task

Work Day
└── Task

Task
└── Note

---

# Future Domains

## Report

Future

---

## Statistics

Future

---

## Notifications

Future

---

## Settings

Future
