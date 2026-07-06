import type { CityPage } from "./landing-types";
import { cityPages1 } from "./city-pages-1";
import { cityPages2 } from "./city-pages-2";

export const cityPages: CityPage[] = [...cityPages1, ...cityPages2];

export function getCityPage(slug: string): CityPage | undefined {
  return cityPages.find((p) => p.slug === slug);
}
