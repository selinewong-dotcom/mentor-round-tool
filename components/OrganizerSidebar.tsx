"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Brand from "./Brand";
import { event } from "@/lib/mock-data";

const links = [
  { href: "/organizer", label: "Overview" },
  { href: "/organizer/rounds", label: "Rounds" },
  { href: "/organizer/teams", label: "Teams" },
  { href: "/organizer/mentors", label: "Mentors" },
  { href: "/organizer/audit", label: "Audit log" },
];

export default function OrganizerSidebar() {
  const pathname = usePathname();

  return (
    <aside className="org-sidebar d-flex flex-column p-3">
      <div className="px-2 py-1 mb-3">
        <Brand />
      </div>
      <div className="px-2 mb-2">
        <div className="eyebrow">Event</div>
        <div className="small fw-medium">{event.name}</div>
      </div>
      <ul className="nav flex-md-column gap-1 mb-auto">
        {links.map((l) => (
          <li key={l.href} className="nav-item">
            <Link href={l.href} className={`nav-link ${pathname === l.href ? "active" : ""}`}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <hr className="d-none d-md-block" />
      <div className="d-none d-md-flex flex-column gap-2 px-2">
        <Link href="/leaderboard" className="small">
          View public leaderboard ↗
        </Link>
        <div className="small text-body-secondary">Signed in as organizer</div>
      </div>
    </aside>
  );
}
