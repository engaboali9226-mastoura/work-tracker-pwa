# Business Knowledge Base

---

## Work Day

Represents one business working day.

Acts as the parent context for all tasks.

Contains shared business information.

---

## Task

Represents a unit of work.

Cannot exist without a Work Day.

May inherit business context.

---

## Production Record

Represents measurable output produced while executing a task.

Multiple production records may belong to one task.

---

## Event

Represents something important that happened inside the business.

Events provide historical traceability.

---

## Category

Represents the primary business classification.

---

## Sub Category

Represents a detailed classification.

Must belong to one Category.

---

## Area

Represents the organizational work area.

---

## Site

Represents the physical execution location.

---

## Project

Represents the project under execution.

---

## Contractor

Represents the contractor responsible for execution.