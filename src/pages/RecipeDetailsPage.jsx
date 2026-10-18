import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { usePreferences } from '../context/PreferencesContext';
import { getRecipeById } from '../data/recipes';
import {
  Clock,
  IndianRupee,
  Flame,
  Heart,
  ShoppingCart,
  Printer,
  Share2,
  ArrowLeft,
  Check,
  ChefHat,
  Users,
  AlertTriangle,
  Lightbulb,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const RecipeDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, getLocalized, language } = useLanguage();
  const { isFavorite, toggleFavorite, addIngredientsToGrocery, showToast } = usePreferences();

  const recipe = useMemo(() => {
    return getRecipeById(id);
  }, [id]);

  // Dynamic Serving Scaler (default from recipe, usually 2, 3 or 4)
  const defaultServings = recipe?.servings || 4;
  const [servings, setServings] = useState(defaultServings);

  // Ingredient checklist (which ones user already has in kitchen)
  const [checkedIngredients, setCheckedIngredients] = useState({});

  // Completed steps tracker
  const [completedSteps, setCompletedSteps] = useState({});

  if (!recipe) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <ChefHat className="w-16 h-16 text-stone-400 mb-3" />
        <h2 className="text-xl font-bold text-stone-800 dark:text-stone-200 mb-2">
          Recipe Not Found
        </h2>
        <p className="text-sm text-stone-500 mb-6">
          The requested recipe could not be found or may have been updated.
        </p>
        <Link
          to="/discover"
          className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md"
        >
          Browse All Recipes
        </Link>
      </div>
    );
  }

  const localizedName = getLocalized(recipe.name);
  const localizedDesc = getLocalized(recipe.description);
  const favorite = isFavorite(recipe.id);
  const multiplier = servings / defaultServings;

  const toggleIngredientCheck = (idx) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const toggleStepCheck = (stepNum) => {
    setCompletedSteps(prev => ({
      ...prev,
      [stepNum]: !prev[stepNum]
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast(t('copiedToClipboard'), 'success');
    }
  };

  const handleAddAllToGrocery = () => {
    addIngredientsToGrocery(recipe.ingredients, multiplier);
    try {
      confetti({ particleCount: 20, spread: 50, origin: { y: 0.8 } });
    } catch (e) {}
  };

  const totalTime = (recipe.prepTime || 0) + (recipe.cookTime || 0);

  return (
    <div className="flex-1 py-6 sm:py-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full print-page">
      {/* Back button and quick actions */}
      <div className="flex items-center justify-between gap-4 mb-6 no-print">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-600 dark:text-stone-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('recipeBackToRecipes')}</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleFavorite(recipe.id)}
            className={`p-2.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 shadow-xs hover:border-red-400 transition-all cursor-pointer ${
              favorite ? 'text-red-500 fill-red-500' : 'text-stone-500'
            }`}
            title={favorite ? t('btnInFavorites') : t('btnAddToFavorites')}
          >
            <Heart className={`w-4 h-4 ${favorite ? 'fill-red-500' : ''}`} />
          </button>

          <button
            onClick={handleShare}
            className="p-2.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:text-emerald-600 transition-colors cursor-pointer"
            title={t('btnShare')}
          >
            <Share2 className="w-4 h-4" />
          </button>

          <button
            onClick={handlePrint}
            className="p-2.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:text-emerald-600 transition-colors cursor-pointer print-allow"
            title={t('btnPrintRecipe')}
          >
            <Printer className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hero Dish Card */}
      <div className="rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-md overflow-hidden mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Dish Image */}
          <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto min-h-[260px] bg-stone-100 dark:bg-stone-800">
            <img
              src={recipe.image}
              alt={localizedName}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80';
              }}
            />

            {/* Badges Overlay */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {recipe.isKhandeshi && (
                <span className="px-3 py-1 rounded-xl text-xs font-bold bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-lg flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 fill-white" />
                  <span>{t('khandeshiTag')}</span>
                </span>
              )}
              {recipe.isMaharashtrian && !recipe.isKhandeshi && (
                <span className="px-3 py-1 rounded-xl text-xs font-bold bg-amber-600 text-white shadow-lg">
                  {t('maharashtrianTag')}
                </span>
              )}
            </div>
          </div>

          {/* Dish Summary Info */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-stone-500 tracking-wider mb-1">
                <span>{recipe.transliteration}</span>
                <span>•</span>
                <span className="capitalize">{recipe.category}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight font-serif mb-3">
                {localizedName}
              </h1>

              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-6 font-sans">
                {localizedDesc}
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 text-xs">
              <div>
                <span className="text-[11px] text-stone-400 block">{t('prepTime')}</span>
                <span className="font-bold text-stone-800 dark:text-stone-200 flex items-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  {recipe.prepTime} {t('cookingTime')}
                </span>
              </div>

              <div>
                <span className="text-[11px] text-stone-400 block">{t('cookTime')}</span>
                <span className="font-bold text-stone-800 dark:text-stone-200 flex items-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-orange-500" />
                  {recipe.cookTime} {t('cookingTime')}
                </span>
              </div>

              <div>
                <span className="text-[11px] text-stone-400 block">Difficulty</span>
                <span className="font-bold text-stone-800 dark:text-stone-200 capitalize mt-0.5 block">
                  {recipe.difficulty}
                </span>
              </div>

              <div>
                <span className="text-[11px] text-stone-400 block">{t('approxCost')}</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5 mt-0.5">
                  <IndianRupee className="w-3.5 h-3.5" />
                  ~{recipe.cost ? Math.round(recipe.cost * multiplier) : 100}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DYNAMIC SERVING SIZE ADJUSTER BAR */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 dark:bg-stone-900 border border-amber-200 dark:border-stone-800 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-200 dark:bg-stone-800 text-amber-900 dark:text-amber-300 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-amber-900 dark:text-amber-300 block uppercase tracking-wide">
              {t('servingsSelector')}
            </span>
            <span className="text-xs text-stone-600 dark:text-stone-400">
              Ingredient quantities scale automatically below
            </span>
          </div>
        </div>

        {/* Servings Stepper Buttons */}
        <div className="flex items-center gap-2">
          {[2, 4, 6, 8].map((s) => (
            <button
              key={s}
              onClick={() => setServings(s)}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                servings === s
                  ? 'bg-amber-600 text-white shadow-md scale-105'
                  : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 hover:border-amber-400'
              }`}
            >
              {s} {t('persons')}
            </button>
          ))}
        </div>
      </div>

      {/* TWO COLUMN INGREDIENTS & INSTRUCTIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
        {/* Left Column: Interactive Ingredient Checklist */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 font-serif">
                {t('ingredientsTitle')}
              </h2>
              <p className="text-xs text-stone-500">
                {servings} {t('persons')}
              </p>
            </div>

            <button
              onClick={handleAddAllToGrocery}
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer no-print"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>{t('btnAddAllToGrocery')}</span>
            </button>
          </div>

          <div className="rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 divide-y divide-stone-100 dark:divide-stone-800 shadow-sm overflow-hidden">
            {recipe.ingredients.map((ing, idx) => {
              const ingName = getLocalized(ing.name);
              const scaledAmount = ing.amount ? Math.round(ing.amount * multiplier * 10) / 10 : '';
              const isChecked = !!checkedIngredients[idx];

              return (
                <div
                  key={idx}
                  onClick={() => toggleIngredientCheck(idx)}
                  className={`p-3 sm:p-3.5 flex items-center justify-between gap-3 text-xs sm:text-sm transition-colors cursor-pointer hover:bg-stone-50 dark:hover:bg-stone-800/60 ${
                    isChecked ? 'bg-emerald-50/50 dark:bg-emerald-950/20' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                        isChecked
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : 'border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className={`${isChecked ? 'line-through text-stone-400' : 'text-stone-800 dark:text-stone-200 font-medium'}`}>
                      {ingName}
                    </span>
                  </div>

                  {scaledAmount && (
                    <span className="font-bold text-xs text-stone-700 dark:text-stone-300 shrink-0 px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800">
                      {scaledAmount} {ing.unit}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Add missing to grocery hint */}
          <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800/60 text-[11px] text-stone-500 flex items-center gap-2 no-print">
            <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Click any ingredient to mark as available in your kitchen.</span>
          </div>
        </div>

        {/* Right Column: Cooking Steps */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 font-serif">
            {t('instructionsTitle')}
          </h2>

          <div className="space-y-3">
            {recipe.instructions.map((stepObj) => {
              const stepNum = stepObj.step;
              const stepText = getLocalized(stepObj.text);
              const isDone = !!completedSteps[stepNum];

              return (
                <div
                  key={stepNum}
                  onClick={() => toggleStepCheck(stepNum)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    isDone
                      ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                      : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 shadow-sm hover:border-amber-400'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-xl font-bold text-xs flex items-center justify-center shrink-0 transition-colors ${
                      isDone
                        ? 'bg-emerald-600 text-white'
                        : 'bg-amber-100 dark:bg-stone-800 text-amber-900 dark:text-amber-300 font-serif'
                    }`}
                  >
                    {isDone ? <Check className="w-4 h-4 stroke-[3]" /> : stepNum}
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed ${isDone ? 'text-stone-500 line-through' : 'text-stone-800 dark:text-stone-200'}`}>
                    {stepText}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ACCOMPANIMENTS & PAIRINGS SECTION */}
      {recipe.accompaniments && recipe.accompaniments.length > 0 && (
        <div className="p-6 rounded-3xl bg-amber-50/60 dark:bg-stone-900/60 border border-amber-200 dark:border-stone-800 mb-8 space-y-3">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-bold text-sm">
            <Flame className="w-4 h-4 fill-orange-500 text-orange-500" />
            <span>{t('accompanimentsTitle')}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {recipe.accompaniments.map((acc, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-xl bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs sm:text-sm font-semibold border border-stone-200 dark:border-stone-700 shadow-xs"
              >
                🍽️ {getLocalized(acc)}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* TIPS & ALLERGENS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Substitutions */}
        {recipe.substitutions && recipe.substitutions.length > 0 && (
          <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-700 dark:text-stone-300 mb-1.5">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>{t('substitutionsTitle')}</span>
            </div>
            {recipe.substitutions.map((sub, i) => (
              <p key={i} className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                {getLocalized(sub)}
              </p>
            ))}
          </div>
        )}

        {/* Allergens */}
        {recipe.allergens && recipe.allergens.length > 0 && (
          <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-700 dark:text-stone-300 mb-1.5">
              <AlertTriangle className="w-4 h-4 text-orange-500" />
              <span>{t('allergensTitle')}</span>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-400">
              Contains: {recipe.allergens.join(', ')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
