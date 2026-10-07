import Link from "next/link";

export default function Brand() {
  return (
    <Link href="/" className="d-inline-flex align-items-center gap-2 text-decoration-none text-body fw-semibold">
      <span className="brand-mark">M</span>
      Mentor Rounds
    </Link>
  );
}
