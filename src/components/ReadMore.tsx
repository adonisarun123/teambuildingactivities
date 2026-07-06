// Collapsible prose — keeps SEO content in the DOM while cutting visible
// density. Pure <details>, no JS.
export function ReadMore({
  children,
  label = "Keep reading",
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <details className="group mt-3">
      <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded-full bg-electric-50 px-4 py-2 text-sm font-bold text-electric-700 transition hover:bg-electric-100 [&::-webkit-details-marker]:hidden">
        <span className="group-open:hidden">{label}</span>
        <span className="hidden group-open:inline">Show less</span>
        <span className="text-xs transition group-open:rotate-180" aria-hidden>
          ▾
        </span>
      </summary>
      <div className="prose-site mt-4">{children}</div>
    </details>
  );
}
