export default function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4 pb-3 border-bottom">
      <div>
        {eyebrow && <div className="eyebrow mb-1">{eyebrow}</div>}
        <h1 className="h3 mb-0">{title}</h1>
      </div>
      {children && <div className="d-flex gap-2">{children}</div>}
    </div>
  );
}
