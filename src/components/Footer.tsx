import Link from "next/link";
import { site } from "@/config/site";
import { categoryPages } from "@/data/category-pages";
import { cityPages } from "@/data/city-pages";

export function Footer() {
  return (
    <footer className="mt-20 bg-navy-950 text-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold">
            teambuildingactivities<span className="text-electric-400">.in</span>
          </p>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Expert-planned corporate team building across India — indoor,
            outdoor and virtual experiences designed around real team outcomes.
          </p>
          <div className="mt-4 space-y-1 text-sm text-white/80">
            <p>
              <a href={site.phoneHref} className="hover:text-electric-400">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-electric-400">
                {site.email}
              </a>
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Activities
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/team-building-activities" className="text-white/80 hover:text-electric-400">
                All team building activities
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-white/80 hover:text-electric-400">
                Our services
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="text-white/80 hover:text-electric-400">
                About us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-white/80 hover:text-electric-400">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="text-white/80 hover:text-electric-400">
                Contact us
              </Link>
            </li>
            {categoryPages.slice(0, 2).map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`} className="text-white/80 hover:text-electric-400">
                  {p.h1}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
            More categories
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {categoryPages.slice(2).map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`} className="text-white/80 hover:text-electric-400">
                  {p.h1}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Cities
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {cityPages.map((p) => (
              <li key={p.slug}>
                <Link href={`/${p.slug}`} className="text-white/80 hover:text-electric-400">
                  Team building in {p.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
