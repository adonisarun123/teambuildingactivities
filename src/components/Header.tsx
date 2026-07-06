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

        {/* Search */}
        <form
          action="/team-building-activities"
          method="GET"
          className="relative hidden flex-1 md:block md:max-w-md"
          role="search"
        >
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-800/50" aria-hidden>
            🔍
          </span>
          <input
            type="search"
            name="q"
            placeholder="Search activities, formats, goals…"
            aria-label="Search activities"
            className="w-full rounded-xl border border-navy-900/10 bg-mist py-2.5 pl-11 pr-4 text-sm font-medium text-navy-900 placeholder-navy-800/50 transition focus:border-electric-500 focus:bg-white focus:outline-none"
          />
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
      <div className="border-t border-navy-900/5 px-4 py-2 md:hidden">
        <form action="/team-building-activities" method="GET" role="search">
          <input
            type="search"
            name="q"
            placeholder="Search activities…"
            aria-label="Search activities"
            className="w-full rounded-xl border border-navy-900/10 bg-mist px-4 py-2 text-sm font-medium text-navy-900 placeholder-navy-800/50 focus:border-electric-500 focus:bg-white focus:outline-none"
          />
        </form>
      </div>
    </header>
  );
}
