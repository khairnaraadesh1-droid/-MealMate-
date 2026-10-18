import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { TodayMealPreview } from '../components/TodayMealPreview';
import { AaplaMaharashtrianSwad } from '../components/AaplaMaharashtrianSwad';
import { MealSuggestionEngine } from '../components/MealSuggestionEngine';
import {
  Sparkles,
  Flame,
  ArrowRight,
  Clock,
  Heart,
  ChefHat,
  CheckCircle2,
  Calendar,
  ShoppingCart
} from 'lucide-react';

export const HomePage = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const engineRef = useRef(null);

  const scrollToEngine = () => {
    const el = document.getElementById('meal-engine');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectRegionalCategory = (categoryId) => {
    if (categoryId === 'khandesh') {
      navigate('/khandesh');
    } else {
      navigate(`/discover?cuisine=${categoryId}`);
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 bg-gradient-to-b from-amber-50/60 via-orange-50/20 to-transparent dark:from-stone-900/60 dark:via-stone-900/20 dark:to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Highlight Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-300 text-xs sm:text-sm font-semibold shadow-xs">
                <Flame className="w-4 h-4 text-orange-600 fill-orange-500 animate-pulse" />
                <span>{t('heroBadge')}</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight leading-tight sm:leading-tight font-serif">
                {t('heroTitle')}
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                {t('heroSubtitle')}
              </p>

              {/* Two Main Call-To-Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <button
                  onClick={scrollToEngine}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-base shadow-xl shadow-emerald-600/25 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>{t('heroCtaGenerate')}</span>
                </button>

                <Link
                  to="/discover"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700 font-bold text-base shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
                >
                  <span>{t('heroCtaExplore')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/khandesh"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-950/60 border border-amber-300 dark:border-amber-800 font-bold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Flame className="w-4 h-4 text-orange-600 fill-orange-500" />
                  <span>{t('heroCtaKhandesh')}</span>
                </Link>
              </div>

              {/* Highlights Checklist */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{t('statRecipes')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{t('statKhandeshi')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{t('statLanguages')}</span>
                </div>
              </div>
            </div>

            {/* Right Food Collage & Spotlight Hero Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-stone-800 aspect-[4/3] bg-stone-100 dark:bg-stone-800 group">
                <img
                  src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80"
                  alt="Authentic Maharashtrian Thali and Khandeshi Cuisine"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Glassmorphic floating dish badge 1 */}
                <div className="absolute top-4 left-4 p-3 rounded-2xl glass-card border border-white/40 shadow-lg text-xs max-w-[190px] animate-bounce-short">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="font-bold text-stone-900 dark:text-stone-100">
                      शेव भाजी (Shev Bhaji)
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-600 dark:text-stone-300">
                    झणझणीत काळा मसाला आणि जाड शेव
                  </p>
                </div>

                {/* Glassmorphic floating dish badge 2 */}
                <div className="absolute bottom-4 right-4 p-3 rounded-2xl glass-card border border-white/40 shadow-lg text-xs max-w-[210px]">
                  <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400 font-bold mb-0.5">
                    <Flame className="w-4 h-4 fill-orange-500 text-orange-500" />
                    <span>वांग्याचं भरीत + भाकरी</span>
                  </div>
                  <p className="text-[11px] text-stone-600 dark:text-stone-300">
                    खान्देशची अस्सल पारंपारिक चव
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TODAY'S MEAL PREVIEW SECTION */}
      <TodayMealPreview />

      {/* AAPLA MAHARASHTRIAN SWAD REGIONAL CUISINE SHOWCASE */}
      <AaplaMaharashtrianSwad onSelectCategory={handleSelectRegionalCategory} />

      {/* SMART MEAL SUGGESTION ENGINE SECTION */}
      <div ref={engineRef}>
        <MealSuggestionEngine />
      </div>

      {/* EVERYDAY INDIAN COOKING TIPS & TESTIMONIALS */}
      <section className="py-12 bg-amber-50/40 dark:bg-stone-900/40 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100 font-serif">
              Why Indian Families Love MealMate
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
              Practical, everyday Indian meal planning built for real kitchens and busy schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-stone-700 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                <ChefHat className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100 mb-1">
                Zero Kitchen Guesswork
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                "No more opening the fridge and wondering what to make. I just tick potatoes, onions, and besan, and get 4 quick traditional options!"
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-stone-700 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-3">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100 mb-1">
                Authentic Khandeshi Flavors
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                "Finally a platform that gives authentic Khandeshi Shev Bhaji and Vangyache Bharit the royal spotlight they truly deserve!"
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-stone-700 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100 mb-1">
                Smart Grocery List
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                "Plans 7 days of meals and auto-combines my onions and dals into one neat WhatsApp shopping list. Huge weekly time saver."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
