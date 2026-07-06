import { site } from "@/config/site";
import { LeadForm } from "./LeadForm";

export function CTASection({
  heading = "Want this planned for your team?",
  subheading = "Tell us your team size, city and goal — we'll send a custom proposal within 24 hours of your scoping call.",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <section id="enquiry" className="container-site mt-20">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-electric-700 via-electric-600 to-violet-600 p-8 text-white sm:p-12">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{heading}</h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/85">{subheading}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={site.whatsappHref} className="btn-accent">
                WhatsApp us
              </a>
              <a
                href={site.phoneHref}
                className="btn-secondary !border-white/40 !bg-transparent !text-white hover:!border-white"
              >
                Call {site.phone}
              </a>
            </div>
            <ul className="mt-8 space-y-2 text-sm text-white/85">
              <li>✓ A real person replies within 4 working hours</li>
              <li>✓ Custom proposal within 24 hours of your call</li>
              <li>✓ End-to-end facilitation, venues, props and crew</li>
            </ul>
          </div>
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
