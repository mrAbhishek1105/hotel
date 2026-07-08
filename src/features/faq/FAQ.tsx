"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { FAQS } from "@/constants";
import { cn } from "@/lib/utils";

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: (typeof FAQS)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={cn(
        "border border-charcoal/10 rounded-xl overflow-hidden transition-all duration-300",
        isOpen && "border-gold/30 bg-white shadow-md"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
        aria-expanded={isOpen}
      >
        <span className="text-charcoal font-medium pr-4">{faq.question}</span>
        <ChevronDown
          size={18}
          className={cn(
            "text-gold transition-transform duration-300 flex-shrink-0",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6">
              <p className="text-charcoal/60 leading-relaxed">{faq.answer}</p>
              <span className="inline-block mt-3 text-xs uppercase tracking-wider text-gold">
                {faq.category}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = [...new Set(FAQS.map((f) => f.category))];

  return (
    <SectionWrapper id="faq" className="bg-white">
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about your stay at Aurora Haven."
      />

      <div className="max-w-3xl mx-auto">
        {/* Search */}
        <div className="relative mb-8">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30"
          />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-beige rounded-xl border border-charcoal/10 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-charcoal placeholder:text-charcoal/30"
            aria-label="Search frequently asked questions"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSearchQuery("")}
            className={cn(
              "px-4 py-2 rounded-full text-sm transition-all",
              !searchQuery
                ? "bg-charcoal text-white"
                : "bg-beige text-charcoal/60 hover:bg-charcoal/10"
            )}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSearchQuery(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-all",
                searchQuery.toLowerCase() === cat.toLowerCase()
                  ? "bg-charcoal text-white"
                  : "bg-beige text-charcoal/60 hover:bg-charcoal/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {filteredFAQs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              index={index}
            />
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <p className="text-center text-charcoal/40 py-12">
            No questions found matching your search.
          </p>
        )}
      </div>
    </SectionWrapper>
  );
}