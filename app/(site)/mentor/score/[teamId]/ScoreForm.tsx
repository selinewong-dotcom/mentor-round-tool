"use client";

import Link from "next/link";
import { useState } from "react";
import { criteria } from "@/lib/mock-data";

export default function ScoreForm() {
  const [values, setValues] = useState<Record<string, number>>(
    Object.fromEntries(criteria.map((c) => [c.id, 5])),
  );
  const [saved, setSaved] = useState(false);
  const total = Object.values(values).reduce((a, b) => a + b, 0);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSaved(true);
      }}
    >
      <div className="card mb-4">
        <div className="card-body p-4 d-flex flex-column gap-4">
          {criteria.map((c) => (
            <div key={c.id}>
              <div className="d-flex justify-content-between align-items-baseline mb-1">
                <label htmlFor={c.id} className="form-label fw-medium mb-0">
                  {c.label}
                </label>
                <span className="fw-semibold text-teal">{values[c.id]} / 10</span>
              </div>
              <div className="small text-body-secondary mb-2">{c.hint}</div>
              <input
                id={c.id}
                type="range"
                className="form-range"
                min={1}
                max={10}
                value={values[c.id]}
                onChange={(e) => {
                  setSaved(false);
                  setValues({ ...values, [c.id]: Number(e.target.value) });
                }}
              />
            </div>
          ))}
          <div>
            <label htmlFor="notes" className="form-label fw-medium">
              Feedback for the team <span className="text-body-secondary fw-normal">(optional)</span>
            </label>
            <textarea id="notes" className="form-control" rows={3} placeholder="What stood out? What could improve?" />
          </div>
        </div>
        <div className="card-footer bg-transparent d-flex justify-content-between align-items-center p-4">
          <div>
            <div className="eyebrow">Total</div>
            <div className="h3 mb-0">
              {total}
              <span className="text-body-secondary fs-6"> / {criteria.length * 10}</span>
            </div>
          </div>
          <div className="d-flex gap-2">
            <Link href="/mentor" className="btn btn-outline-dark">
              Back
            </Link>
            <button type="submit" className="btn btn-primary px-4">
              {saved ? "Saved ✓" : "Submit score"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
