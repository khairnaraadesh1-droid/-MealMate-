import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { usePreferences } from '../context/PreferencesContext';
import { ALL_RECIPES, getRecipeById } from '../data/recipes';
import { WEEKLY_PRESETS } from '../data/weeklyPresets';
import {
  Calendar,
  Sparkles,
  RefreshCw,
  ShoppingCart,
  Shuffle,
  ChevronRight,
  Flame,
  Check,
  X,
  Clock,
  IndianRupee,
  Utensils
} from 'lucide-react';
import confetti from 'canvas-confetti';

const DAYS_KEYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export const PlannerPage = () => {
  const { t, getLocalized } = useLanguage();
  const {
    weeklyPlan,
    updatePlanSlot,
    applyWeeklyPreset,
    exportWeeklyPlanToGrocery,
    showToast
  } = usePreferences();

  // Active view tab: 'weekly' | 'daily'
  const [activeTab, setActiveTab] = useState('weekly');
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  // Swap modal state
  const [swapModal, setSwapModal] = useState(null); // { day, slot, currentRecipeId }

  const dayLabels = {
    monday: t('dayMonday'),
    tuesday: t('dayTuesday'),
    wednesday: t('dayWednesday'),
    thursday: t('dayThursday'),
    friday: t('dayFriday'),
    saturday: t('daySaturday'),
    sunday: t('daySunday')
  };

  // Open swap modal
  const openSwapModal = (day, slot, currentRecipeId) => {
    setSwapModal({ day, slot, currentRecipeId });
  };

  // Close swap modal
  const closeSwapModal = () => {
    setSwapModal(null);
  };

  // Select alternative
  const handleSelectAlternative = (newRecipeId) => {
    if (swapModal) {
      updatePlanSlot(swapModal.day, swapModal.slot, newRecipeId);
      closeSwapModal();
    }
  };

  // Get alternatives for the modal based on slot
  const swapAlternatives = swapModal
    ? ALL_RECIPES.filter(r => {
        const matchesSlot = r.category === swapModal.slot || (r.mealTypes && r.mealTypes.includes(swapModal.slot));
        return matchesSlot && r.id !== swapModal.currentRecipeId;
      }).slice(0, 8)
    : [];

  const handleExportToGrocery = () => {
    exportWeeklyPlanToGrocery();
    try {
      confetti({ particleCount: 30, spread: 70, origin: { y: 0.7 } });
    } catch (e) {}
  };

  return (
    <div className="flex-1 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>{t('plannerTitle')}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-50 font-serif tracking-tight">
            Weekly Meal Planner
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
            {t('plannerSubtitle')}
          </p>
        </div>

        {/* Action: Export to Grocery List */}
        <button
          onClick={handleExportToGrocery}
          className="px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>{t('btnExportGrocery')}</span>
        </button>
      </div>

      {/* Preset Plan Selector Strip */}
      <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm mb-8 space-y-3">
        <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider">
          {t('selectPresetPlan')}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {WEEKLY_PRESETS.map((preset) => {
            const isKhandesh = preset.id === 'khandesh_special_week';
            const presetName = getLocalized(preset.name);
            const presetDesc = getLocalized(preset.description);

            return (
              <button
                key={preset.id}
                onClick={() => applyWeeklyPreset(preset.id)}
                className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isKhandesh
                    ? 'bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-orange-300 dark:border-orange-800 hover:border-orange-500'
                    : 'bg-stone-50 dark:bg-stone-800/50 border-stone-200 dark:border-stone-700 hover:border-emerald-500'
                }`}
              >
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100 mb-1">
                    {isKhandesh && <Flame className="w-4 h-4 text-orange-600 fill-orange-500 shrink-0" />}
                    <span>{presetName}</span>
                  </div>
                  <p className="text-[11px] text-stone-500 line-clamp-2 leading-relaxed">
                    {presetDesc}
                  </p>
                </div>
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-2 block">
                  Click to Apply Plan →
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* View Toggle Tabs */}
      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => setActiveTab('weekly')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === 'weekly'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
          }`}
        >
          {t('tabWeekly')}
        </button>
        <button
          onClick={() => setActiveTab('daily')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            activeTab === 'daily'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
          }`}
        >
          {t('tabDaily')}
        </button>
      </div>

      {/* 7-DAY BOARD VIEW */}
      {activeTab === 'weekly' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {DAYS_KEYS.map((dayKey) => {
              const daySlots = weeklyPlan[dayKey] || {};
              const breakfast = getRecipeById(daySlots.breakfast);
              const lunch = getRecipeById(daySlots.lunch);
              const dinner = getRecipeById(daySlots.dinner);

              return (
                <div
                  key={dayKey}
                  className="rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm overflow-hidden flex flex-col"
                >
                  {/* Day Header */}
                  <div className="px-4 py-3 bg-stone-100 dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700 text-center font-bold text-xs uppercase tracking-wider text-stone-800 dark:text-stone-200 font-serif">
                    {dayLabels[dayKey]}
                  </div>

                  {/* 3 Slots */}
                  <div className="p-3 flex-1 flex flex-col gap-3 justify-between">
                    {/* Breakfast Slot */}
                    <div className="p-2.5 rounded-2xl bg-amber-50/50 dark:bg-stone-800/40 border border-amber-200/50 dark:border-stone-700/60 relative group">
                      <div className="flex items-center justify-between text-[10px] text-amber-800 dark:text-amber-400 font-semibold mb-1">
                        <span>Breakfast</span>
                        <button
                          onClick={() => openSwapModal(dayKey, 'breakfast', breakfast?.id)}
                          className="hover:text-emerald-600 cursor-pointer"
                          title="Swap"
                        >
                          <Shuffle className="w-3 h-3" />
                        </button>
                      </div>
                      {breakfast ? (
                        <Link
                          to={`/recipe/${breakfast.id}`}
                          className="block hover:underline"
                        >
                          <p className="text-xs font-bold text-stone-900 dark:text-stone-100 line-clamp-1">
                            {getLocalized(breakfast.name)}
                          </p>
                          <span className="text-[10px] text-stone-500">
                            ~{(breakfast.prepTime || 0) + (breakfast.cookTime || 0)}m
                          </span>
                        </Link>
                      ) : (
                        <span className="text-xs text-stone-400 italic">Not set</span>
                      )}
                    </div>

                    {/* Lunch Slot */}
                    <div className="p-2.5 rounded-2xl bg-orange-50/50 dark:bg-stone-800/40 border border-orange-200/50 dark:border-stone-700/60 relative group">
                      <div className="flex items-center justify-between text-[10px] text-orange-800 dark:text-orange-400 font-semibold mb-1">
                        <span>Lunch</span>
                        <button
                          onClick={() => openSwapModal(dayKey, 'lunch', lunch?.id)}
                          className="hover:text-emerald-600 cursor-pointer"
                          title="Swap"
                        >
                          <Shuffle className="w-3 h-3" />
                        </button>
                      </div>
                      {lunch ? (
                        <Link
                          to={`/recipe/${lunch.id}`}
                          className="block hover:underline"
                        >
                          <p className="text-xs font-bold text-stone-900 dark:text-stone-100 line-clamp-1">
                            {getLocalized(lunch.name)}
                          </p>
                          <span className="text-[10px] text-stone-500">
                            ~{(lunch.prepTime || 0) + (lunch.cookTime || 0)}m
                          </span>
                        </Link>
                      ) : (
                        <span className="text-xs text-stone-400 italic">Not set</span>
                      )}
                    </div>

                    {/* Dinner Slot */}
                    <div className="p-2.5 rounded-2xl bg-emerald-50/50 dark:bg-stone-800/40 border border-emerald-200/50 dark:border-stone-700/60 relative group">
                      <div className="flex items-center justify-between text-[10px] text-emerald-800 dark:text-emerald-400 font-semibold mb-1">
                        <span>Dinner</span>
                        <button
                          onClick={() => openSwapModal(dayKey, 'dinner', dinner?.id)}
                          className="hover:text-emerald-600 cursor-pointer"
                          title="Swap"
                        >
                          <Shuffle className="w-3 h-3" />
                        </button>
                      </div>
                      {dinner ? (
                        <Link
                          to={`/recipe/${dinner.id}`}
                          className="block hover:underline"
                        >
                          <p className="text-xs font-bold text-stone-900 dark:text-stone-100 line-clamp-1">
                            {getLocalized(dinner.name)}
                          </p>
                          <span className="text-[10px] text-stone-500">
                            ~{(dinner.prepTime || 0) + (dinner.cookTime || 0)}m
                          </span>
                        </Link>
                      ) : (
                        <span className="text-xs text-stone-400 italic">Not set</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* DAILY VIEW (TABS FOR EACH DAY) */}
      {activeTab === 'daily' && (
        <div className="space-y-6">
          {/* Day selection tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {DAYS_KEYS.map((dayKey, i) => (
              <button
                key={dayKey}
                onClick={() => setSelectedDayIndex(i)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedDayIndex === i
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
                }`}
              >
                {dayLabels[dayKey]}
              </button>
            ))}
          </div>

          {/* Active Day Slots Grid */}
          {(() => {
            const activeDayKey = DAYS_KEYS[selectedDayIndex];
            const activeDaySlots = weeklyPlan[activeDayKey] || {};
            const breakfast = getRecipeById(activeDaySlots.breakfast);
            const lunch = getRecipeById(activeDaySlots.lunch);
            const dinner = getRecipeById(activeDaySlots.dinner);

            const slotsData = [
              { key: 'breakfast', label: 'Breakfast', recipe: breakfast },
              { key: 'lunch', label: 'Lunch', recipe: lunch },
              { key: 'dinner', label: 'Dinner', recipe: dinner }
            ];

            return (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {slotsData.map(({ key, label, recipe }) => (
                  <div
                    key={key}
                    className="p-5 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold uppercase text-stone-500 mb-3">
                        <span>{label}</span>
                        <button
                          onClick={() => openSwapModal(activeDayKey, key, recipe?.id)}
                          className="text-emerald-600 hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <Shuffle className="w-3.5 h-3.5" />
                          <span>Swap</span>
                        </button>
                      </div>

                      {recipe ? (
                        <div>
                          <img
                            src={recipe.image}
                            alt={getLocalized(recipe.name)}
                            className="w-full aspect-[16/10] object-cover rounded-2xl mb-3"
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                          <h4 className="font-bold text-base text-stone-900 dark:text-stone-100 mb-1">
                            {getLocalized(recipe.name)}
                          </h4>
                          <p className="text-xs text-stone-500 line-clamp-2 mb-3">
                            {getLocalized(recipe.description)}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-stone-500">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {(recipe.prepTime || 0) + (recipe.cookTime || 0)} mins
                            </span>
                            {recipe.cost && (
                              <span className="flex items-center gap-0.5 font-medium text-emerald-600">
                                <IndianRupee className="w-3.5 h-3.5" />
                                ~{recipe.cost}
                              </span>
                            )}
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm text-stone-400 italic">No recipe assigned</p>
                      )}
                    </div>

                    {recipe && (
                      <Link
                        to={`/recipe/${recipe.id}`}
                        className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-bold text-emerald-600 hover:text-emerald-700"
                      >
                        <span>View Instructions</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      )}

      {/* SWAP MEAL MODAL */}
      {swapModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-lg bg-white dark:bg-stone-900 rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-800 p-6 max-h-[80vh] flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-stone-800">
              <div>
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-serif">
                  {t('swapMealModalTitle')}
                </h3>
                <p className="text-xs text-stone-500">
                  {dayLabels[swapModal.day]} • <span className="capitalize">{swapModal.slot}</span>
                </p>
              </div>
              <button
                onClick={closeSwapModal}
                className="p-1 rounded-full text-stone-400 hover:text-stone-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-2">
              <span className="text-xs font-semibold text-stone-500 block mb-2">
                {t('chooseAlternative')}
              </span>
              {swapAlternatives.map(alt => (
                <button
                  key={alt.id}
                  onClick={() => handleSelectAlternative(alt.id)}
                  className="w-full p-3 rounded-2xl border border-stone-200 dark:border-stone-800 hover:border-emerald-500 text-left flex items-center justify-between gap-3 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={alt.image}
                      alt={getLocalized(alt.name)}
                      className="w-12 h-12 rounded-xl object-cover shrink-0"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div>
                      <h5 className="font-bold text-sm text-stone-900 dark:text-stone-100 group-hover:text-emerald-600">
                        {getLocalized(alt.name)}
                      </h5>
                      <span className="text-xs text-stone-400">
                        ~{(alt.prepTime || 0) + (alt.cookTime || 0)} mins
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    Select
                  </span>
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex justify-end">
              <button
                onClick={closeSwapModal}
                className="px-4 py-2 rounded-xl text-xs font-bold text-stone-600 hover:bg-stone-100 dark:hover:bg-stone-800"
              >
                {t('btnCancel')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
