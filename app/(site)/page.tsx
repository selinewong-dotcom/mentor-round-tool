import Link from "next/link";
import { event } from "@/lib/mock-data";

const roles = [
  {
    href: "/mentor",
    title: "Mentor",
    body: "See your assigned teams and submit scores for the current round.",
    cta: "Start scoring",
  },
  {
    href: "/organizer",
    title: "Organizer",
    body: "Set up rounds, import teams, invite mentors and lock results.",
    cta: "Open console",
  },
  {
    href: "/leaderboard",
    title: "Public viewer",
    body: "Follow the live leaderboard as scores come in.",
    cta: "View leaderboard",
  },
];

export default function Home() {
  return (
    <>
      <section className="py-5 text-center mx-auto" style={{ maxWidth: 640 }}>
        <span className="badge badge-status bg-teal-soft mb-3">
          <span className="live-dot me-2" />
          {event.name} · {event.currentRound} is open
        </span>
        <h1 className="display-5 mb-3">Mentor scoring, without the spreadsheet.</h1>
        <p className="lead text-body-secondary mb-4">
          Run judging rounds, collect mentor scores and publish a live leaderboard, all in one place.
        </p>
        <div className="d-flex gap-2 justify-content-center">
          <Link href="/sign-in" className="btn btn-primary px-4">
            Sign in
          </Link>
          <Link href="/leaderboard" className="btn btn-outline-dark px-4">
            Leaderboard
          </Link>
        </div>
      </section>

      <section className="row g-4 pt-4">
        {roles.map((r) => (
          <div key={r.href} className="col-md-4">
            <Link href={r.href} className="card role-card h-100 text-decoration-none">
              <div className="card-body p-4">
                <div className="eyebrow mb-2">I&apos;m a</div>
                <h2 className="h4 mb-2">{r.title}</h2>
                <p className="text-body-secondary mb-4">{r.body}</p>
                <span className="text-teal fw-medium">{r.cta} →</span>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
}
