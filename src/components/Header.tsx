import Link from "next/link";
import { site } from "@/config/site";

const nav = [
  { href: "/team-building-activities", label: "Activities" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy-900/5 bg-white/90 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric-500 to-electric-700 text-sm font-black text-white">
            TB
          </span>
          <span className="hidden text-sm font-bold tracking-tight text-navy-900 sm:block">
            teambuildingactivities<span className="text-electric-600">.in</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy-800/80 transition hover:text-electric-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={site.whatsappHref}
            className="hidden text-sm font-semibold text-electric-600 hover:text-electric-700 sm:block"
          >
            WhatsApp us
          </a>
          <Link href="/contact-us" className="btn-primary !px-4 !py-2">
            Plan my event
          </Link>
        </div>
      </div>
    </header>
  );
}
