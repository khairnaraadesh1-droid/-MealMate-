import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getKhandeshiRecipes } from '../data/recipes';
import { RecipeCard } from '../components/RecipeCard';
import {
  Flame,
  Sparkles,
  Utensils,
  BookOpen,
  CheckCircle2,
  Filter,
  Search,
  ArrowRight
} from 'lucide-react';

export const KhandeshPage = () => {
  const { t, getLocalized } = useLanguage();
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const khandeshiRecipes = useMemo(() => {
    return getKhandeshiRecipes();
  }, []);

  const filteredRecipes = useMemo(() => {
    return khandeshiRecipes.filter(recipe => {
      // Category filter
      if (selectedSubcategory !== 'all') {
        if (selectedSubcategory === 'breakfast' && recipe.category !== 'breakfast') return false;
        if (selectedSubcategory === 'lunch' && recipe.category !== 'lunch') return false;
        if (selectedSubcategory === 'dinner' && recipe.category !== 'dinner') return false;
        if (selectedSubcategory === 'accompaniment' && recipe.category !== 'accompaniment') return false;
        if (selectedSubcategory === 'curries' && !recipe.name.en.toLowerCase().includes('rassa') && !recipe.name.en.toLowerCase().includes('bhaji') && !recipe.name.en.toLowerCase().includes('curry')) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const enName = (recipe.name?.en || (typeof recipe.name === 'string' ? recipe.name : '')).toLowerCase();
        const mrName = (recipe.name?.mr || '').toLowerCase();
        const hiName = (recipe.name?.hi || '').toLowerCase();
        const translit = (recipe.transliteration || '').toLowerCase();
        const aliases = (recipe.searchAliases || []).join(' ').toLowerCase();

        const matches = enName.includes(q) || mrName.includes(q) || hiName.includes(q) || translit.includes(q) || aliases.includes(q);
        if (!matches) return false;
      }

      return true;
    });
  }, [khandeshiRecipes, selectedSubcategory, searchQuery]);

  return (
    <div className="flex-1 flex flex-col">
      {/* KHANDESH HERO BANNER */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-br from-amber-700 via-orange-600 to-red-800 text-white overflow-hidden shadow-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
          <Flame className="w-96 h-96" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-amber-200 text-xs sm:text-sm font-bold">
              <Flame className="w-4 h-4 fill-amber-300 text-amber-300 animate-pulse" />
              <span>{t('khandeshIntroBadge')}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif">
              {t('khandeshHeroTitle')}
            </h1>

            <p className="text-base sm:text-lg text-orange-100/90 leading-relaxed max-w-2xl">
              {t('khandeshHeroSubtitle')}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold">
                अस्सल काळा मसाला
              </span>
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold">
                काटेरी वांग्याचं भरीत
              </span>
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold">
                झणझणीत शेव भाजी
              </span>
              <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-semibold">
                हातावर थापलेली भाकरी
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CULTURAL SPOTLIGHT: KALA MASALA SECRETS & AUTHENTIC PAIRINGS */}
      <section className="py-10 bg-amber-50/50 dark:bg-stone-900/50 border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: The Kala Masala Secret */}
            <div className="p-6 rounded-3xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-bold text-sm">
                <BookOpen className="w-4 h-4" />
                <span>{t('kalaMasalaSectionTitle')}</span>
              </div>
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 font-serif">
                What Makes Khandeshi Food Unique?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                {t('kalaMasalaSectionDesc')}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Made with iron-tawa roasted whole spices, dry coconut & black stone flower</span>
              </div>
            </div>

            {/* Right: Authentic Pairings Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-orange-500/10 via-amber-500/10 to-transparent border border-orange-200 dark:border-orange-900/50 space-y-3">
              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-sm">
                <Flame className="w-4 h-4 fill-orange-500 text-orange-500" />
                <span>{t('traditionalPairingsTitle')}</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>{t('pairing1')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>{t('pairing2')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>{t('pairing3')}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>{t('pairing4')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RECIPE COLLECTION SECTION */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Controls: Search & Subcategory filter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Subcategory Pills */}
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'all', label: 'All Khandeshi' },
              { id: 'curries', label: 'Kala Masala Curries' },
              { id: 'lunch', label: 'Lunch Specials' },
              { id: 'dinner', label: 'Dinner' },
              { id: 'breakfast', label: 'Breakfast & Snacks' },
              { id: 'accompaniment', label: 'Thecha & Bhakri' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedSubcategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedSubcategory === cat.id
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Shev Bhaji, Bharit, Thecha..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Recipes Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-3xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700">
            <Flame className="w-12 h-12 text-stone-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-stone-800 dark:text-stone-200 mb-1">
              No matching Khandeshi dishes found
            </h3>
            <p className="text-xs text-stone-500">
              Try adjusting your search terms or filters.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};
