import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePreferences } from '../context/PreferencesContext';
import {
  Sliders,
  Check,
  Plus,
  X,
  Users,
  Flame,
  Clock,
  Sparkles,
  Save
} from 'lucide-react';

export const PreferencesPage = () => {
  const { t } = useLanguage();
  const { preferences, updatePreferences } = usePreferences();

  const [servings, setServings] = useState(preferences.defaultServings || 4);
  const [dietary, setDietary] = useState(preferences.dietary || 'all');
  const [spiceLevel, setSpiceLevel] = useState(preferences.spiceLevel || 'any');
  const [maxTime, setMaxTime] = useState(preferences.maxTime || 'any');
  const [cuisines, setCuisines] = useState(preferences.favoriteCuisines || ['khandesh', 'everyday_maharashtrian']);
  const [excluded, setExcluded] = useState(preferences.excludedIngredients || []);
  const [excludedInput, setExcludedInput] = useState('');

  const toggleCuisine = (cId) => {
    setCuisines(prev =>
      prev.includes(cId) ? prev.filter(c => c !== cId) : [...prev, cId]
    );
  };

  const handleAddExcluded = (e) => {
    e.preventDefault();
    if (!excludedInput.trim()) return;
    const clean = excludedInput.trim();
    if (!excluded.includes(clean)) {
      setExcluded(prev => [...prev, clean]);
    }
    setExcludedInput('');
  };

  const removeExcluded = (item) => {
    setExcluded(prev => prev.filter(i => i !== item));
  };

  const handleSave = () => {
    updatePreferences({
      defaultServings: servings,
      dietary,
      spiceLevel,
      maxTime,
      favoriteCuisines: cuisines,
      excludedIngredients: excluded
    });
  };

  const cuisineOptions = [
    { id: 'khandesh', label: 'खान्देशी खास (Khandesh Special)' },
    { id: 'everyday_maharashtrian', label: 'Everyday Maharashtrian (रोजचे जेवण)' },
    { id: 'traditional', label: 'Traditional Heirloom Recipes (पारंपारिक)' },
    { id: 'vidarbha', label: 'Vidarbha Saoji & Varadi (विदर्भ)' },
    { id: 'konkan', label: 'Konkan Coastal & Malvani (कोकणी)' },
    { id: 'pune_kolhapur', label: 'Pune & Kolhapur (कोल्हापुरी)' },
    { id: 'festive_seasonal', label: 'Festive Sweets & Faral (सण)' },
    { id: 'north_indian', label: 'North Indian' },
    { id: 'south_indian', label: 'South Indian' }
  ];

  return (
    <div className="flex-1 py-8 sm:py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-2">
          <Sliders className="w-3.5 h-3.5" />
          <span>{t('navPreferences')}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-50 font-serif tracking-tight">
          {t('preferencesTitle')}
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
          {t('preferencesSubtitle')}
        </p>
      </div>

      {/* Main Settings Card */}
      <div className="rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm p-6 sm:p-8 space-y-8">
        {/* 1. Default Household Servings */}
        <div>
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
            1. {t('prefDefaultServings')}
          </label>
          <div className="flex items-center gap-3">
            {[2, 3, 4, 6, 8].map(s => (
              <button
                key={s}
                type="button"
                onClick={() => setServings(s)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  servings === s
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
                }`}
              >
                {s} {t('persons')}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Default Dietary Preference */}
        <div>
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
            2. {t('prefDietType')}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { id: 'all', label: t('dietAll') },
              { id: 'veg', label: t('dietVeg') },
              { id: 'vegan', label: t('dietVegan') },
              { id: 'jain', label: t('dietJain') }
            ].map(d => (
              <button
                key={d.id}
                type="button"
                onClick={() => setDietary(d.id)}
                className={`p-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  dietary === d.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Preferred Spice Level */}
        <div>
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
            3. {t('prefSpiceTolerance')}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[
              { id: 'any', label: t('spiceAny') },
              { id: 'mild', label: t('spiceMild') },
              { id: 'medium', label: t('spiceMedium') },
              { id: 'spicy', label: t('spiceSpicy') }
            ].map(sp => (
              <button
                key={sp.id}
                type="button"
                onClick={() => setSpiceLevel(sp.id)}
                className={`p-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  spiceLevel === sp.id
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
                }`}
              >
                {sp.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Preferred Regional Cuisines (Multi-select) */}
        <div>
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
            4. {t('prefFavoriteCuisines')}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {cuisineOptions.map(c => {
              const isSelected = cuisines.includes(c.id);
              return (
                <div
                  key={c.id}
                  onClick={() => toggleCuisine(c.id)}
                  className={`p-3 rounded-2xl border flex items-center justify-between transition-colors cursor-pointer text-xs sm:text-sm font-medium ${
                    isSelected
                      ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200'
                      : 'bg-stone-50 dark:bg-stone-800/50 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100'
                  }`}
                >
                  <span>{c.label}</span>
                  <div
                    className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-amber-600 border-amber-600 text-white'
                        : 'border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. Disliked / Excluded Ingredients */}
        <div>
          <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
            5. {t('prefExcludedIngredients')}
          </label>

          {/* Tags */}
          {excluded.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3 p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700">
              {excluded.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-red-100 dark:bg-red-950/60 text-red-800 dark:text-red-300 text-xs font-semibold"
                >
                  <span>{item}</span>
                  <button
                    type="button"
                    onClick={() => removeExcluded(item)}
                    className="hover:text-red-950"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Add Excluded Input */}
          <form onSubmit={handleAddExcluded} className="flex gap-2">
            <input
              type="text"
              value={excludedInput}
              onChange={(e) => setExcludedInput(e.target.value)}
              placeholder={t('addExcludedPlaceholder')}
              className="flex-1 px-4 py-2.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              disabled={!excludedInput.trim()}
              className="px-4 py-2.5 rounded-xl bg-stone-800 dark:bg-stone-700 hover:bg-stone-900 text-white font-bold text-xs disabled:opacity-50 cursor-pointer"
            >
              Add
            </button>
          </form>
        </div>

        {/* Save Preferences Button */}
        <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex justify-end">
          <button
            onClick={handleSave}
            className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <Save className="w-4 h-4" />
            <span>{t('btnSavePreferences')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
