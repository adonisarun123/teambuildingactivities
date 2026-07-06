import type { Activity, ActivityCategory } from "./types";

export type LandingSection = {
  heading: string;
  paragraphs: string[];
};

export type ComparisonTable = {
  caption: string;
  headers: string[];
  rows: string[][];
};

export type CategoryPage = {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  /** Which activities to feature: match by format and/or category tag */
  matchFormat?: Activity["format"];
  matchCategory?: ActivityCategory;
  sections: LandingSection[];
  comparisonTable?: ComparisonTable;
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
};

export type CityPage = {
  slug: string;
  city: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  popularFormats: string[];
  indoorIdeas: string[];
  outdoorIdeas: string[];
  offsiteIdeas: string[];
  groupSizeNote: string;
  sections: LandingSection[];
  faqs: { question: string; answer: string }[];
};
