# Memory

Important context, decisions, and things the team must remember. Add new entries at the bottom of each section, with the date.

## Project context

- **Project:** Mentor Round Scoring Tool for the Hacker's Unity Organizer Suite.
- **Purpose:** Replace messy Google Sheets and WhatsApp updates with one fair, transparent, real-time mentor scoring system.
- **Users:** Organizers (admin), mentors, and an optional public viewer.
- **Repo:** `selinewong-dotcom/mentor-round-tool` on GitHub. The Next.js app was created inside the existing repo.
- **Team:** Seline and Chinmay (collaborator). Issue #1 (this `brain/` folder) is assigned to Chinmay.
- **Source spec:** Hacker's Unity Mentor Round Scoring Tool, Product Requirements and Build Spec v1.0 (see `prd.md`).

## Decisions made

| Date | Decision |
| --- | --- |
| 2026-10-04 | Use the stack from the spec: Next.js (App Router), Tailwind, shadcn/ui, Recharts, PostgreSQL with Prisma, Vercel |
| 2026-10-07 | Next.js app created with `create-next-app` in the existing repo folder (Next.js 16, Turbopack, TypeScript, Tailwind, no `src/` folder) |
| 2026-10-07 | One login method (magic link by email) with two logged in roles: admin and mentor. Viewers need no account |
| 2026-10-07 | Login is invite only: mentor accounts are created by the server when the organizer sends invites |
| 2026-10-07 | Plan is 22 days in three releases (see `phases.md`) |

## Proposed defaults for v1.0 (to confirm with the team)

These answer the open questions in the spec. They are proposals, not final decisions.

- One mentor per team in v1.0. The schema allows more later.
- Mentors cannot see other mentors' scores.
- The leaderboard is organizer only. The public toggle is off by default.
- Teams are imported from CSV first. Direct import from Hacker's Unity registration data comes later.
- Equal weights for all criteria. The weight field already exists.

## Still open

- Whether mentors can see a team's earlier round scores (needed before v2.0).
- Database host: Supabase or Neon. Supabase is the current plan because it also provides auth.
- WhatsApp provider for reminders (v1.1).
- Hacker's Unity brand colours, logo, and fonts (add to `design.md`).
- CSS approach: Tailwind with shadcn/ui is recommended. Bootstrap was considered but would conflict with Tailwind.

## Lessons and warnings

- Run `create-next-app` with `.` as the name to install into an existing folder. It refuses to run if files such as `README.md` would be overwritten.
- Do not run `npm audit fix --force`. It can upgrade packages to versions that break the project.
- A stray `package-lock.json` in a parent folder makes Next.js print a warning. Remove it, or set `turbopack.root` in `next.config.ts`.
- Prisma connects straight to the database and ignores Supabase row-level security. All access checks must be done on the server.
- AI summaries (v2.0) must be reviewed by an organizer, and must not include other mentors' names or scores.
