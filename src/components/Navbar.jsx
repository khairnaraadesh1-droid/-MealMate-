import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { usePreferences } from '../context/PreferencesContext';
import {
  UtensilsCrossed,
  Flame,
  Search,
  Calendar,
  ShoppingCart,
  Heart,
  Sliders,
  Sparkles,
  Sun,
  Moon,
  Menu,
  X,
  Globe,
  ChevronDown
} from 'lucide-react';

export const Navbar = ({ onOpenAiAssistant }) => {
  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const { favorites, groceryList } = usePreferences();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'mr', label: 'मराठी', flag: '🇮🇳' },
    { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' }
  ];

  const currentLangObj = languages.find(l => l.code === language) || languages[0];

  const unpurchasedGroceryCount = groceryList.filter(item => !item.checked).length;

  return (
    <header className="sticky top-0 z-40 w-full glass-nav border-b border-stone-200/80 dark:border-stone-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-none"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-orange-500 to-emerald-600 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
            <UtensilsCrossed className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight text-stone-900 dark:text-stone-50 font-serif">
                MealMate
              </span>
              <span className="font-extrabold text-sm px-1.5 py-0.5 rounded-md bg-emerald-600 text-white tracking-wider">
                INDIA
              </span>
            </div>
            <p className="text-[11px] text-amber-700 dark:text-amber-400 font-medium tracking-wide flex items-center gap-1">
              <Flame className="w-3 h-3 text-orange-600 inline" />
              <span>खास खान्देशी व महाराष्ट्रीयन चव</span>
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link
            to="/"
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive('/')
                ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 font-semibold'
                : 'text-stone-700 dark:text-stone-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-stone-100 dark:hover:bg-stone-800/60'
            }`}
          >
            {t('navHome')}
          </Link>

          {/* Highlighted Khandesh Special Link */}
          <Link
            to="/khandesh"
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 ${
              isActive('/khandesh')
                ? 'text-amber-700 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-950/50 shadow-sm border border-amber-300/50 dark:border-amber-700/50'
                : 'text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30'
            }`}
          >
            <Flame className="w-4 h-4 text-orange-600 fill-orange-500 animate-pulse" />
            <span>{t('navKhandesh')}</span>
            <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-orange-600 text-white ml-0.5">
              खास
            </span>
          </Link>

          <Link
            to="/discover"
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive('/discover')
                ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 font-semibold'
                : 'text-stone-700 dark:text-stone-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-stone-100 dark:hover:bg-stone-800/60'
            }`}
          >
            {t('navDiscover')}
          </Link>

          <Link
            to="/planner"
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive('/planner')
                ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 font-semibold'
                : 'text-stone-700 dark:text-stone-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-stone-100 dark:hover:bg-stone-800/60'
            }`}
          >
            {t('navPlanner')}
          </Link>

          <Link
            to="/grocery-list"
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors relative flex items-center gap-1 ${
              isActive('/grocery-list')
                ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 font-semibold'
                : 'text-stone-700 dark:text-stone-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-stone-100 dark:hover:bg-stone-800/60'
            }`}
          >
            <span>{t('navGrocery')}</span>
            {unpurchasedGroceryCount > 0 && (
              <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-emerald-600 rounded-full">
                {unpurchasedGroceryCount}
              </span>
            )}
          </Link>

          <Link
            to="/favorites"
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors relative flex items-center gap-1 ${
              isActive('/favorites')
                ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 font-semibold'
                : 'text-stone-700 dark:text-stone-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-stone-100 dark:hover:bg-stone-800/60'
            }`}
          >
            <Heart className={`w-4 h-4 ${favorites.length > 0 ? 'text-red-500 fill-red-500' : ''}`} />
            <span>{t('navFavorites')}</span>
            {favorites.length > 0 && (
              <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                {favorites.length}
              </span>
            )}
          </Link>
        </nav>

        {/* Right Tools: Language, Theme, AI, Preferences */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Ask AI Button */}
          <button
            onClick={onOpenAiAssistant}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-medium text-xs sm:text-sm shadow-md shadow-orange-500/20 active:scale-95 transition-all cursor-pointer"
            title="Ask MealMate AI"
          >
            <Sparkles className="w-4 h-4 animate-spin-slow" />
            <span className="hidden sm:inline">{t('navAskAi')}</span>
            <span className="sm:hidden">AI</span>
          </button>

          {/* Multilingual Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-stone-200 dark:border-stone-700 bg-white/70 dark:bg-stone-800/70 text-xs sm:text-sm font-medium hover:border-emerald-500 dark:hover:border-emerald-400 transition-colors cursor-pointer"
              title="Select Language"
            >
              <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{currentLangObj.flag}</span>
              <span className="font-semibold text-stone-800 dark:text-stone-200 hidden sm:inline">{currentLangObj.label}</span>
              <ChevronDown className="w-3.5 h-3.5 text-stone-500" />
            </button>

            {langDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-44 rounded-xl bg-white dark:bg-stone-800 shadow-xl border border-stone-200 dark:border-stone-700 py-1.5 z-50 animate-fade-in"
                onClick={() => setLangDropdownOpen(false)}
              >
                <div className="px-3 py-1 text-[11px] font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-wider">
                  Select Language
                </div>
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={`w-full text-left px-3 py-2 text-sm flex items-center justify-between transition-colors ${
                      language === l.code
                        ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 font-semibold'
                        : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700/50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base">{l.flag}</span>
                      <span>{l.label}</span>
                    </div>
                    {language === l.code && <span className="text-xs text-emerald-600 font-bold">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-stone-200 dark:border-stone-700 bg-white/70 dark:bg-stone-800/70 text-stone-700 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer"
            title={isDark ? t('light') : t('dark')}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-600" />}
          </button>

          {/* User Preferences Shortcut */}
          <Link
            to="/preferences"
            className="p-2 rounded-lg border border-stone-200 dark:border-stone-700 bg-white/70 dark:bg-stone-800/70 text-stone-700 dark:text-stone-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors hidden sm:block"
            title={t('navPreferences')}
          >
            <Sliders className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg lg:hidden text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            title="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-1.5 shadow-xl animate-fade-in">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
              isActive('/')
                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-semibold'
                : 'text-stone-800 dark:text-stone-200'
            }`}
          >
            {t('navHome')}
          </Link>

          <Link
            to="/khandesh"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold ${
              isActive('/khandesh')
                ? 'bg-amber-100/80 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700'
                : 'text-amber-700 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-950/20'
            }`}
          >
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-600 fill-orange-500" />
              <span>{t('navKhandesh')}</span>
            </div>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-orange-600 text-white">
              खास खान्देशी
            </span>
          </Link>

          <Link
            to="/discover"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
              isActive('/discover')
                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-semibold'
                : 'text-stone-800 dark:text-stone-200'
            }`}
          >
            {t('navDiscover')}
          </Link>

          <Link
            to="/planner"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
              isActive('/planner')
                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-semibold'
                : 'text-stone-800 dark:text-stone-200'
            }`}
          >
            {t('navPlanner')}
          </Link>

          <Link
            to="/grocery-list"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium ${
              isActive('/grocery-list')
                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-semibold'
                : 'text-stone-800 dark:text-stone-200'
            }`}
          >
            <span>{t('navGrocery')}</span>
            {unpurchasedGroceryCount > 0 && (
              <span className="px-2 py-0.5 text-xs font-bold text-white bg-emerald-600 rounded-full">
                {unpurchasedGroceryCount}
              </span>
            )}
          </Link>

          <Link
            to="/favorites"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium ${
              isActive('/favorites')
                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-semibold'
                : 'text-stone-800 dark:text-stone-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <Heart className={`w-4 h-4 ${favorites.length > 0 ? 'text-red-500 fill-red-500' : ''}`} />
              <span>{t('navFavorites')}</span>
            </div>
            {favorites.length > 0 && (
              <span className="px-2 py-0.5 text-xs font-bold text-white bg-red-500 rounded-full">
                {favorites.length}
              </span>
            )}
          </Link>

          <Link
            to="/preferences"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
              isActive('/preferences')
                ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-semibold'
                : 'text-stone-800 dark:text-stone-200'
            }`}
          >
            {t('navPreferences')}
          </Link>
        </div>
      )}
    </header>
  );
};
