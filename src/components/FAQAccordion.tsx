"use client";

import { useState, useRef, useEffect } from "react";
import { SchemaInjector } from "./SchemaInjector";
import { generateFAQSchema } from "@/lib/schema";

interface FAQItem {
  question: string;
  answer: string;
}

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow duration-200 hover:shadow-sm">
      <button
        className="flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="pr-4 font-heading text-base font-bold text-primary md:text-lg">
          {faq.question}
        </span>
        <div
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen ? "bg-secondary/10 rotate-180" : "bg-gray-100"
          }`}
        >
          <svg
            className={`h-4 w-4 transition-colors duration-300 ${
              isOpen ? "text-secondary" : "text-gray-500"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      <div
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div ref={contentRef}>
          <div className="border-t border-gray-100 px-6 py-5">
            <div
              className="prose prose-sm max-w-none text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <SchemaInjector schema={generateFAQSchema(faqs)} />
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </>
  );
}
