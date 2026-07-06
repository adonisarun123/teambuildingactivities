import type { Metadata } from "next";
import Link from "next/link";
import { FAQ, faqJsonLd } from "@/components/FAQ";
import { LeadForm } from "@/components/LeadForm";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: "Contact Us | Plan a Team Building Program in 24 Hours" },
  description:
    "Talk to team building specialists for a custom proposal in 24 hours. Pan-India delivery across Bangalore, Mumbai, Delhi NCR, Hyderabad, Chennai & 20+ cities.",
  alternates: { canonical: "/contact-us" },
};

const process = [
  {
    t: "Within 4 working hours",
    d: "A real person replies. Not a chatbot. Not a templated auto-response. We acknowledge your enquiry and schedule a 20-minute scoping call at a time that works for you.",
  },
  {
    t: "On the scoping call",
    d: "We ask about your team. Group size. Function. Recent history. What's working. What's not. What your CHRO or founder actually wants from this. We don't pitch.",
  },
  {
    t: "Within 24 hours of the call",
    d: "A custom proposal lands in your inbox. Specific activities tied to your goals. Venue options if relevant. Clear timeline. And the name of the facilitator who'll lead your program.",
  },
];

const briefItems = [
  ["Approximate group size", "a range is fine (“around 80, give or take 10”)."],
  ["Preferred city", "or willingness to travel to a nearby destination."],
  ["Tentative dates", "or just the month."],
  ["Format preference", "half-day, full-day, overnight offsite, virtual, or open to suggestions."],
  ["Indicative budget", "even a rough range helps. We're not going to argue you up. We'll work with what you have."],
  ["What's going on with the team", "even a single line. “New team, just merged two offices.” “Exhausted post a 9-month rollout.” “Leadership wants strategy plus bonding.” That tells us more than any activity list."],
];

const commitments = [
  ["Enquiry acknowledgement", "Within 4 working hours."],
  ["Scoping call scheduled", "Within 1–2 working days."],
  ["Custom proposal", "Within 24 hours of the scoping call."],
  ["Booking confirmation and contract", "Within 48 hours of proposal acceptance."],
];

const wontDo = [
  "We won't add you to any marketing emails or promotional lists.",
  "We won't share your enquiry data with venue partners without your consent.",
  "We won't send a “just checking in” follow-up email every 48 hours. One thoughtful follow-up is enough.",
  "We won't quote you one number to win the deal and then add line items at the end. The first proposal is the final proposal — unless you ask us to change something.",
];

const faqs = [
  {
    question: "How fast can you respond to an enquiry?",
    answer:
      "Within 4 working hours during business days. If you reach out on a Saturday evening, you'll hear back Monday morning. Emergency requests for programs already in flight are handled immediately by the on-ground program lead.",
  },
  {
    question: "Do I need to share my budget upfront?",
    answer:
      "You don't need to. But it helps. A rough range lets us recommend the right format on the first try. Without it, we might propose a premium overnight offsite when you actually wanted a half-day program. Telling us your budget doesn't mean we'll spend all of it. It means we'll design within it.",
  },
  {
    question: "Can I get a quick quote without a scoping call?",
    answer:
      "Yes, for standard formats. If you send a clear brief — “120 people, full-day indoor, in Hyderabad, March 15th” — we can send an indicative quote within hours. For anything custom (leadership offsite, multi-day, large flagship event, specific learning outcomes), the scoping call is genuinely useful and only takes 20 minutes.",
  },
  {
    question: "How do bookings and payments work?",
    answer:
      "Standard process: scoping call, custom proposal, contract sign-off, advance payment to confirm dates and venues, final payment within 7 days of program completion. We use proper contracts with clear scope, deliverables, payment terms, and cancellation policy. No verbal commitments. No informal billing.",
  },
  {
    question: "What's your cancellation and rescheduling policy?",
    answer:
      "Cancellations well before the program date are refundable, minus venue and supplier deposits already paid. Rescheduling with adequate notice is typically free (subject to venue availability). Closer to the program date, partial charges apply — because facilitator bookings, venue holds, and supplier commitments are locked in. Full terms are in the contract. No surprises.",
  },
];

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us",
    url: `${site.url}/contact-us`,
    mainEntity: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      email: site.email,
      telephone: site.phone,
    },
  };

  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white">
        <div className="container-site py-14">
          <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Want to Plan Something Your Team Will Actually Remember?
          </h1>
          <h2 className="mt-8 text-xl font-bold text-navy-900">
            Why reaching out to most team building companies feels frustrating
          </h2>
          <div className="prose-site mt-4 max-w-3xl">
            <p>
              They make you fill out a form. Wait three days. Receive a generic
              PDF. Schedule a sales call. Get pitched packages you didn't ask
              about. And finally, maybe get a quote that doesn't fit your team.
            </p>
            <p>We do this differently. Here's what actually happens when you reach out.</p>
          </div>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {process.map((p, i) => (
              <li key={p.t} className="relative rounded-2xl border border-navy-900/5 bg-white p-6 shadow-card">
                <span className="absolute -top-3 left-6 grid h-8 w-8 place-items-center rounded-full bg-electric-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-2 font-bold text-navy-900">{p.t}</h3>
                <p className="mt-2 text-sm leading-6 text-navy-800/75">{p.d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl text-sm text-navy-800/80">
            That's the whole process. No multi-week sales funnel. No drip
            campaigns. No &ldquo;let me loop in my manager.&rdquo;
          </p>
          <a href="#enquiry-form" className="btn-primary mt-5">
            Start now — send your brief →
          </a>
        </div>
      </section>

      <section className="container-site mt-14">
        <h2 className="h-section">Three ways to reach us</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <a href={site.whatsappHref} className="card p-6">
            <h3 className="font-bold text-navy-900">Phone or WhatsApp</h3>
            <p className="mt-2 text-sm leading-6 text-navy-800/75">
              Best for fast responses. Especially if your program is under 3 weeks away.
            </p>
            <p className="mt-3 text-sm font-semibold text-electric-600">{site.phone}</p>
          </a>
          <a href={`mailto:${site.email}`} className="card p-6">
            <h3 className="font-bold text-navy-900">Email</h3>
            <p className="mt-2 text-sm leading-6 text-navy-800/75">
              Best for detailed briefs. Send group size, dates, preferred city,
              budget range, and what you're trying to achieve. More context
              means a better proposal.
            </p>
            <p className="mt-3 text-sm font-semibold text-electric-600">{site.email}</p>
          </a>
          <a href="#enquiry-form" className="card p-6">
            <h3 className="font-bold text-navy-900">Enquiry form</h3>
            <p className="mt-2 text-sm leading-6 text-navy-800/75">
              Use the form if you'd like us to come back at a specific date or
              time. We respond within 4 working hours during business days.
            </p>
            <p className="mt-3 text-sm font-semibold text-electric-600">Jump to the form ↓</p>
          </a>
        </div>
      </section>

      <section className="container-site mt-14">
        <h2 className="h-section">What to include in your first message</h2>
        <p className="mt-3 max-w-3xl text-sm text-navy-800/70">
          To save a round of back-and-forth, the most useful first message
          includes a few specifics.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {briefItems.map(([t, d]) => (
            <li key={t} className="rounded-xl border border-navy-900/10 bg-white p-4">
              <p className="text-sm font-semibold text-navy-900">{t}</p>
              <p className="mt-1 text-sm leading-6 text-navy-800/75">{d}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-navy-800/80">
          The more honest the brief, the better the proposal. Promise.
        </p>
      </section>

      <section className="mt-14 bg-mist py-14">
        <div className="container-site">
          <h2 className="h-section">Where we operate</h2>
          <div className="prose-site mt-4 max-w-3xl">
            <p>Active delivery across 27+ Indian cities. On-ground teams or partner networks in:</p>
            <p>
              <strong>Metro hubs:</strong> Bangalore (HQ), Mumbai, Delhi/NCR
              (Gurgaon, Noida, Faridabad), Hyderabad, Chennai, Pune, Kolkata,
              Ahmedabad.
            </p>
            <p>
              <strong>Destination offsites:</strong> Coorg, Munnar, Wayanad,
              Lonavala, Karjat, Igatpuri, Manesar, Neemrana, Damdama, Kabini,
              Chikmagalur, Yelagiri, Mahabalipuram, Manali, Shillong,
              Jaisalmer, Goa, Pondicherry.
            </p>
            <p>
              <strong>Virtual programs:</strong> Delivered globally. Active
              client teams in the US, UK, Singapore, Australia, and the Middle
              East.
            </p>
            <p>
              If your city isn't on the list — ask anyway. We've delivered
              one-off programs in cities we don't usually operate in, when the
              brief was right.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["team-building-activities-bangalore", "team-building-activities-mumbai", "team-building-activities-delhi-ncr", "team-building-activities-hyderabad", "team-building-activities-chennai", "team-building-activities-pune", "team-building-activities-gurgaon", "team-building-activities-noida"].map((slug) => (
              <Link key={slug} href={`/${slug}`} className="tag hover:bg-electric-100">
                {slug.replace("team-building-activities-", "").replace(/-/g, " ")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site mt-14">
        <h2 className="h-section">Our response time promise</h2>
        <p className="mt-3 text-sm text-navy-800/70">Here's what we commit to — in writing.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-mist p-5">
              <p className="text-sm font-bold text-navy-900">{t}</p>
              <p className="mt-1 text-sm text-navy-800/75">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-6 text-navy-800/80">
          If we miss any of these, the program manager owes you an honest
          explanation. Not a templated apology.
        </p>
      </section>

      <section className="container-site mt-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="h-section">Office hours</h2>
            <div className="prose-site mt-4">
              <p>
                <strong>Monday to Saturday:</strong> 9:30 AM to 7:30 PM IST.
                <br />
                <strong>Sunday:</strong> Closed for new enquiries. Emergency
                support available for live programs.
              </p>
              <p>
                Most of our programs run on weekends. Our on-ground delivery
                teams are fully active even when the office is closed. The
                office hours above apply to new enquiries and proposal
                conversations.
              </p>
            </div>
          </div>
          <div>
            <h2 className="h-section">What we won't do</h2>
            <ul className="mt-4 space-y-3">
              {wontDo.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-navy-800/85">
                  <span className="mt-0.5 text-sunrise-500">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquiry-form" className="container-site mt-16 scroll-mt-24">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-electric-700 p-8 text-white sm:p-12">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Send your brief — get your free proposal
              </h2>
              <p className="mt-3 max-w-md text-sm leading-7 text-white/80">
                A real person replies within 4 working hours. Custom proposal
                within 24 hours of your scoping call.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={site.whatsappHref} className="btn-accent">
                  WhatsApp us
                </a>
                <a href={site.phoneHref} className="btn-secondary !border-white/30 !bg-transparent !text-white hover:!border-white">
                  Call {site.phone}
                </a>
              </div>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      <FAQ items={faqs} />
      <p className="container-site mt-10 text-sm text-navy-800/70">
        Want to read more before reaching out? Browse{" "}
        <Link href="/services" className="font-semibold text-electric-600 hover:underline">
          all our services
        </Link>{" "}
        or our{" "}
        <Link href="/blog" className="font-semibold text-electric-600 hover:underline">
          latest articles on the blog
        </Link>
        .
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, faqJsonLd(faqs)]) }}
      />
    </>
  );
}
