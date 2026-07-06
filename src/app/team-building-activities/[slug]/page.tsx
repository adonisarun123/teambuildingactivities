import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { activities, getActivity, getRelatedActivities } from "@/data/activities";
import { ActivityCard } from "@/components/ActivityCard";
import { CTASection } from "@/components/CTASection";
import { FAQ, faqJsonLd } from "@/components/FAQ";
import { site } from "@/config/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return activities.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const activity = getActivity(params.slug);
  if (!activity) return {};
  return {
    title: `${activity.title} — Team Building Activity`,
    description: activity.shortDescription,
    alternates: { canonical: `/team-building-activities/${activity.slug}` },
  };
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-mist p-4">
      <dt className="text-xs font-semibold uppercase tracking-wide text-navy-800/60">{label}</dt>
      <dd className="mt-1 text-sm font-semibold text-navy-900">{value}</dd>
    </div>
  );
}

function ListSection({ heading, items, ordered = false }: { heading: string; items: string[]; ordered?: boolean }) {
  if (!items.length) return null;
  const ListTag = ordered ? "ol" : "ul";
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-navy-900">{heading}</h2>
      <ListTag className={`mt-4 space-y-3 ${ordered ? "list-none" : ""}`}>
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-[15px] leading-7 text-navy-800/85">
            <span className={`mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-bold ${ordered ? "bg-electric-600 text-white" : "bg-electric-50 text-electric-600"}`}>
              {ordered ? i + 1 : "✓"}
            </span>
            {item}
          </li>
        ))}
      </ListTag>
    </section>
  );
}

export default function ActivityPage({ params }: Props) {
  const activity = getActivity(params.slug);
  if (!activity) notFound();

  const related = getRelatedActivities(activity);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: activity.title,
    description: activity.shortDescription,
    eventAttendanceMode:
      activity.format === "Virtual"
        ? "https://schema.org/OnlineEventAttendanceMode"
        : "https://schema.org/OfflineEventAttendanceMode",
    organizer: { "@type": "Organization", name: site.name, url: site.url },
    location:
      activity.format === "Virtual"
        ? { "@type": "VirtualLocation", url: site.url }
        : { "@type": "Place", name: "Multiple venues across India", address: { "@type": "PostalAddress", addressCountry: "IN" } },
  };

  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white">
        <div className="container-site py-12">
          <nav className="text-xs text-navy-800/60" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-electric-600">Home</Link>
            {" / "}
            <Link href="/team-building-activities" className="hover:text-electric-600">Activities</Link>
            {" / "}
            <span className="text-navy-900">{activity.title}</span>
          </nav>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="tag">{activity.format}</span>
            <span className="tag-warm">{activity.energyLevel} energy</span>
            <span className="tag">{activity.difficulty}</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            {activity.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-navy-800/80">
            {activity.shortDescription}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#enquiry" className="btn-primary">
              Want this for your team?
            </Link>
            <a href={site.whatsappHref} className="btn-secondary">
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="container-site">
        <dl className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Fact label="Group size" value={activity.groupSize} />
          <Fact label="Duration" value={activity.duration} />
          <Fact label="Energy level" value={activity.energyLevel} />
          <Fact label="Difficulty" value={activity.difficulty} />
        </dl>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <section className="prose-site">
              {activity.longDescription.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>

            <ListSection heading="How the activity works" items={activity.howItWorks} ordered />
            <ListSection heading="Team outcomes" items={activity.outcomes} />
            <ListSection heading="Facilitator notes" items={activity.facilitatorNotes} />
            <ListSection heading="Variations" items={activity.variations} />
          </div>

          <aside className="space-y-6 lg:pt-2">
            <div className="rounded-2xl border border-navy-900/10 p-5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-navy-800/60">Best for</h2>
              <ul className="mt-3 space-y-2 text-sm text-navy-800/85">
                {activity.idealFor.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-navy-900/10 p-5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-navy-800/60">Objectives</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {activity.objectives.map((o) => (
                  <span key={o} className="tag">{o}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-navy-900/10 p-5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-navy-800/60">Location suitability</h2>
              <ul className="mt-3 space-y-2 text-sm text-navy-800/85">
                {activity.location.map((l) => (
                  <li key={l}>• {l}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-navy-900/10 p-5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-navy-800/60">Materials (we bring them)</h2>
              <ul className="mt-3 space-y-2 text-sm text-navy-800/85">
                {activity.materials.map((m) => (
                  <li key={m}>• {m}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <FAQ items={activity.faqs} heading={`${activity.title} — FAQs`} />

      {related.length > 0 && (
        <section className="container-site mt-16">
          <h2 className="h-section">Related activities</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <ActivityCard key={a.slug} activity={a} />
            ))}
          </div>
        </section>
      )}

      <CTASection heading={`Want ${activity.title} for your team?`} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, faqJsonLd(activity.faqs)]) }}
      />
    </>
  );
}
