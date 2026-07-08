"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed, Clock, ChefHat } from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { MENU_ITEMS } from "@/constants";
import { formatPrice } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

const categories = ["All", "Starters", "Main Course", "Desserts", "Cocktails", "Wine"];

function MenuCard({
  item,
  index,
}: {
  item: (typeof MENU_ITEMS)[0];
  index: number;
}) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex gap-4 group cursor-pointer"
    >
      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 image-zoom">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
          style={{ backgroundImage: `url(${item.image})` }}
          role="img"
          aria-label={item.name}
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-light text-charcoal group-hover:text-gold transition-colors">
            {item.name}
          </h3>
          <span className="text-gold font-medium whitespace-nowrap">
            {formatPrice(item.price)}
          </span>
        </div>
        <p className="text-sm text-charcoal/60 mt-1 line-clamp-2">
          {item.description}
        </p>
        {item.dietary.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {item.dietary.map((d) => (
              <span
                key={d}
                className="text-[10px] uppercase tracking-wider bg-beige text-charcoal/60 px-2 py-0.5 rounded-full"
              >
                {d}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Restaurant() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <SectionWrapper id="restaurant" className="bg-white">
      <SectionHeader
        title="Fine Dining Experience"
        subtitle="Our signature restaurant offers a culinary journey like no other, where world-class chefs craft extraordinary dishes using the finest locally-sourced ingredients."
      />

      {/* Chef's section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <div
              className="aspect-square bg-cover bg-center"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80)`,
              }}
              role="img"
              aria-label="Executive Chef"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center gap-3">
              <ChefHat size={24} className="text-gold" />
              <div>
                <p className="text-sm font-medium text-charcoal">Chef Antoine</p>
                <p className="text-xs text-charcoal/50">Executive Chef</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-2 text-gold">
            <UtensilsCrossed size={20} />
            <span className="text-sm uppercase tracking-wider">Michelin-Starred</span>
          </div>
          <h3 className="text-3xl font-light text-charcoal">
            A Culinary Masterpiece
          </h3>
          <p className="text-charcoal/70 leading-relaxed">
            Under the direction of Chef Antoine Laurent, our kitchen creates dishes
            that celebrate the finest seasonal ingredients. Each plate is a work of
            art, combining classical techniques with innovative flair.
          </p>
          <div className="flex items-center gap-4 text-sm text-charcoal/60">
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Breakfast: 7AM - 11AM</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>Dinner: 6PM - 11PM</span>
            </div>
          </div>
          <Button variant="gold">Reserve a Table</Button>
        </motion.div>
      </div>

      {/* Menu */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-light text-charcoal">Our Menu</h3>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-charcoal text-white"
                    : "bg-beige text-charcoal/60 hover:bg-charcoal/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredItems.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}