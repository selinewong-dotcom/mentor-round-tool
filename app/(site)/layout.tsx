import TopNav from "@/components/TopNav";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopNav />
      <main className="container py-5">{children}</main>
    </>
  );
}
