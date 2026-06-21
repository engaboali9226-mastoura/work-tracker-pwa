# Shared Types

## As-Built Documentation

### Document

030-shared-types.md

### Status

Implemented

### Last Updated

2026-06-21

---

# Overview

This document describes shared types currently implemented within the repository.

---

# DateTimeString

Source:

src/shared/types/date-time.ts

## Implementation

```ts
export type DateTimeString = string;
```

## Purpose

Provides a common type alias for date and time values used across the domain model.

---

# Current Usage

Date and time values are currently represented as strings.

Examples include:

* attendanceStart
* attendanceEnd
* startTime
* endTime
* occurredAt
* createdAt

---

# Notes

DateTimeString is currently a direct alias of string.

No validation, formatting, parsing, or timezone handling logic exists within this type.

Its purpose is semantic consistency across domain models.
