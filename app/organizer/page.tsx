import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import StatusBadge from "@/components/StatusBadge";
import { auditLog, event, mentors, rounds, teams } from "@/lib/mock-data";

export default function OrganizerOverview() {
  const current = rounds.find((r) => r.status === "open")!;
  const stats = [
    { label: "Teams", value: teams.length },
    { label: "Mentors", value: mentors.length },
    { label: "Scores in", value: `${current.scored}/${current.teams}` },
    { label: "Rounds locked", value: `${rounds.filter((r) => r.status === "locked").length}/${rounds.length}` },
  ];

  return (
    <>
      <PageHeader eyebrow={event.name} title="Overview">
        <Link href="/leaderboard" className="btn btn-outline-dark btn-sm">
          Leaderboard
        </Link>
        <button className="btn btn-primary btn-sm">Lock {current.name.split(" · ")[0]}</button>
      </PageHeader>

      <div className="row g-3 mb-4">
        {stats.map((s) => (
          <div key={s.label} className="col-6 col-lg-3">
            <div className="card h-100">
              <div className="card-body">
                <div className="eyebrow mb-1">{s.label}</div>
                <div className="h3 mb-0">{s.value}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4">
        <div className="col-lg-7">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="h6 mb-3">Rounds</h2>
              <div className="table-responsive">
              <table className="table align-middle mb-0 text-nowrap">
                <thead>
                  <tr>
                    <th>Round</th>
                    <th>Starts</th>
                    <th>Progress</th>
                    <th className="text-end">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rounds.map((r) => (
                    <tr key={r.id}>
                      <td className="fw-medium">{r.name}</td>
                      <td className="text-body-secondary">{r.starts}</td>
                      <td style={{ width: "30%" }}>
                        <div className="score-bar">
                          <span style={{ width: `${(r.scored / r.teams) * 100}%` }} />
                        </div>
                      </td>
                      <td className="text-end">
                        <StatusBadge status={r.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3">
                <h2 className="h6 mb-0">Recent activity</h2>
                <Link href="/organizer/audit" className="small">
                  View all
                </Link>
              </div>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                {auditLog.slice(0, 4).map((a) => (
                  <li key={a.id} className="d-flex gap-3 small">
                    <span className="text-body-secondary font-monospace">{a.time}</span>
                    <span>
                      <span className="fw-medium">{a.actor}</span> {a.action.toLowerCase()} ·{" "}
                      <span className="text-body-secondary">{a.target}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
