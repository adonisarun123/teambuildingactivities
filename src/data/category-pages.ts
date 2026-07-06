import type { CategoryPage } from "./landing-types";
import { categoryPages1 } from "./category-pages-1";
import { categoryPages2 } from "./category-pages-2";

export const categoryPages: CategoryPage[] = [...categoryPages1, ...categoryPages2];

export function getCategoryPage(slug: string): CategoryPage | undefined {
  return categoryPages.find((p) => p.slug === slug);
}
