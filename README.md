# teambuildingactivities.co.in

SEO-focused microsite for corporate team building activities in India.
Next.js 14 (App Router) + TypeScript + Tailwind CSS, fully statically generated.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all pages static)
```

## Before going live — required edits

1. **Contact details** — replace placeholders in `src/config/site.ts`
   (phone, WhatsApp number, email). Everything reads from that one file.
2. **Lead form backend** — `src/components/LeadForm.tsx` currently opens a
   pre-filled WhatsApp message. Swap `handleSubmit` for a POST to Formspree,
   a route handler, or your CRM webhook.
3. **Domain** — `site.url` is set to `https://teambuildingactivities.co.in`;
   update if the canonical domain differs.

## Structure

```
src/config/site.ts            # name, contacts, cities — single source of truth
src/data/
  types.ts                    # Activity content model
  activities-*.ts             # 20 activities (outdoor / indoor / virtual)
  category-pages-*.ts         # 10 SEO category landing pages
  city-pages-*.ts             # 8 city landing pages
src/app/
  page.tsx                    # homepage
  team-building-activities/   # listing (+ client-side filters) & [slug] detail pages
  [landing]/page.tsx          # renders all category + city pages (static params)
  sitemap.ts, robots.ts       # SEO infrastructure
src/components/               # header, footer, cards, filters, CTA, FAQ, tables
```

## Adding an activity

Add an object to the matching `src/data/activities-*.ts` file following the
`Activity` type. It automatically appears in the listing, filters, sitemap,
related-activity links and any category page whose format/category matches.

## Roadmap (pass 2)

- `/blog` resource articles (7 planned in the project brief)
- Real enquiry backend + thank-you page
- OG images per page
- Framer Motion micro-interactions
