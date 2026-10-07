import PageHeader from "@/components/PageHeader";
import StatusBadge from "@/components/StatusBadge";
import { mentors } from "@/lib/mock-data";

export default function MentorsPage() {
  return (
    <>
      <PageHeader eyebrow="Organizer" title="Mentors">
        <button className="btn btn-outline-dark btn-sm">Send reminders</button>
        <button className="btn btn-primary btn-sm">Invite mentor</button>
      </PageHeader>
      <div className="card">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead>
              <tr>
                <th className="ps-4">Mentor</th>
                <th>Expertise</th>
                <th style={{ width: "25%" }}>Scored</th>
                <th className="text-end pe-4">Invite</th>
              </tr>
            </thead>
            <tbody>
              {mentors.map((m) => (
                <tr key={m.id}>
                  <td className="ps-4">
                    <div className="fw-semibold">{m.name}</div>
                    <div className="small text-body-secondary">{m.email}</div>
                  </td>
                  <td className="text-body-secondary">{m.expertise}</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="score-bar flex-grow-1">
                        <span style={{ width: `${(m.scored / m.assigned) * 100}%` }} />
                      </div>
                      <span className="small text-body-secondary">
                        {m.scored}/{m.assigned}
                      </span>
                    </div>
                  </td>
                  <td className="text-end pe-4">
                    <StatusBadge status={m.invited ? "invited" : "not invited"} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
