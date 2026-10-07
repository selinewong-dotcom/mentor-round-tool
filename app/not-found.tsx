import Link from "next/link";
import Brand from "@/components/Brand";

export default function NotFound() {
  return (
    <main className="min-vh-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
      <Brand />
      <div className="eyebrow mt-5 mb-2">404</div>
      <h1 className="h3 mb-2">Page not found</h1>
      <p className="text-body-secondary mb-4">That team or page doesn&apos;t exist.</p>
      <Link href="/" className="btn btn-primary px-4">
        Back home
      </Link>
    </main>
  );
}
