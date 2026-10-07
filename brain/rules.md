# Rules

Project rules, coding conventions, development guidelines, constraints, and instructions for everyone working on this repo, including AI coding tools.

## 1. Source of truth

- The files in `brain/` are the single source of truth. If a note elsewhere disagrees, `brain/` wins.
- Read `prd.md` before building a feature, and `architecture.md` before changing the data model or stack.
- After finishing work, update `phases.md` (tick the tasks) and add any new decision to `memory.md`.

## 2. Git workflow

- Never commit directly to `main`. Create a branch for each task, for example `day-2-schema`.
- Open a pull request for every branch. At least one other person reviews it before merging.
- Write short, clear commit messages ("Add criteria builder form").
- Run `git pull` on `main` before starting new work.
- Link issues in pull request descriptions with "Closes #number".

## 3. Secrets and safety

- Never commit `.env`, `.env.local`, passwords, API keys, or database connection strings. Check `.gitignore` before the first commit that includes them.
- Put production secrets in Vercel environment variables.
- Do not run `npm audit fix --force`.
- Do not paste real participant data (names, emails) into test files or screenshots.

## 4. Tech rules

- Use TypeScript. Avoid `any`.
- Use the Next.js App Router. Put pages under `app/`.
- Use Tailwind CSS and shadcn/ui for all styling and components. Do not add Bootstrap or another CSS framework.
- Use Prisma for all database access. Change the database only through Prisma migrations.
- Use `papaparse` for CSV and SheetJS `xlsx` for Excel.
- Use Recharts for charts.
- Keep one component per file. Name components in PascalCase and other files in kebab-case.

## 5. Folder rules

- Organizer pages go in `app/admin/`, mentor pages in `app/mentor/`, and the public leaderboard in `app/leaderboard/`.
- Shared UI goes in `components/`. Shared helpers go in `lib/`.
- The Prisma schema and seed script live in `prisma/`.

## 6. Security rules (must follow)

- Check roles on the server in every admin page and every server action with the `requireRole()` helper. Hiding a button in the UI is not enough.
- A mentor may read or write scores only for teams assigned to them. Check this on the server every time.
- Mentors must never receive other mentors' scores, unless the organizer allows it.
- Login is invite only. Never create accounts from the public login form.
- Add rate limiting to login and score endpoints.
- Every score change must be written to the audit log with the actor, before value, after value, and time.
- After a round is `LOCKED`, only an admin can change scores, and the change is logged.

## 7. Data rules

- A score value must be a number between 0 and the criterion's max score. Check this on the server, not only in the form.
- A score cannot be submitted until every criterion has a value. Drafts are allowed with missing values.
- Assignments are unique on `(round_id, mentor_id, team_id)`.
- Inactive (withdrawn or disqualified) teams are hidden from mentors and from the leaderboard.
- Never delete score data. Mark it inactive or keep it in the audit log.

## 8. UI rules

- Design mobile first. Test mentor screens on a real phone.
- Use large numeric inputs and a sticky Submit button on the scoring screen.
- Autosave drafts every few seconds, and keep the draft if the connection drops.
- Show clear error messages next to the field. Do not silently change a value.
- Use plain, short wording in all text.

## 9. Testing rules

- Before each release, run a full test round (3 mentors and 27 teams for v1.0).
- Test with at least three logins: admin, mentor, and a signed out visitor. Confirm a mentor cannot open `/admin` and a visitor can only see the public leaderboard.
- Check ranking and tie-break results by hand on a small sample.

## 10. Instructions for AI coding tools

- Read `brain/prd.md`, `brain/architecture.md`, and this file before making changes.
- Do not change the tech stack, the data model, or the security rules without asking.
- Make small changes on a branch. Explain what changed and why.
- Do not invent features that are not in `prd.md`. Ask when something is unclear.
