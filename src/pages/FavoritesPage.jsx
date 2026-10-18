import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { usePreferences } from '../context/PreferencesContext';
import { ALL_RECIPES } from '../data/recipes';
import { RecipeCard } from '../components/RecipeCard';
import { Heart, Search, ArrowRight, ChefHat } from 'lucide-react';

export const FavoritesPage = () => {
  const { t } = useLanguage();
  const { favorites } = usePreferences();
  const [filterCategory, setFilterCategory] = useState('all');

  const favoriteRecipes = useMemo(() => {
    return ALL_RECIPES.filter(r => favorites.includes(r.id));
  }, [favorites]);

  const filtered = useMemo(() => {
    if (filterCategory === 'all') return favoriteRecipes;
    if (filterCategory === 'khandesh') return favoriteRecipes.filter(r => r.isKhandeshi || r.cuisine === 'khandesh');
    return favoriteRecipes.filter(r => r.category === filterCategory || (r.mealTypes && r.mealTypes.includes(filterCategory)));
  }, [favoriteRecipes, filterCategory]);

  return (
    <div className="flex-1 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 text-xs font-semibold mb-2">
          <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
          <span>{t('navFavorites')}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-50 font-serif tracking-tight">
          {t('favoritesTitle')} ({favoriteRecipes.length})
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
          {t('favoritesSubtitle')}
        </p>
      </div>

      {favoriteRecipes.length > 0 ? (
        <div>
          {/* Quick Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 mb-8 no-scrollbar">
            {[
              { id: 'all', label: 'All Favorites' },
              { id: 'khandesh', label: 'Khandeshi Specials' },
              { id: 'breakfast', label: 'Breakfast' },
              { id: 'lunch', label: 'Lunch' },
              { id: 'dinner', label: 'Dinner' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  filterCategory === tab.id
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Recipes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      ) : (
        /* Empty Favorites State */
        <div className="text-center py-20 p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm max-w-lg mx-auto">
          <Heart className="w-16 h-16 text-stone-300 dark:text-stone-700 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-stone-800 dark:text-stone-200 mb-1">
            {t('emptyFavoritesTitle')}
          </h3>
          <p className="text-xs text-stone-500 leading-relaxed mb-6">
            {t('emptyFavoritesSubtitle')}
          </p>
          <Link
            to="/discover"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-md hover:bg-emerald-700 transition-colors"
          >
            <span>{t('exploreRecipesBtn')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
};
