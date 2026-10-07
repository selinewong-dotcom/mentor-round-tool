import OrganizerSidebar from "@/components/OrganizerSidebar";

export default function OrganizerLayout({ children }: LayoutProps<"/organizer">) {
  return (
    <div className="org-shell">
      <OrganizerSidebar />
      <main className="flex-grow-1 p-4 p-lg-5" style={{ minWidth: 0 }}>
        {children}
      </main>
    </div>
  );
}
