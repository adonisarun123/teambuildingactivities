// ---------------------------------------------------------------------------
// Central site configuration.
// TODO: Replace the placeholder contact details below before going live.
// Everything else on the site reads from this file — update once, applies
// everywhere.
// ---------------------------------------------------------------------------

export const site = {
  name: "TeamBuildingActivities.in",
  shortName: "Team Building Activities",
  url: "https://teambuildingactivities.in",
  tagline: "Team Building Activities for Corporate Teams in India",
  description:
    "Corporate team building activities designed by experiential learning experts. Outdoor, indoor, virtual & offsite programs delivered across 27+ Indian cities.",

  // Brand facts (from approved site copy)
  stats: {
    yearsExperience: "13+",
    citiesCovered: "27+",
    groupSizes: "10 to 1,500+",
    activitiesLibrary: "200+",
    rebookRate: "87%",
    responseTime: "4 working hours",
    proposalTime: "24 hours",
  },

  // TODO: replace placeholders
  phone: "+91-XXXXXXXXXX",
  phoneHref: "tel:+91XXXXXXXXXX",
  whatsapp: "+91-XXXXXXXXXX",
  whatsappHref:
    "https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%27d%20like%20help%20planning%20a%20team%20building%20activity",
  email: "hello@teambuildingactivities.in",

  cities: [
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Mumbai",
    "Pune",
    "Delhi NCR",
    "Gurgaon",
    "Noida",
  ],
} as const;

export type Site = typeof site;
