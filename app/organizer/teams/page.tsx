import PageHeader from "@/components/PageHeader";
import { teams } from "@/lib/mock-data";

export default function TeamsPage() {
  return (
    <>
      <PageHeader eyebrow="Organizer" title="Teams">
        <button className="btn btn-outline-dark btn-sm">Import CSV</button>
        <button className="btn btn-primary btn-sm">Add team</button>
      </PageHeader>
      <div className="mb-3" style={{ maxWidth: 320 }}>
        <input className="form-control form-control-sm" placeholder="Search teams" />
      </div>
      <div className="card">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead>
              <tr>
                <th className="ps-4">Table</th>
                <th>Team</th>
                <th>Project</th>
                <th>Members</th>
                <th className="pe-4" />
              </tr>
            </thead>
            <tbody>
              {teams.map((t) => (
                <tr key={t.id}>
                  <td className="ps-4 font-monospace text-body-secondary">{t.table}</td>
                  <td className="fw-semibold">{t.name}</td>
                  <td className="text-body-secondary">{t.project}</td>
                  <td>{t.members.length}</td>
                  <td className="text-end pe-4">
                    <button className="btn btn-link btn-sm text-decoration-none">Edit</button>
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
