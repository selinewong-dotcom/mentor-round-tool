"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Brand from "./Brand";

const links = [
  { href: "/mentor", label: "My teams" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/organizer", label: "Organizer" },
];

export default function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md topnav sticky-top">
      <div className="container">
        <Brand />
        <button
          className="navbar-toggler border-0"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto gap-md-2 align-items-md-center">
            {links.map((l) => (
              <li key={l.href} className="nav-item">
                <Link
                  href={l.href}
                  className={`nav-link ${pathname.startsWith(l.href) ? "active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-md-2">
              <Link href="/sign-in" className="btn btn-sm btn-outline-dark">
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
