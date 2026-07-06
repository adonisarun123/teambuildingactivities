import Link from "next/link";
import { site } from "@/config/site";
import { categoryPages } from "@/data/category-pages";
import { cityPages } from "@/data/city-pages";

const company = [
  { href: "/team-building-activities", label: "All activities" },
  { href: "/services", label: "Our services" },
  { href: "/about-us", label: "About us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact us" },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-navy-900/10 bg-mist">
      <div className="container-site grid gap-10 py-14 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="text-lg font-extrabold text-navy-900">
            teambuildingactivities<span className="text-electric-600">.in</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-navy-800/80">
            Facilitator-led corporate team building across 27+ Indian cities.
            Designed around the debrief — because that's where behaviour
            actually changes.
          </p>
          <div className="mt-4 space-y-1 text-sm font-semibold text-navy-800">
            <p>
              <a href={site.phoneHref} className="hover:text-electric-600">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-electric-600">
                {site.email}
              </a>
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-widest text-navy-800/50">
            Company
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-navy-800/85 hover:text-electric-600">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-widest text-navy-800/50">
            Categories
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {categoryPages.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`} className="text-navy-800/85 hover:text-electric-600">
                  {p.h1}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-widest text-navy-800/50">
            Cities
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {cityPages.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`} className="text-navy-800/85 hover:text-electric-600">
                  {p.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-900/10 py-5 text-center text-xs text-navy-800/60">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
