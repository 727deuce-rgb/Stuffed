# Forgecloud: full SaaS foundation

Forgecloud is a Next.js workspace combining GitHub-style collaboration, Replit-style instant environments, Supabase-backed data, and Base44-style prompt-to-app onboarding. “Base44” is treated as a product inspiration/reference point, not an integration or affiliation.

## Supabase setup

1. Create a Supabase project.
2. Copy `.env.example` to `.env.local`.
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Run `supabase/migrations/001_workspace.sql` in the Supabase SQL editor.
5. Run `npm install` and `npm run dev`.
6. Open `http://localhost:3000` and use the magic-link sign-in form.

Without Supabase environment variables the UI remains in demo mode and explicitly reports that the connection is missing.

## Current SaaS foundation

- Supabase browser and server clients
- Cookie-aware middleware scaffold
- Magic-link authentication UI
- RLS-protected projects and files schema
- Prompt-to-starter-app interaction
- Workspace/editor/preview UI

## Production work still required

GitHub OAuth and repository APIs, isolated code execution, deployment workers, object storage uploads, billing, invite/member management, audit logs, abuse prevention, rate limiting, secret encryption, backups, and observability are not enabled by the front-end prototype. Never expose a Supabase service-role key in client code, and never execute untrusted code without a hardened sandbox.
