const styles: Record<string, string> = {
  open: "bg-teal",
  scored: "bg-teal-soft",
  locked: "bg-charcoal-soft",
  pending: "bg-charcoal-soft",
  upcoming: "border text-body-secondary",
  invited: "bg-teal-soft",
  "not invited": "border text-body-secondary",
};

export default function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`badge badge-status text-capitalize ${styles[status] ?? "border"}`}>
      {status}
    </span>
  );
}
