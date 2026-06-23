# ADR-026: Use Human Readable Notion Property Names

## Status

Accepted

---

## Context

The application uses Notion as its primary persistence provider.

Each aggregate is stored within a dedicated Notion database.

A naming convention is required for database properties to ensure consistency across:

- Notion databases
- DTO mappings
- Repository implementations
- Manual inspection and maintenance

Without a standard naming strategy, property names may become inconsistent and harder to maintain.

---

## Decision

Notion database properties shall use human-readable Title Case names.

Examples:

```text
Task Key
Work Day Key
Title
Category Id
Site Id
Project Id
Start Time
End Time
Status
```

and

```text
Event Id
Event Type
Entity Type
Entity Id
Occurred At
Description
```

---

## Rejected Alternatives

### Snake Case

```text
task_key
work_day_key
start_time
end_time
```

Rejected because it is optimized for code rather than human readability.

---

### Camel Case

```text
taskKey
workDayKey
startTime
endTime
```

Rejected because it is primarily a programming convention and less readable within Notion.

---

### Mixed Naming

```text
Task Key
workDayKey
start_time
```

Rejected because it creates inconsistency and increases maintenance complexity.

---

## Rationale

Notion databases are frequently viewed and managed by humans.

Human-readable property names:

- Improve readability
- Simplify manual verification
- Reduce mapping mistakes
- Align with Notion user experience

The storage model should prioritize clarity within the Notion interface.

---

## Task Database Properties

The Tasks Database shall use property names such as:

```text
Task Key
Work Day Key
Title
Category Id
Site Id
Project Id
Start Time
End Time
Status
```

---

## Events Database Properties

The Events Database shall use property names such as:

```text
Event Id
Event Type
Entity Type
Entity Id
Occurred At
Description
```

---

## Infrastructure Implications

Repository implementations shall map domain fields to human-readable property names.

Example:

```text
task.taskKey
        ↓
"Task Key"

task.workDayKey
        ↓
"Work Day Key"
```

Property names shall be treated as Infrastructure concerns and shall not leak into the Domain Layer.

---

## Consequences

### Advantages

- Better readability in Notion
- Consistent database design
- Easier manual maintenance
- Clear separation between domain naming and storage naming

### Trade-offs

- Requires explicit mapping logic
- Slightly more verbose repository implementation

These trade-offs are acceptable because they improve clarity and maintainability.

---

## Outcome

All Notion database properties shall use human-readable Title Case names.

Repository implementations shall be responsible for mapping between domain fields and Notion property names.

The Domain Layer shall remain independent of storage naming conventions.