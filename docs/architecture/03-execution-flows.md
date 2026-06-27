# Execution Flows

---

## Create Work Day

User

↓

UI

↓

WorkDayCreationService

↓

WorkDayRepository

↓

EventRepository

↓

Return

---

## Create Task

User

↓

UI

↓

TaskCreationService

↓

Validate Category

↓

Validate SubCategory

↓

Validate Classification

↓

Load Work Day

↓

Create Task

↓

Save Task

↓

Create Event

↓

Return

---

## Complete Task

User

↓

TaskLifecycleService

↓

Validate Transition

↓

Update Task

↓

Save

↓

Create Event

↓

Return

---

## Record Production

User

↓

ProductionRecordCreationService

↓

Load Task

↓

Validate

↓

Create Production Record

↓

Save

↓

Return