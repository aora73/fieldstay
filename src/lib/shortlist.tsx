import { useCallback, useEffect, useState } from "react";

const KEY = "fieldstay-shortlist";

export function useShortlist() {
  const [slugs, setSlugs] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as unknown;
        if (Array.isArray(parsed) && parsed.every((item) => typeof item === "string")) {
          setSlugs(parsed);
        }
      }
    } catch {
      /* ignore broken local storage */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(KEY, JSON.stringify(slugs));
  }, [slugs, ready]);

  const toggle = useCallback((slug: string) => {
    setSlugs((current) =>
      current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug],
    );
  }, []);

  const clear = useCallback(() => setSlugs([]), []);

  return { slugs, ready, toggle, clear, has: (slug: string) => slugs.includes(slug) };
}
