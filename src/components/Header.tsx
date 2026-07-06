import Link from "next/link";
import { site } from "@/config/site";

const nav = [
  { href: "/team-building-activities", label: "Activities" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-header">
      <div className="container-site flex h-16 items-center gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-electric-600 text-sm font-extrabold text-white">
            tb
          </span>
          <span className="hidden text-[15px] font-extrabold tracking-tight text-navy-900 lg:block">
            teambuildingactivities<span className="text-electric-600">.in</span>
          </span>
        </Link>

        {/* Search — Airbnb-style pill */}
        <form
          action="/team-building-activities"
          method="GET"
          className="relative hidden flex-1 md:mx-auto md:block md:max-w-sm"
          role="search"
        >
          <input
            type="search"
            name="q"
            placeholder="Search activities, formats, goals…"
            aria-label="Search activities"
            className="w-full rounded-full border border-navy-900/10 bg-white py-2.5 pl-5 pr-12 text-sm font-medium text-navy-900 placeholder-navy-800/50 shadow-card transition focus:border-electric-500 focus:shadow-lift focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute right-1.5 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-electric-600 text-sm text-white transition hover:bg-electric-700"
          >
            🔍
          </button>
        </form>

        <nav className="ml-auto hidden items-center gap-6 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-navy-800 transition hover:text-electric-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3 md:ml-0">
          <a
            href={site.whatsappHref}
            className="hidden text-sm font-bold text-electric-600 hover:text-electric-700 sm:block"
          >
            WhatsApp
          </a>
          <Link href="/contact-us" className="btn-primary !px-4 !py-2">
            Plan my event
          </Link>
        </div>
      </div>
      {/* Mobile search */}
      <div className="px-4 pb-3 md:hidden">
        <form action="/team-building-activities" method="GET" role="search" className="relative">
          <input
            type="search"
            name="q"
            placeholder="Search activities…"
            aria-label="Search activities"
            className="w-full rounded-full border border-navy-900/10 bg-white py-2.5 pl-5 pr-12 text-sm font-medium text-navy-900 placeholder-navy-800/50 shadow-card focus:border-electric-500 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute right-1.5 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-electric-600 text-sm text-white"
          >
            🔍
          </button>
        </form>
      </div>
    </header>
  );
}
