# Design

## 1. Principles

- Follow the Hacker's Unity brand guidelines and the existing site theme.
- **Mobile first for mentors.** They will score on phones while walking between tables.
- Big numeric inputs and a sticky Submit button.
- Autosave every few seconds so scores are not lost.
- Keep wording short and plain.
- Use shadcn/ui components on top of Tailwind CSS. Do not add a second CSS framework such as Bootstrap, because it conflicts with Tailwind.

## 2. Screens

| # | Screen | Main content |
| --- | --- | --- |
| 1 | Round setup | Round name, criteria builder |
| 2 | Mentor sheet | Upload area, manual add form, assignment table, validation summary |
| 3 | Mentor home | Assigned teams list with status and progress |
| 4 | Team scoring | Criteria inputs, live total, remarks |
| 5 | Organizer dashboard | Stats, mentor progress, charts |
| 6 | Leaderboard | Top N selector, filters, export |
| 7 | Audit and settings | Score history, lock controls, fairness mode |

## 3. Mentor experience

**Mentor home**
- Shows the mentor's name and the round name.
- Lists only their assigned teams.
- Each team has a status label: Pending, In Progress, or Scored.
- A progress bar shows "6 / 9 teams scored".
- Search bar and a status filter.

**Team scoring screen**
- Top: team name, number, project title, members, and links (GitHub, demo, slides).
- Middle: one numeric input per criterion, with the criterion description as short help text. Show the max score next to each input.
- A live total near the top or bottom (for example "38 / 50").
- Optional feedback text box.
- Bottom: Save Draft and Submit. Submit stays visible while scrolling (sticky).
- Submit is disabled until every criterion has a value. Drafts are always allowed.
- Show a clear saved state ("Saved" with the time) after autosave.
- Show a "Round Complete" confirmation after the last team.

## 4. Organizer experience

**Dashboard**
- Overview cards: total teams, mentors, scores submitted, pending, average score.
- Mentor progress table with a "Send reminder" button on each row.
- All scores table, sortable and filterable.
- Charts (Recharts): score distribution, mentor-wise average, criterion-wise averages.
- Round controls: Open, Pause, Lock, Publish results.

**Mentor sheet screen**
- Drag and drop upload area, with a link to download the sample template.
- Preview table before import. Rows with errors are marked, and an error report can be downloaded.
- Validation summary at the top, for example "3 mentors, 27 teams, 0 unassigned".
- Unassigned teams are highlighted.

**Leaderboard**
- Top N selector: 10, 25, 50, 100, All.
- Columns: rank, team, mentor, each criterion, total, percentage.
- Track filter when the event has tracks.
- Export buttons: CSV, XLSX, PDF.
- In v1.1, a side by side view of raw and normalized rankings.

## 5. Status labels

| Label | Meaning |
| --- | --- |
| Pending | The mentor has not started this team |
| In Progress | A draft is saved but not submitted |
| Scored | The score is submitted |

Round status: Open, Paused, Locked, Published. Show the current status clearly on every organizer screen.

## 6. Form and input rules

- Scores are numeric only and must be between 0 and the criterion's max score.
- Show an inline message when a value is out of range. Do not silently change the value.
- Use a large touch friendly input (or a slider with a number box) on mobile.
- Never lose input when the connection drops. Keep the draft and retry saving.

## 7. Accessibility and layout

- Layouts must work from a small phone width up to a desktop.
- Tables scroll horizontally inside their own container on small screens.
- Keep colour contrast readable, and do not use colour as the only signal (use text labels with status colours).
- All buttons and inputs need labels.

## 8. Open design items

- Final colours, logo, and fonts come from the Hacker's Unity brand guidelines (to be added here).
