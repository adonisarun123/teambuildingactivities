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
import { ReadMore } from "@/components/ReadMore";
import { Wave } from "@/components/Wave";
import type { LandingSection } from "@/data/landing-types";

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

function Hero({ h1, intro, eyebrow }: { h1: string; intro: string[]; eyebrow: string }) {
  const [first, ...rest] = intro;
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-electric-50 to-white">
      <div className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full bg-sunrise-100 blur-3xl" aria-hidden />
      <div className="container-site relative py-14">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-[42px]">
          {h1}
        </h1>
        <p className="prose-site mt-5">{first}</p>
        {rest.length > 0 && (
          <ReadMore>
            {rest.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </ReadMore>
        )}
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

const sectionEmojis = ["🧭", "🧩", "⚡", "🎪", "🌟", "🛠️"];

function ContentSections({ sections }: { sections: LandingSection[] }) {
  return (
    <section className="container-site mt-14">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, i) => {
          const [first, ...rest] = section.paragraphs;
          return (
            <div
              key={section.heading}
              className="rounded-3xl border-2 border-navy-900/10 bg-white p-6 shadow-card"
            >
              <span className={`icon-dot ${i % 2 ? "bg-sunrise-50" : "bg-electric-50"}`}>
                {sectionEmojis[i % sectionEmojis.length]}
              </span>
              <h2 className="mt-4 text-lg font-extrabold leading-snug text-navy-900">
                {section.heading}
              </h2>
              <p className="prose-site mt-3 text-sm">{first}</p>
              {rest.length > 0 && (
                <ReadMore>
                  {rest.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </ReadMore>
              )}
            </div>
          );
        })}
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
        <Hero h1={categoryPage.h1} intro={categoryPage.intro} eyebrow="🎪 Activity category" />

        {matched.length > 0 && (
          <section className="container-site mt-12">
            <div className="flex items-end justify-between gap-4">
              <h2 className="h-section">Recommended activities</h2>
              <Link href="/team-building-activities" className="section-link hidden sm:block">
                See all →
              </Link>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {matched.map((a) => (
                <ActivityCard key={a.slug} activity={a} />
              ))}
            </div>
          </section>
        )}

        <Wave fill="#f8f7fa" className="mt-14" />
        <div className="bg-mist pb-2 pt-2">
          <div className="container-site">
            <p className="eyebrow">📖 The practical guide</p>
          </div>
          <ContentSections sections={[...categoryPage.sections]} />
          <div className="pb-10" />
        </div>
        <Wave fill="#f8f7fa" flip />

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
      <Hero h1={page.h1} intro={page.intro} eyebrow={`📍 ${page.city}`} />

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

      <Wave fill="#f8f7fa" className="mt-14" />
      <div className="bg-mist pb-10 pt-2">
        <div className="container-site">
          <p className="eyebrow">📖 Local know-how</p>
        </div>
        <ContentSections sections={[...page.sections]} />
      </div>
      <Wave fill="#f8f7fa" flip />

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
