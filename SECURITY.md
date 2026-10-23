# Security Policy

## Reporting a vulnerability

Report security issues privately rather than opening a public issue.

- Contact the repository owner directly
- Include: affected file/endpoint, steps to reproduce, and impact

## Security baseline

This repository uses a layered security baseline:

- **gitleaks** - secret scanning across full git history and on every commit
- **Trivy / npm audit / Dependabot** - dependency vulnerability scanning
- **GitHub Actions** - automated scans on push, PR, and weekly
- **Agent rules** - security rules in AGENTS.md / CLAUDE.md to prevent AI-written logic bugs

## Core rule for AI-assisted code

Authentication is not authorization. Always verify that the record belongs to the caller,
not just that the caller is logged in.
