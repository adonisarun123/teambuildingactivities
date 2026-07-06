type FAQItem = { question: string; answer: string };

export function FAQ({ items, heading = "Frequently asked questions" }: { items: FAQItem[]; heading?: string }) {
  if (!items.length) return null;
  return (
    <section className="container-site mt-16">
      <h2 className="h-section">{heading}</h2>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border border-navy-900/10 bg-white p-5 open:shadow-card"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-navy-900">
              {item.question}
              <span className="text-electric-500 transition group-open:rotate-45" aria-hidden>
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-6 text-navy-800/80">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function faqJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
