# ADR-023: Notion API Access Strategy

## Status

Accepted

---

## Context

Work Tracker V2 uses Notion as its primary data store as defined in ADR-002.

The Infrastructure Layer requires a consistent strategy for accessing Notion APIs while maintaining:

- Domain independence
- Testability
- Maintainability
- Replaceability of infrastructure components

The application must avoid leaking Notion-specific implementation details outside the Infrastructure Layer.

---

## Decision

The system shall use the official Notion SDK through a dedicated API client abstraction.

All communication with Notion shall be centralized in a single Infrastructure component.

```text
Notion API
      ↑
Official Notion SDK
      ↑
NotionApiClient
      ↑
Repositories
      ↑
Domain Services
```

---

## SDK Strategy

The application shall use:

```text
@notionhq/client
```

The SDK shall only be referenced within the Infrastructure Layer.

The following dependency is prohibited:

```text
Domain
    →
Notion SDK
```

The following dependency is prohibited:

```text
Application Service
    →
Notion SDK
```

Only the API client implementation may directly access the SDK.

---

## API Client Responsibility

A dedicated client shall be created:

```text
NotionApiClient
```

Responsibilities:

- Execute Notion requests
- Handle authentication
- Handle pagination
- Handle retry logic
- Normalize infrastructure errors
- Hide SDK details from repositories

The client shall not contain business rules.

---

## Authentication Strategy

Authentication shall use an Integration Token.

The token shall be provided through environment configuration.

Example:

```text
VITE_NOTION_API_TOKEN
```

Tokens must never be hardcoded.

The following is prohibited:

```typescript
const token = "secret_xxxxxxxxx";
```

---

## Database Configuration

Database identifiers shall be supplied through configuration.

Example:

```text
VITE_NOTION_TASKS_DATABASE_ID

VITE_NOTION_EVENTS_DATABASE_ID
```

Database IDs must not be hardcoded.

---

## Configuration Ownership

Infrastructure configuration shall be centralized.

Example:

```text
src/infrastructure/configuration/
```

Responsibilities:

- Load environment variables
- Validate required configuration
- Expose typed configuration objects

---

## Retry Strategy

Transient failures shall be retried automatically.

Examples:

```text
429 Too Many Requests

503 Service Unavailable

Temporary Network Errors
```

Default policy:

```text
Maximum Attempts: 3

Exponential Backoff:
1s
2s
4s
```

Permanent failures shall not be retried.

Examples:

```text
401 Unauthorized

403 Forbidden

404 Not Found
```

---

## Rate Limiting Strategy

The Infrastructure Layer shall respect Notion rate limits.

Repositories must never implement rate limiting directly.

Rate limiting behavior shall remain encapsulated inside:

```text
NotionApiClient
```

---

## Pagination Strategy

Pagination shall be handled entirely within the API client.

Repositories shall receive fully aggregated results whenever practical.

Example:

```text
Repository
      ↓
NotionApiClient
      ↓
Multiple API Pages
      ↓
Single Aggregated Result
```

---

## Error Handling Strategy

Raw SDK errors shall never leave the Infrastructure Layer.

The API client shall translate errors into Infrastructure-specific exceptions.

Examples:

```text
InfrastructureError

NotionApiError

ConfigurationError
```

Repositories shall consume normalized errors only.

---

## Testing Strategy

Repositories shall depend on the API client abstraction rather than SDK objects.

Example:

```typescript
interface NotionApiClient {
  ...
}
```

This enables:

- Mock implementations
- Integration testing
- Infrastructure isolation

Unit tests shall not require live Notion access.

---

## Security Strategy

Secrets shall be stored exclusively in environment variables.

Examples:

```text
VITE_NOTION_API_TOKEN

VITE_NOTION_TASKS_DATABASE_ID

VITE_NOTION_EVENTS_DATABASE_ID
```

Secrets must never be:

- Hardcoded
- Committed to source control
- Embedded in application code

---

## Consequences

### Advantages

- Centralized Notion integration
- Strong Infrastructure isolation
- Easier testing
- Consistent error handling
- Future provider replacement remains possible

### Trade-offs

- Additional abstraction layer
- Additional configuration management

These trade-offs are acceptable because they preserve architectural boundaries.

---

## Outcome

Work Tracker V2 shall:

- Use the official Notion SDK
- Access Notion through a dedicated NotionApiClient
- Centralize authentication and configuration
- Centralize retry and pagination behavior
- Prevent Notion-specific dependencies from leaking outside the Infrastructure Layer