import PageHeader from "@/components/PageHeader";
import { auditLog } from "@/lib/mock-data";

export default function AuditPage() {
  return (
    <>
      <PageHeader eyebrow="Organizer" title="Audit log">
        <button className="btn btn-outline-dark btn-sm">Export</button>
      </PageHeader>
      <div className="card">
        <ul className="list-group list-group-flush">
          {auditLog.map((a) => (
            <li key={a.id} className="list-group-item d-flex gap-4 py-3 px-4">
              <span className="text-body-secondary font-monospace small pt-1">{a.time}</span>
              <div>
                <div>
                  <span className="fw-semibold">{a.actor}</span> · {a.action}
                </div>
                <div className="small text-body-secondary">{a.target}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
