import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import { event, mentorAssignments, teamById } from "@/lib/mock-data";

export default function MentorHome() {
  const done = mentorAssignments.filter((a) => a.status === "scored").length;
  const total = mentorAssignments.length;

  return (
    <>
      <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
        <div>
          <div className="eyebrow mb-1">{event.currentRound}</div>
          <h1 className="h2 mb-0">Hi Priya, here are your teams</h1>
        </div>
        <div className="text-md-end" style={{ minWidth: 200 }}>
          <div className="small text-body-secondary mb-1">
            {done} of {total} scored
          </div>
          <div className="score-bar">
            <span style={{ width: `${(done / total) * 100}%` }} />
          </div>
        </div>
      </div>

      <div className="list-group">
        {mentorAssignments.map((a) => {
          const team = teamById(a.teamId)!;
          return (
            <Link
              key={team.id}
              href={`/mentor/score/${team.id}`}
              className="list-group-item list-group-item-action d-flex align-items-center gap-3 py-3 px-4"
            >
              <span className="rank">{team.table}</span>
              <div className="flex-grow-1">
                <div className="fw-semibold">{team.name}</div>
                <div className="small text-body-secondary">{team.project}</div>
              </div>
              <StatusBadge status={a.status} />
              <span className="text-body-secondary d-none d-sm-inline">
                {a.status === "scored" ? "Edit" : "Score"} →
              </span>
            </Link>
          );
        })}
      </div>

      <p className="small text-body-secondary mt-4">
        Scores can be edited until the organizer locks the round.
      </p>
    </>
  );
}
