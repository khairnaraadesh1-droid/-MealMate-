import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePreferences } from '../context/PreferencesContext';
import { ALL_RECIPES, getRecipeById } from '../data/recipes';
import { RecipeCard } from './RecipeCard';
import { RefreshCw, Sparkles, Sunrise, Sun, Sunset, Shuffle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const TodayMealPreview = () => {
  const { t } = useLanguage();
  const { preferences, recordSuggestion, showToast } = usePreferences();

  // Initial suggested state
  const [todayMenu, setTodayMenu] = useState(() => {
    return {
      breakfast: 'kanda-poha',
      lunch: 'khandeshi-shev-bhaji',
      dinner: 'khandeshi-pithla-bhakri'
    };
  });

  const [swapModalSlot, setSwapModalSlot] = useState(null);

  // Helper to get random recipe matching meal category and diet
  const getRandomRecipe = (category, currentId) => {
    let pool = ALL_RECIPES.filter(r => {
      const matchCat = r.category === category || (r.mealTypes && r.mealTypes.includes(category));
      if (!matchCat) return false;
      if (currentId && r.id === currentId) return false;

      // Check diet
      if (preferences.dietary === 'veg' && !(r.dietary === 'veg' || r.dietary === 'vegan' || r.dietary === 'jain')) {
        return false;
      }
      return true;
    });

    if (!pool.length) {
      pool = ALL_RECIPES.filter(r => r.category === category || (r.mealTypes && r.mealTypes.includes(category)));
    }

    return pool[Math.floor(Math.random() * pool.length)] || ALL_RECIPES[0];
  };

  // Generate completely fresh menu
  const generateNewMenu = () => {
    const newBreakfast = getRandomRecipe('breakfast', todayMenu.breakfast);
    const newLunch = getRandomRecipe('lunch', todayMenu.lunch);
    const newDinner = getRandomRecipe('dinner', todayMenu.dinner);

    const newMenu = {
      breakfast: newBreakfast.id,
      lunch: newLunch.id,
      dinner: newDinner.id
    };

    setTodayMenu(newMenu);
    recordSuggestion([newMenu.breakfast, newMenu.lunch, newMenu.dinner]);
    showToast('Generated fresh daily menu! 🍛', 'success');

    // Subtle celebration confetti
    try {
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {
      // ignore
    }
  };

  // Swap an individual slot
  const swapSingleSlot = (slot) => {
    const nextRecipe = getRandomRecipe(slot, todayMenu[slot]);
    setTodayMenu(prev => ({
      ...prev,
      [slot]: nextRecipe.id
    }));
    showToast(`Swapped ${slot} dish!`);
  };

  const breakfastRecipe = getRecipeById(todayMenu.breakfast) || ALL_RECIPES[0];
  const lunchRecipe = getRecipeById(todayMenu.lunch) || ALL_RECIPES[1];
  const dinnerRecipe = getRecipeById(todayMenu.dinner) || ALL_RECIPES[2];

  const slots = [
    {
      key: 'breakfast',
      label: t('slotBreakfast'),
      icon: Sunrise,
      recipe: breakfastRecipe,
      accent: 'from-amber-500 to-orange-500'
    },
    {
      key: 'lunch',
      label: t('slotLunch'),
      icon: Sun,
      recipe: lunchRecipe,
      accent: 'from-orange-500 to-amber-600'
    },
    {
      key: 'dinner',
      label: t('slotDinner'),
      icon: Sunset,
      recipe: dinnerRecipe,
      accent: 'from-emerald-600 to-teal-700'
    }
  ];

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Regenerate Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>{t('todayPreviewTitle')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight font-serif">
              {t('heroTitle')}
            </h2>
          </div>

          <button
            onClick={generateNewMenu}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
          >
            <RefreshCw className="w-4 h-4 animate-spin-reverse" />
            <span>{t('btnRegenerateMenu')}</span>
          </button>
        </div>

        {/* 3 Meal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {slots.map((slot) => {
            const Icon = slot.icon;
            return (
              <div key={slot.key} className="flex flex-col">
                {/* Slot Header Banner */}
                <div className="flex items-center justify-between px-3 py-2 rounded-t-xl bg-stone-100 dark:bg-stone-800 border-x border-t border-stone-200 dark:border-stone-700">
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-stone-800 dark:text-stone-200">
                    <Icon className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>{slot.label}</span>
                  </div>

                  <button
                    onClick={() => swapSingleSlot(slot.key)}
                    className="flex items-center gap-1 text-[11px] font-semibold text-stone-600 dark:text-stone-300 hover:text-emerald-600 dark:hover:text-emerald-400 px-2 py-0.5 rounded bg-white dark:bg-stone-700 shadow-xs hover:shadow transition-all cursor-pointer"
                    title={t('btnSwapDish')}
                  >
                    <Shuffle className="w-3 h-3" />
                    <span>{t('btnSwapDish')}</span>
                  </button>
                </div>

                {/* Recipe Card Component */}
                <div className="flex-1">
                  <RecipeCard recipe={slot.recipe} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
