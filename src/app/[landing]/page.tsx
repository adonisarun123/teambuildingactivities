import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { categoryPages, getCategoryPage } from "@/data/category-pages";
import { cityPages, getCityPage } from "@/data/city-pages";
import { activities } from "@/data/activities";
import { ActivityCard } from "@/components/ActivityCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTASection } from "@/components/CTASection";
import { FAQ, faqJsonLd } from "@/components/FAQ";

type Props = { params: { landing: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...categoryPages.map((p) => ({ landing: p.slug })),
    ...cityPages.map((p) => ({ landing: p.slug })),
  ];
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getCategoryPage(params.landing) ?? getCityPage(params.landing);
  if (!page) return {};
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
  };
}

function Hero({ h1, intro }: { h1: string; intro: string[] }) {
  return (
    <section className="border-b border-navy-900/5 bg-gradient-to-b from-electric-50/60 to-white">
      <div className="container-site py-14">
        <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
          {h1}
        </h1>
        <div className="prose-site mt-6 max-w-3xl">
          {intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="#enquiry" className="btn-primary">
            Get a curated plan
          </Link>
          <Link href="/team-building-activities" className="btn-secondary">
            Browse all activities
          </Link>
        </div>
      </div>
    </section>
  );
}

function IdeaList({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-navy-900/5 bg-white p-6 shadow-card">
      <h3 className="font-bold text-navy-900">{heading}</h3>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-6 text-navy-800/80">
            <span className="mt-0.5 text-electric-500">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function LandingPage({ params }: Props) {
  const categoryPage = getCategoryPage(params.landing);
  const cityPage = getCityPage(params.landing);
  if (!categoryPage && !cityPage) notFound();

  if (categoryPage) {
    const matched = activities.filter((a) => {
      if (categoryPage.matchFormat && a.format !== categoryPage.matchFormat) return false;
      if (categoryPage.matchCategory && !a.category.includes(categoryPage.matchCategory)) return false;
      return true;
    });
    const relatedPages = categoryPage.relatedSlugs
      .map((s) => getCategoryPage(s))
      .filter((p): p is NonNullable<typeof p> => Boolean(p));

    return (
      <>
        <Hero h1={categoryPage.h1} intro={categoryPage.intro} />

        {matched.length > 0 && (
          <section className="container-site mt-14">
            <h2 className="h-section">Recommended activities</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {matched.map((a) => (
                <ActivityCard key={a.slug} activity={a} />
              ))}
            </div>
          </section>
        )}

        {categoryPage.sections.map((section) => (
          <section key={section.heading} className="container-site mt-14">
            <h2 className="h-section">{section.heading}</h2>
            <div className="prose-site mt-4 max-w-3xl">
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ))}

        {categoryPage.comparisonTable && <ComparisonTable table={categoryPage.comparisonTable} />}

        <FAQ items={categoryPage.faqs} />

        {relatedPages.length > 0 && (
          <section className="container-site mt-14">
            <h2 className="h-section">Related categories</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {relatedPages.map((p) => (
                <Link key={p.slug} href={`/${p.slug}`} className="card p-5 font-semibold text-navy-900">
                  {p.h1} →
                </Link>
              ))}
            </div>
          </section>
        )}

        <CTASection />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(categoryPage.faqs)) }}
        />
      </>
    );
  }

  const page = cityPage!;
  const otherCities = cityPages.filter((c) => c.slug !== page.slug);

  return (
    <>
      <Hero h1={page.h1} intro={page.intro} />

      <section className="container-site mt-14">
        <h2 className="h-section">Popular formats in {page.city}</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {page.popularFormats.map((f) => (
            <li key={f} className="flex gap-3 rounded-2xl bg-mist p-5 text-sm leading-6 text-navy-800/85">
              <span className="mt-0.5 text-electric-500">★</span>
              {f}
            </li>
          ))}
        </ul>
      </section>

      <section className="container-site mt-14">
        <h2 className="h-section">Activity ideas for {page.city} teams</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <IdeaList heading="Indoor options" items={page.indoorIdeas} />
          <IdeaList heading="Outdoor options" items={page.outdoorIdeas} />
          <IdeaList heading="Offsite & outing ideas" items={page.offsiteIdeas} />
        </div>
        <p className="mt-6 max-w-3xl rounded-2xl border border-electric-100 bg-electric-50/50 p-5 text-sm leading-6 text-navy-800/85">
          <strong className="text-navy-900">Group sizes:</strong> {page.groupSizeNote}
        </p>
      </section>

      {page.sections.map((section) => (
        <section key={section.heading} className="container-site mt-14">
          <h2 className="h-section">{section.heading}</h2>
          <div className="prose-site mt-4 max-w-3xl">
            {section.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      ))}

      <FAQ items={page.faqs} />

      <section className="container-site mt-14">
        <h2 className="h-section">Other cities we cover</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {otherCities.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`} className="card p-4 text-center text-sm font-semibold text-navy-900">
              {c.city}
            </Link>
          ))}
        </div>
      </section>

      <CTASection
        heading={`Plan a team building event in ${page.city}`}
        subheading={`Tell us your team size, dates and goal — we'll send a curated plan with ${page.city} venue options within one working day.`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(page.faqs)) }}
      />
    </>
  );
}
