"use client";

import Link from "next/link";
import { useState } from "react";
import Brand from "@/components/Brand";

export default function SignIn() {
  const [step, setStep] = useState<"email" | "code">("email");
  const [email, setEmail] = useState("");

  return (
    <main className="min-vh-100 d-flex align-items-center justify-content-center p-4">
      <div className="signin w-100">
        <div className="text-center mb-4">
          <Brand />
        </div>
        <div className="card">
          <div className="card-body p-4">
            {step === "email" ? (
              <form
                key="email"
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep("code");
                }}
              >
                <h1 className="h4 mb-1">Sign in</h1>
                <p className="text-body-secondary small mb-4">
                  We&apos;ll email you a magic link and a 6-digit code.
                </p>
                <label htmlFor="email" className="form-label small fw-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="form-control mb-3"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-primary w-100">
                  Send link
                </button>
              </form>
            ) : (
              <form key="code" onSubmit={(e) => e.preventDefault()}>
                <h1 className="h4 mb-1">Check your inbox</h1>
                <p className="text-body-secondary small mb-4">
                  Click the link we sent to <span className="fw-medium text-body">{email}</span>, or enter the code
                  below.
                </p>
                <div className="d-flex justify-content-between gap-2 mb-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <input
                      key={i}
                      aria-label={`Digit ${i + 1}`}
                      inputMode="numeric"
                      maxLength={1}
                      className="form-control otp-input"
                    />
                  ))}
                </div>
                <Link href="/mentor" className="btn btn-primary w-100 mb-2">
                  Verify
                </Link>
                <button type="button" className="btn btn-link btn-sm w-100" onClick={() => setStep("email")}>
                  Use a different email
                </button>
              </form>
            )}
          </div>
        </div>
        <p className="text-center small text-body-secondary mt-3">
          <Link href="/leaderboard">View the public leaderboard</Link> without signing in.
        </p>
      </div>
    </main>
  );
}
