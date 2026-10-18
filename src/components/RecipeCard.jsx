import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { usePreferences } from '../context/PreferencesContext';
import { Clock, IndianRupee, Flame, Heart, ChevronRight, Sparkles, ChefHat } from 'lucide-react';

export const RecipeCard = ({ recipe, matchInfo = null, compact = false }) => {
  const { t, getLocalized } = useLanguage();
  const { isFavorite, toggleFavorite } = usePreferences();
  const [imageError, setImageError] = useState(false);

  if (!recipe) return null;

  const favorite = isFavorite(recipe.id);
  const localizedName = getLocalized(recipe.name);
  const localizedDesc = getLocalized(recipe.description);

  const totalTime = (recipe.prepTime || 0) + (recipe.cookTime || 0);

  const isVeg = recipe.dietary === 'veg' || recipe.dietary === 'vegan' || recipe.dietary === 'jain';

  return (
    <div className="group rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden relative">
      {/* Top Image Section */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-stone-800">
        {!imageError && recipe.image ? (
          <img
            src={recipe.image}
            alt={localizedName}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 via-orange-100 to-emerald-100 dark:from-stone-800 dark:to-stone-900 text-stone-400">
            <ChefHat className="w-12 h-12 text-amber-600/60 dark:text-amber-400/50 mb-2" />
            <span className="text-xs font-semibold text-stone-600 dark:text-stone-300 px-3 text-center">
              {localizedName}
            </span>
          </div>
        )}

        {/* Veg / Non-Veg Indicator Icon */}
        <div className="absolute top-3 left-3 z-10">
          <div className={`w-5 h-5 rounded-md border-2 bg-white/95 dark:bg-stone-900/95 flex items-center justify-center shadow-md ${
            isVeg ? 'border-emerald-600' : 'border-red-600'
          }`}>
            <div className={`w-2.5 h-2.5 rounded-full ${isVeg ? 'bg-emerald-600' : 'bg-red-600'}`} />
          </div>
        </div>

        {/* Favorite Heart Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(recipe.id);
          }}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 dark:bg-stone-900/90 text-stone-500 hover:text-red-500 shadow-md backdrop-blur-sm transition-transform active:scale-90 cursor-pointer"
          title={favorite ? t('btnInFavorites') : t('btnAddToFavorites')}
        >
          <Heart className={`w-4 h-4 transition-colors ${favorite ? 'fill-red-500 text-red-500' : ''}`} />
        </button>

        {/* Regional Badges */}
        <div className="absolute bottom-3 left-3 z-10 flex flex-wrap gap-1.5">
          {recipe.isKhandeshi && (
            <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md flex items-center gap-1">
              <Flame className="w-3 h-3 inline fill-white" />
              <span>{t('khandeshiTag')}</span>
            </span>
          )}
          {recipe.isMaharashtrian && !recipe.isKhandeshi && (
            <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-amber-600 text-white shadow-md">
              {t('maharashtrianTag')}
            </span>
          )}
        </div>

        {/* Ingredient Match percentage badge (if in suggestion mode) */}
        {matchInfo && (
          <div className="absolute bottom-3 right-3 z-10">
            <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-600 text-white shadow-lg flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>{matchInfo.percentage}% {t('matchRate')}</span>
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Transliteration & Category */}
          <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-1">
            <span className="font-medium tracking-wide uppercase text-[10px]">
              {recipe.transliteration || recipe.category}
            </span>
            <span className="capitalize px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-[10px]">
              {recipe.category}
            </span>
          </div>

          {/* Dish Name */}
          <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {localizedName}
          </h3>

          {/* Short Description */}
          {!compact && (
            <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 line-clamp-2 leading-relaxed">
              {localizedDesc}
            </p>
          )}

          {/* If match explanation exists */}
          {matchInfo && matchInfo.matchedCount !== undefined && (
            <div className="mt-2 text-[11px] text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-1 rounded-md font-medium">
              ✓ {t('explanationPrefix')} {matchInfo.matchedCount} of your {matchInfo.totalCount} selected ingredients
            </div>
          )}
        </div>

        {/* Card Footer: Metadata and Action */}
        <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3 text-stone-600 dark:text-stone-400">
            <div className="flex items-center gap-1" title="Cooking Time">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              <span>{totalTime} {t('cookingTime')}</span>
            </div>
            {recipe.cost && (
              <div className="flex items-center gap-0.5 font-medium text-stone-700 dark:text-stone-300" title="Estimated Cost">
                <IndianRupee className="w-3.5 h-3.5 text-stone-400" />
                <span>~{recipe.cost}</span>
              </div>
            )}
          </div>

          <Link
            to={`/recipe/${recipe.id}`}
            className="flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 group/link"
          >
            <span>{t('viewRecipe')}</span>
            <ChevronRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
