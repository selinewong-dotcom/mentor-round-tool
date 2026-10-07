import { event, leaderboard, teamById } from "@/lib/mock-data";

const max = 40;

function Change({ value }: { value: number }) {
  if (value === 0) return <span className="text-body-secondary">–</span>;
  return (
    <span className={value > 0 ? "text-teal" : "text-body-secondary"}>
      {value > 0 ? "▲" : "▼"} {Math.abs(value)}
    </span>
  );
}

export default function Leaderboard() {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
        <div>
          <div className="eyebrow mb-1">{event.name}</div>
          <h1 className="h2 mb-0">Leaderboard</h1>
        </div>
        <div className="small text-body-secondary d-flex align-items-center gap-2">
          <span className="live-dot" /> Live · updates every 10 s
        </div>
      </div>

      <div className="card">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead>
              <tr>
                <th className="ps-4" style={{ width: 80 }}>Rank</th>
                <th>Team</th>
                <th className="d-none d-md-table-cell" style={{ width: "30%" }}>Score</th>
                <th className="text-end">Points</th>
                <th className="text-end pe-4">Move</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((row, i) => {
                const team = teamById(row.teamId)!;
                return (
                  <tr key={row.teamId}>
                    <td className="ps-4">
                      <span className={`rank ${i === 0 ? "rank-1" : ""}`}>{i + 1}</span>
                    </td>
                    <td>
                      <div className="fw-semibold">{team.name}</div>
                      <div className="small text-body-secondary">{team.project}</div>
                    </td>
                    <td className="d-none d-md-table-cell">
                      <div className="score-bar">
                        <span style={{ width: `${(row.score / max) * 100}%` }} />
                      </div>
                    </td>
                    <td className="text-end fw-semibold">{row.score.toFixed(1)}</td>
                    <td className="text-end pe-4 small">
                      <Change value={row.change} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <p className="small text-body-secondary mt-3">
        Average of mentor scores across all rounds so far. Final results are published when the organizer locks the last round.
      </p>
    </>
  );
}
