"use client";

import { useEffect, useState } from "react";
import { Icon, type IconName } from "./icons";

export type RailItem = { id: string; label: string; icon: IconName };

// Section links; marks the section in view with aria-current so the yellow disc follows scrolling.
export default function Rail({ items, label }: { items: RailItem[]; label: string }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    // The active section is the last one whose top has passed 35% of the viewport;
    // at the very bottom the last section wins, since a short one never gets that far.
    function update() {
      const line = window.innerHeight * 0.35;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current = sections[0];
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= line) current = s;
      }
      if (atBottom) current = sections[sections.length - 1];
      if (current) setActive(current.id);
    }

    // at most one layout read per frame, however many scroll events arrive
    let frame = 0;
    function schedule() {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    }

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [items]);

  return (
    <nav className="rail__nav" aria-label={label}>
      <ul className="rail__list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              className="rail__link"
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
              onClick={() => setActive(item.id)}
            >
              <Icon name={item.icon} />
              <span className="rail__label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
