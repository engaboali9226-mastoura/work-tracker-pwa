# ADR-011

## Title

Use GitHub Pages As Primary Deployment Platform

## Status

Approved

## Context

The project is being developed as:

GitHub Pages
↓
Progressive Web App (PWA)
↓
Android Application

The frontend uses:

- Vite
- Vanilla JavaScript
- Domain-Based Architecture

A deployment strategy is required to provide:

- Simple hosting
- Low operational cost
- Direct integration with GitHub
- Continuous delivery workflow

## Decision

GitHub Pages shall be used as the primary deployment platform for the frontend application.

The deployment process shall be based on the Vite production build output.

The deployed application shall be publicly accessible through GitHub Pages.

## Deployment Flow

Developer
↓
Git Commit
↓
GitHub Repository
↓
Production Build
↓
GitHub Pages
↓
Live Application

## Build Strategy

The frontend application shall be built using:

Vite Build

Output Directory:

dist/

Only production build artifacts shall be deployed.

## Branch Strategy

Source Code:

main

Deployment:

GitHub Pages deployment target

The deployment mechanism may use:

- GitHub Actions
- gh-pages branch

The implementation method may be selected later.

## Future Compatibility

The deployment strategy must remain compatible with:

- Progressive Web App requirements
- Android packaging workflows
- Future backend integrations

## Consequences

### Positive

- Free hosting
- Easy deployment
- Tight GitHub integration
- Suitable for PWA distribution
- Minimal infrastructure requirements

### Negative

- Static hosting limitations
- Backend services must remain external

## Notes

GitHub Pages is considered the official deployment platform for V2.

Future backend services shall remain independent of the deployment platform.
