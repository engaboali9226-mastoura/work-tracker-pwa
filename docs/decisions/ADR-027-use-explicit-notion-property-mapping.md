# ADR-027: Use Explicit Notion Property Mapping

## Status

Accepted

---

## Context

The application uses Notion as its primary persistence provider.

The Domain Layer must remain independent of Notion-specific concepts and SDK structures.

The Notion SDK requires page properties to be represented using provider-specific objects.

Example:

```json
{
  "Task Key": {
    "rich_text": [...]
  }
}
```

Directly exposing these structures within repositories would tightly couple the application to Notion internals.

A mapping strategy is required to isolate provider-specific representations.

---

## Decision

The Infrastructure Layer shall use explicit property mappers to translate between application DTOs and Notion property objects.

Mapping flow:

```text
Domain Model
      ↓
Notion Page DTO
      ↓
Notion Property Mapper
      ↓
Notion SDK Property Object
```

Repositories shall delegate all Notion property transformations to dedicated mapper classes.

---

## Repository Responsibilities

Repositories shall be responsible for:

- Persistence workflows
- Query execution
- Upsert logic
- Entity retrieval

Repositories shall not be responsible for:

- Property construction
- Property parsing
- Notion-specific field transformations

---

## Property Mapper Responsibilities

Property mappers shall be responsible for:

- Creating Notion property objects
- Reading Notion property values
- Mapping field types
- Isolating SDK-specific structures

Examples:

```text
NotionTaskPropertiesMapper

NotionEventPropertiesMapper
```

---

## Task Mapping Flow

```text
Task
 ↓
NotionTaskPageDto
 ↓
NotionTaskPropertiesMapper
 ↓
Notion Property Object
 ↓
Notion API Client
```

---

## Event Mapping Flow

```text
EventLog
 ↓
NotionEventPageDto
 ↓
NotionEventPropertiesMapper
 ↓
Notion Property Object
 ↓
Notion API Client
```

---

## Rejected Alternative

### Repository-Centric Mapping

```text
Repository
    ↓
Raw Notion Property Construction
```

Rejected because it mixes persistence workflows with provider-specific transformation logic.

This increases complexity and reduces maintainability.

---

## Consequences

### Advantages

- Clear separation of concerns
- Cleaner repository implementations
- Better testability
- Reduced coupling to Notion SDK
- Easier future provider replacement

### Trade-offs

- Additional mapper classes
- Additional transformation layer

These trade-offs are acceptable because they improve maintainability and architectural clarity.

---

## Outcome

All Notion property transformations shall be implemented through dedicated property mapper classes.

Repositories shall consume property mappers rather than constructing provider-specific property objects directly.

The Domain Layer shall remain fully independent from Notion SDK structures.