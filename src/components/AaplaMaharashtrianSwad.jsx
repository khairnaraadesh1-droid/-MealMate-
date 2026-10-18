import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { REGIONAL_CATEGORIES } from '../data/regionalCategories';
import {
  Flame,
  Utensils,
  History,
  Sparkles,
  Compass,
  Waves,
  Award,
  Gift,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  Flame,
  Utensils,
  History,
  Sparkles,
  Compass,
  Waves,
  Award,
  Gift
};

export const AaplaMaharashtrianSwad = ({ onSelectCategory }) => {
  const { t, getLocalized } = useLanguage();

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-amber-50/50 via-orange-50/30 to-transparent dark:from-stone-900/50 dark:via-stone-900/20 dark:to-transparent border-y border-stone-200/80 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs sm:text-sm font-semibold mb-3">
            <Flame className="w-4 h-4 text-orange-600 fill-orange-500 animate-pulse" />
            <span>{t('regionalTitle')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight font-serif">
            {t('regionalSubtitle')}
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {REGIONAL_CATEGORIES.map((cat) => {
            const IconComponent = iconMap[cat.iconName] || Utensils;
            const title = getLocalized(cat.title);
            const subtitle = getLocalized(cat.subtitle);
            const badge = getLocalized(cat.badge);

            if (cat.isSpecial) {
              // Highlighted Khandeshi Card
              return (
                <div
                  key={cat.id}
                  className="sm:col-span-2 rounded-2xl bg-gradient-to-br from-amber-600 via-orange-600 to-red-700 text-white p-6 shadow-xl shadow-orange-600/20 relative overflow-hidden flex flex-col justify-between group hover:scale-[1.01] transition-transform border border-orange-400/30"
                >
                  <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute right-4 top-4 opacity-15 group-hover:opacity-25 transition-opacity">
                    <Flame className="w-28 h-28" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 rounded-full bg-black/25 backdrop-blur-md text-amber-200 text-xs font-bold tracking-wide uppercase flex items-center gap-1.5 border border-white/20">
                        <Flame className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                        {badge}
                      </span>
                      <span className="text-xs font-bold text-white/90 bg-white/20 px-2 py-0.5 rounded-md">
                        १ नंबर चव
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 font-serif">
                      {title}
                    </h3>
                    <p className="text-sm text-orange-100/90 leading-relaxed mb-4">
                      {subtitle}
                    </p>

                    {/* Popular dishes tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {cat.popularDishes.map((dish, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-black/20 backdrop-blur-sm text-xs font-medium text-white border border-white/10"
                        >
                          {dish}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/20">
                    <Link
                      to="/khandesh"
                      className="px-4 py-2 rounded-xl bg-white text-orange-700 hover:bg-orange-50 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 group-hover:shadow-lg"
                    >
                      <span>Explore Khandesh Special</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => onSelectCategory && onSelectCategory('khandesh')}
                      className="px-3 py-2 rounded-xl bg-black/25 hover:bg-black/40 text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      Filter Meals
                    </button>
                  </div>
                </div>
              );
            }

            // Standard Regional Cards
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                className="rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-5 shadow-sm hover:shadow-lg hover:border-amber-400 dark:hover:border-amber-600 transition-all flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-stone-800 text-amber-700 dark:text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-stone-500 dark:text-stone-400">
                      {badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed mb-3">
                    {subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs text-amber-600 dark:text-amber-400 font-semibold">
                  <span>{t('btnExploreRegion')}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
