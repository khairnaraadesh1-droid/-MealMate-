import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { UtensilsCrossed, Flame, Heart, Globe, Sparkles } from 'lucide-react';

export const Footer = () => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <footer className="w-full bg-stone-900 text-stone-300 border-t border-stone-800 pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 to-orange-500 flex items-center justify-center text-white shadow-md">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-white font-serif tracking-tight">
                MealMate India
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              {t('brandTagline')} — {t('brandSubtitle')}. Solving the daily question of "What should we cook today?" with authentic homemade Indian recipes.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-amber-400">
              <Flame className="w-4 h-4 fill-amber-400 inline" />
              <span>खान्‍देश आणि महाराष्ट्राची पारंपारिक चव</span>
            </div>
          </div>

          {/* Regional Cuisines Col */}
          <div className="space-y-2.5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">
              Regional Specialties
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>
                <Link to="/khandesh" className="hover:text-amber-400 flex items-center gap-1.5 transition-colors">
                  <Flame className="w-3 h-3 text-orange-500 inline" />
                  <span className="font-semibold text-amber-300">Khandeshi Special (खान्देशी खास)</span>
                </Link>
              </li>
              <li>
                <Link to="/discover?cuisine=everyday_maharashtrian" className="hover:text-emerald-400 transition-colors">
                  Everyday Maharashtrian (वरण भात, उसळ)
                </Link>
              </li>
              <li>
                <Link to="/discover?cuisine=traditional" className="hover:text-emerald-400 transition-colors">
                  Traditional Recipes (थालीपीठ, धिरडे)
                </Link>
              </li>
              <li>
                <Link to="/discover?cuisine=vidarbha" className="hover:text-emerald-400 transition-colors">
                  Vidarbha Saoji & Tarri Poha (विदर्भ)
                </Link>
              </li>
              <li>
                <Link to="/discover?cuisine=konkan" className="hover:text-emerald-400 transition-colors">
                  Konkan Coastal & Solkadhi (कोकणी)
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Tools Col */}
          <div className="space-y-2.5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">
              Planning Tools
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>
                <Link to="/#meal-engine" className="hover:text-emerald-400 transition-colors">
                  Smart Ingredient Recommender
                </Link>
              </li>
              <li>
                <Link to="/planner" className="hover:text-emerald-400 transition-colors">
                  7-Day Weekly Meal Planner
                </Link>
              </li>
              <li>
                <Link to="/grocery-list" className="hover:text-emerald-400 transition-colors">
                  Smart Grocery Shopping List
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="hover:text-emerald-400 transition-colors">
                  Saved Family Favorites
                </Link>
              </li>
              <li>
                <Link to="/preferences" className="hover:text-emerald-400 transition-colors">
                  Dietary & Kitchen Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Languages & Mission Col */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif">
              Multilingual Experience
            </h4>
            <p className="text-xs text-stone-400">
              Fully translated and accessible in three languages for Indian home chefs:
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                  language === 'en' ? 'bg-emerald-600 text-white' : 'bg-stone-800 text-stone-400 hover:text-white'
                }`}
              >
                🇬🇧 English
              </button>
              <button
                onClick={() => setLanguage('mr')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                  language === 'mr' ? 'bg-emerald-600 text-white' : 'bg-stone-800 text-stone-400 hover:text-white'
                }`}
              >
                🇮🇳 मराठी
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                  language === 'hi' ? 'bg-emerald-600 text-white' : 'bg-stone-800 text-stone-400 hover:text-white'
                }`}
              >
                🇮🇳 हिन्दी
              </button>
            </div>
            <div className="text-[11px] text-stone-500 pt-1">
              Noto Sans Devanagari Unicode Certified
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <p>
            © {new Date().getFullYear()} MealMate India. Built with passion for everyday Indian kitchens.
          </p>
          <div className="flex items-center gap-1.5 text-stone-400">
            <span>AI Application & Full-Stack Engineering Portfolio Project</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};
