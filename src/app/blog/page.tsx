import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FAQ, faqJsonLd } from "@/components/FAQ";
import { ReadMore } from "@/components/ReadMore";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: "Team Building Activities Blog | Insights & Guides" },
  description:
    "Long-form articles on team building activities, employee engagement, leadership development, virtual programs & corporate offsites. Written by practitioners.",
  alternates: { canonical: "/blog" },
};

const topics = [
  {
    t: "Team building activities, ideas and frameworks",
    d: "The “what” and “how” of activities. Indoor. Outdoor. Virtual. Hybrid. We try not to write generic list articles. Instead: when does this activity actually work? Who is it for? What does a good debrief look like afterwards?",
  },
  {
    t: "Employee engagement",
    d: "What actually moves it? Engagement is not a survey score. It's a leading indicator of retention, productivity, and discretionary effort. We write about what makes the needle move, what doesn't, and why most “engagement initiatives” stall after six months.",
  },
  {
    t: "Leadership development and experiential learning",
    d: "For L&D heads and leadership practitioners. Methodologies. Program design principles. Evaluation frameworks like Kirkpatrick. And case-style writing from real engagements we've delivered.",
  },
  {
    t: "Corporate off-sites and team outings",
    d: "Choosing venues. Designing agendas. Balancing work content with team time. And the operational stuff nobody talks about, like how to handle dietary preferences for a 150-person group without losing your mind.",
  },
  {
    t: "Virtual and hybrid team programs",
    d: "For distributed teams. What works in a 90-minute virtual session. How to onboard remote joiners. Hybrid meeting design. And the limits of virtual team building.",
  },
  {
    t: "City guides",
    d: "Best venues for team outings around Bangalore, Mumbai, Delhi/NCR, Hyderabad, Chennai, Pune. Honest reviews of places we've actually run programs at. Not affiliate lists.",
  },
  {
    t: "HR manager toolkit",
    d: "Templates. Checklists. Vendor evaluation criteria. Post-event reporting formats. Practical artifacts you can actually use in your job.",
  },
];

// Featured articles — full posts are being published; cards go live as each
// article ships. Until then they render without links to avoid dead URLs.
const featured = [
  {
    title: "Why Most Team Building Activities Fail (And What to Do Instead)",
    blurb:
      "The single most important post on this site. If you only read one piece, read this one. It explains why the activity matters less than the design around it — and what to look for when you're evaluating team-building vendors.",
  },
  {
    title: "Indoor Team Building Activities That Actually Work for Office Groups",
    blurb:
      "A practitioner's guide broken down by team type and purpose. Not just another list — actual guidance on which activities work for engineering teams vs. sales teams vs. leadership groups.",
  },
  {
    title: "Outdoor Team Building Activities: A Complete Guide for HR Managers",
    blurb:
      "What surfaces in outdoor formats? When to use them. When not to. And a curated list of venues across India, from Bangalore's resort properties to overnight options in Coorg, Lonavala, and Manesar.",
  },
  {
    title: "Virtual Team Building Activities: The Honest Guide for Remote Teams",
    blurb:
      "Built during the pandemic. Refined since. What actually works in a virtual session, how to keep small breakout groups engaged, and the formats that translate well from in-person.",
  },
  {
    title: "Team Building Activities for Large Groups",
    blurb:
      "A field guide for HR managers handling flagship events. Logistics. Format selection. Parallel-track design. Facilitator coordination. And the specific failure modes of large-group programs.",
  },
];

const upcoming = [
  ["The Debrief: The Minutes That Decide Whether Your Program Worked", "A framework for running structured reflection. Sample questions. A staged flow that works for almost any activity."],
  ["Team Building Activities for Engineering Teams: What Actually Works", "Why generic activities fall flat with engineers. What analytical teams actually respond to."],
  ["Team Outing Venues Near Bangalore: Honest Reviews from Real Programs", "We've personally run programs at most resort properties within 100km of Bangalore. Honest pros and cons. Ideal group sizes. What to ask before booking."],
  ["Onboarding Cohorts: Designing Team Building for New Joiners", "For HR leaders running campus or lateral cohorts. How to use experiential formats to accelerate culture absorption."],
  ["Annual Day Events: Beyond Awards and DJ Nights", "A different way to think about annual day events. How to design a flagship event that actually does something."],
];

const wontFind = [
  ["No SEO listicles", "We won't write “50 Fun Team Building Activities” just to chase keywords. If we list activities, it's because they're tied to a real framework or context."],
  ["No competitor reviews", "It's a small industry. We respect the people doing this work."],
  ["No hot takes on workplace controversies", "This is a practitioner blog about team building. There are better places for opinions on hybrid work mandates or layoff debates."],
  ["No AI-generated filler", "A human practitioner writes every piece. You'll see strong points of view. Edits over time. And the occasional change of mind."],
];

const faqs = [
  {
    question: "Who writes this blog?",
    answer:
      "Practitioners — the people who actually design and run team building programs. The writing is grounded in real engagements, not abstract theory. Articles are sometimes co-written with senior facilitators and L&D consultants on specific topics.",
  },
  {
    question: "How often is the blog updated?",
    answer:
      "Every few weeks. Plus occasional short posts for time-sensitive topics (seasonal program ideas, year-end review formats). We prioritise quality and original perspective over publishing volume.",
  },
  {
    question: "Can I contribute a guest post?",
    answer:
      "If you're an L&D practitioner, an organisational psychologist, an experienced facilitator, or an HR leader with a strong point of view, yes. Drop us a note via the contact page with the topic you'd like to write about. We don't accept SEO-bait guest posts or content trades.",
  },
  {
    question: "Can I reuse content from this blog?",
    answer:
      "Short excerpts (under 150 words) with proper attribution and a link back, yes. Full reproduction, no. If you'd like to syndicate a full article on your platform, reach out. We sometimes say yes.",
  },
  {
    question: "Where can I find articles on a specific city or venue?",
    answer:
      "Use the City Guides category or the on-page search. We have honest reviews of team outing venues around Bangalore, Mumbai, Delhi/NCR, Hyderabad, Chennai, and several destination locations like Coorg, Lonavala, Manesar, and Munnar.",
  },
];

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Team Building Activities Blog",
    url: `${site.url}/blog`,
    description: metadata.description,
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <>
      <section className="border-b border-navy-900/5 bg-gradient-to-b from-electric-50/60 to-white">
        <div className="container-site py-14">
          <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Looking for Real Insights on Team Building — Not Another Listicle?
          </h1>
          <div className="prose-site mt-6 max-w-3xl">
            <p>
              Most team-building blogs are list-bait. &ldquo;27 Fun Team
              Building Activities for 2026.&rdquo; &ldquo;Top 10 Icebreakers
              for Office Meetings.&rdquo; They rank on Google because someone
              optimised the title. Not because they have anything useful to
              say.
            </p>
            <p>This blog is different.</p>
          </div>
          <ReadMore>
            <p>
              We write what we've learned from running hundreds of corporate
              programs across India. What worked. What didn't. What we changed
              our minds about. And what we wish HR managers were asking us
              instead of &ldquo;send me a list of activities.&rdquo;
            </p>
            <p>
              If you're an HR manager, an L&D lead, an admin manager who just
              got handed an offsite to plan, or a founder thinking through how
              to build culture from scratch, there's something here for you.
            </p>
          </ReadMore>
          <Link href="/contact-us" className="btn-primary mt-6">
            Skip the reading and plan a free program call →
          </Link>
        </div>
      </section>

      <section className="container-site mt-14">
        <h2 className="h-section">What we write about</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <div key={t.t} className="rounded-2xl border border-navy-900/5 bg-white p-6 shadow-card">
              <h3 className="font-bold text-navy-900">{t.t}</h3>
              <p className="mt-2 text-sm leading-6 text-navy-800/75">{t.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 bg-mist py-14">
        <div className="container-site">
          <h2 className="h-section">Featured articles</h2>
          <p className="mt-3 text-sm text-navy-800/70">
            Publishing soon — these five are in final edit and go live first.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {featured.map((f) => (
              <article key={f.title} className="rounded-2xl border border-navy-900/5 bg-white p-6 shadow-card">
                <p className="tag-warm">Coming soon</p>
                <h3 className="mt-3 text-lg font-bold text-navy-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-navy-800/75">{f.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site mt-14">
        <h2 className="h-section">What's coming next</h2>
        <p className="mt-3 text-sm text-navy-800/70">A few pieces we're working on right now.</p>
        <ul className="mt-6 space-y-3">
          {upcoming.map(([t, d]) => (
            <li key={t} className="rounded-xl border border-navy-900/10 bg-white p-5">
              <p className="font-semibold text-navy-900">{t}</p>
              <p className="mt-1 text-sm leading-6 text-navy-800/75">{d}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-site mt-14">
        <h2 className="h-section">What you won't find on this blog</h2>
        <p className="mt-3 text-sm text-navy-800/70">A short list of choices we made.</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {wontFind.map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-mist p-6">
              <h3 className="font-bold text-navy-900">{t}</h3>
              <p className="mt-2 text-sm leading-6 text-navy-800/75">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site mt-14">
        <h2 className="h-section">How to keep up with new articles</h2>
        <div className="prose-site mt-4 max-w-3xl">
          <p>
            Just bookmark this page. We add new articles every few weeks. No
            email signup. No &ldquo;subscribe to unlock.&rdquo; Just come back
            when you need to.
          </p>
          <p>
            If a topic isn't covered yet — drop us a line. We pick what to
            write next partly based on the questions HR managers, L&D heads,
            and admin managers actually ask us.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact-us" className="btn-primary">
            Suggest a topic — or plan a program →
          </Link>
        </div>
      </section>

      <FAQ items={faqs} />
      <CTASection
        heading="Ready to stop reading and start planning?"
        subheading="Tell us about your team — group size, city, dates, what's going on internally. We'll come back within 24 hours with two or three options that fit."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, faqJsonLd(faqs)]) }}
      />
    </>
  );
}
