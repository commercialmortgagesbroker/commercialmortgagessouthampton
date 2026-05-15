"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { label: "Capital arranged", value: STATS.capitalRaised },
  { label: "Deals completed", value: STATS.dealsCompleted },
  { label: "Lender panel", value: STATS.lenderPanel },
  { label: "Years in market", value: STATS.yearsExperience },
];

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-block border-y border-[color:var(--color-rule)] py-12 md:py-16">
      <div className="container-editorial">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`transition-all duration-700 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <AnimatedCounter
                value={stat.value}
                className="figure-large block"
              />
              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-[color:var(--color-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
