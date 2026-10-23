"use client";

import { useEffect, useState } from "react";

export type TocEntry = { id: string; label: string };

/**
 * Sticky article ToC for CallCenterOutsourced.
 *
 * The wrapper is the sticky element. On desktop it shows a compact two-column
 * nav; on mobile it collapses into a sticky details panel. The parent article
 * column is full height, so the panel remains visible while the article scrolls.
 */
export function ArticleToc({ entries }: { entries: TocEntry[] }) {
  const [active, setActive] = useState(entries[0]?.id ?? "");

  useEffect(() => {
    const nodes = entries
      .map((entry) => document.getElementById(entry.id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;
    const observer = new IntersectionObserver(
      (records) => {
        const visible = records
          .filter((record) => record.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-96px 0px -66% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [entries]);

  if (!entries.length) return null;

  const links = (
    <ol>
      {entries.map((entry) => (
        <li key={entry.id}>
          <a
            href={`#${entry.id}`}
            aria-current={active === entry.id ? "location" : undefined}
          >
            {entry.label}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <div className="cct-toc" aria-label="On this page">
      <details className="cct-toc-mobile">
        <summary>On this page</summary>
        {links}
      </details>
      <nav className="cct-toc-desktop" aria-label="On this page">
        <strong>On this page</strong>
        {links}
      </nav>
    </div>
  );
}
