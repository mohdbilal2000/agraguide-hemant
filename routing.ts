/**
 * Slug resolution for the detail routes.
 *
 * Search Console reported /guides/is-Delhi-Safe-for-Tourists alongside the
 * lowercase URL the page is actually linked as. Something off-site linked it
 * with that casing, Google crawled it, and an exact-match `find` missed — so
 * the page rendered its "not found" branch and client-redirected to the index.
 * A client redirect is still an HTTP 200, so Google kept the miscased URL in
 * the index as a second, empty copy of a page that ranks.
 *
 * Matching case-insensitively and then sending the request on to the one
 * spelling we want indexed closes that off: the visitor lands on the real
 * page, and the address bar and canonical agree on a single URL.
 */
export interface SlugMatch<T> {
  /** Undefined when nothing matches under either spelling. */
  item?: T;
  /** False when `item` was only found by ignoring case — redirect in that case. */
  isCanonical: boolean;
}

export function matchBySlug<T>(
  items: readonly T[],
  key: string | undefined,
  slugOf: (item: T) => string,
): SlugMatch<T> {
  if (!key) return { isCanonical: true };

  const exact = items.find((i) => slugOf(i) === key);
  if (exact) return { item: exact, isCanonical: true };

  const lower = key.toLowerCase();
  return { item: items.find((i) => slugOf(i).toLowerCase() === lower), isCanonical: false };
}
