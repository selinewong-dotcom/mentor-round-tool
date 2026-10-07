import Link from "next/link";
import { notFound } from "next/navigation";
import { event, teamById } from "@/lib/mock-data";
import ScoreForm from "./ScoreForm";

export default async function ScorePage({ params }: PageProps<"/mentor/score/[teamId]">) {
  const { teamId } = await params;
  const team = teamById(teamId);
  if (!team) notFound();

  return (
    <div className="mx-auto" style={{ maxWidth: 640 }}>
      <Link href="/mentor" className="small text-decoration-none">
        ← My teams
      </Link>
      <div className="mt-3 mb-4">
        <div className="eyebrow mb-1">
          {event.currentRound} · Table {team.table}
        </div>
        <h1 className="h2 mb-1">{team.name}</h1>
        <p className="text-body-secondary mb-0">
          {team.project} · {team.members.join(", ")}
        </p>
      </div>
      <ScoreForm />
    </div>
  );
}
