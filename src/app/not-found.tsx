import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-site py-24 text-center">
      <h1 className="text-4xl font-extrabold text-navy-900">Page not found</h1>
      <p className="mt-4 text-navy-800/70">
        That page doesn&apos;t exist — but a great team event might.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="btn-primary">Go home</Link>
        <Link href="/team-building-activities" className="btn-secondary">
          Browse activities
        </Link>
      </div>
    </div>
  );
}
