import type { Metadata } from "next";
import { activities } from "@/data/activities";
import { ActivityExplorer } from "@/components/ActivityExplorer";
import { CTASection } from "@/components/CTASection";
import { FAQ, faqJsonLd } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "All Team Building Activities — Indoor, Outdoor & Virtual",
  description:
    "Browse every corporate team building activity — filter by format, energy level and team goal. Treasure hunts, drum circles, escape rooms, raft builds and more, planned end to end across India.",
  alternates: { canonical: "/team-building-activities" },
};

const faqs = [
  {
    question: "How are these activities different from generic party games?",
    answer:
      "Each format is facilitated and outcome-mapped: it targets specific team behaviours (communication, handoffs, iteration, trust) and includes debrief structures that transfer the experience into working habits.",
  },
  {
    question: "Can multiple activities be combined into one event day?",
    answer:
      "That's the recommended pattern for offsites — a mixing activity in the morning, a challenge anchor after lunch and a fun tournament to close. We design the arc so energy rises through the day.",
  },
  {
    question: "Do you customise activities to our company?",
    answer:
      "Yes — treasure hunt clues, trivia rounds, gameshow challenges and film briefs all take company theming, which consistently doubles engagement versus generic versions.",
  },
  {
    question: "What's included in the pricing?",
    answer:
      "Facilitation, props, crew and event management are standard; venues, catering and transport are added per your brief. Enquire with your headcount and city for a complete quote.",
  },
];

export default function ActivitiesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white">
        <div className="container-site py-14">
          <h1 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            All Team Building Activities
          </h1>
          <p className="mt-4 max-w-3xl text-[15px] leading-7 text-navy-800/80">
            Every activity we plan and facilitate, in one place. Filter by
            format, energy level and the outcome you're chasing — or search for
            something specific. Each activity page covers how it works
            step-by-step, group sizes, durations, materials, facilitator notes
            and variations, so you know exactly what you're booking before you
            talk to us.
          </p>
        </div>
      </section>
      <section className="container-site mt-4">
        <ActivityExplorer activities={activities} />
      </section>
      <FAQ items={faqs} />
      <CTASection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
    </>
  );
}
