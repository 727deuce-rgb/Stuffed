# Forgecloud

Forgecloud is a Next.js full-stack workspace concept combining:

- **GitHub**: repositories, branches, commits, pull requests, and team permissions
- **Replit**: browser-based editing, instant previews, and a terminal-like runtime
- **Supabase**: database, authentication, storage, and usage surfaces

The current MVP is a polished front-end prototype. The workspace interactions are local UI state only; no source code, database, auth, or deployment service is connected yet.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Next production milestones

1. Add authentication and workspace membership.
2. Connect repositories through GitHub OAuth and the GitHub API.
3. Add isolated build sandboxes with strict resource limits.
4. Add Postgres-backed projects, migrations, auth, and object storage.
5. Add preview deployments and a job queue.
6. Add audit logs, secrets management, billing, and abuse controls.

The product should never execute untrusted code without isolation, quotas, network controls, and an operational review.
