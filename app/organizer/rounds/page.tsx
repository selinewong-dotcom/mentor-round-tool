import PageHeader from "@/components/PageHeader";
import StatusBadge from "@/components/StatusBadge";
import { rounds } from "@/lib/mock-data";

export default function RoundsPage() {
  return (
    <>
      <PageHeader eyebrow="Organizer" title="Rounds">
        <button className="btn btn-primary btn-sm">New round</button>
      </PageHeader>
      <div className="d-flex flex-column gap-3">
        {rounds.map((r) => (
          <div key={r.id} className={`card ${r.status === "open" ? "border-teal" : ""}`}>
            <div className="card-body d-flex flex-wrap align-items-center gap-3 p-4">
              <div className="flex-grow-1">
                <div className="d-flex align-items-center gap-2 mb-1">
                  <h2 className="h5 mb-0">{r.name}</h2>
                  <StatusBadge status={r.status} />
                </div>
                <div className="small text-body-secondary">
                  Starts {r.starts} · {r.scored} of {r.teams} teams scored
                </div>
              </div>
              <div className="d-flex gap-2">
                {r.status === "open" && <button className="btn btn-primary btn-sm">Lock round</button>}
                {r.status === "locked" && <button className="btn btn-outline-dark btn-sm">Unlock</button>}
                {r.status === "upcoming" && <button className="btn btn-outline-primary btn-sm">Open round</button>}
                <button className="btn btn-outline-dark btn-sm">Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
