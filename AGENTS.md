## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Security rules (non-negotiable)

When writing or reviewing code in this repository:

1. **Authentication is not authorization.** Always check that the record belongs to the caller - not just that the caller is logged in. Scope every query to the owning user/org/tenant.
2. **Never hardcode secrets.** No keys, tokens, or passwords in source, tests, or docs. Use environment variables or a secrets manager.
3. **Never commit `.env` files.** Keep `.env.example` as the committed template only.
4. **Scope every database query** to the authenticated user or organization. Never trust a client-supplied id without verifying ownership.
5. **Validate and parameterize all input.** No string-concatenated SQL. No unvalidated ids in queries.
6. **Least privilege on exports.** Bulk export/dump endpoints must filter by tenant, never return everything.
7. **Dependencies are attack surface.** Keep them current; never pin to a version with a known CVE.
8. **Before shipping, run this review:** *"Review the codebase for security vulnerabilities. Name the file and what an attacker gets."*
9. **If you repeat a security mistake, bake the rule into this file** so it never happens again.
