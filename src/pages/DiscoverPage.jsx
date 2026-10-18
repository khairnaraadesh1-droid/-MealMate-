import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ALL_RECIPES } from '../data/recipes';
import { RecipeCard } from '../components/RecipeCard';
import {
  Search,
  Filter,
  SlidersHorizontal,
  X,
  Sparkles,
  Flame,
  ChefHat
} from 'lucide-react';

export const DiscoverPage = () => {
  const { t, getLocalized } = useLanguage();
  const [searchParams] = useSearchParams();

  // Search query
  const [searchQuery, setSearchQuery] = useState('');

  // Category filter
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Cuisine filter initialized from URL query param if present
  const [selectedCuisine, setSelectedCuisine] = useState(() => {
    return searchParams.get('cuisine') || 'all';
  });

  useEffect(() => {
    const cuisineParam = searchParams.get('cuisine');
    if (cuisineParam) {
      setSelectedCuisine(cuisineParam);
    }
  }, [searchParams]);

  // Dietary filter
  const [selectedDiet, setSelectedDiet] = useState('all');

  // Time filter
  const [selectedTime, setSelectedTime] = useState('any');

  // Sort
  const [sortBy, setSortBy] = useState('featured');

  // Filter recipes logic
  const filteredRecipes = useMemo(() => {
    return ALL_RECIPES.filter(recipe => {
      // 1. Search Query (Multilingual: EN, MR, HI, Transliteration, Aliases)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const enName = (recipe.name?.en || (typeof recipe.name === 'string' ? recipe.name : '')).toLowerCase();
        const mrName = (recipe.name?.mr || '').toLowerCase();
        const hiName = (recipe.name?.hi || '').toLowerCase();
        const translit = (recipe.transliteration || '').toLowerCase();
        const aliases = (recipe.searchAliases || []).join(' ').toLowerCase();

        // Also search in ingredients
        const ingredientsText = (recipe.ingredients || [])
          .map(i => `${i.name?.en || ''} ${i.name?.mr || ''} ${i.name?.hi || ''}`)
          .join(' ')
          .toLowerCase();

        const matches =
          enName.includes(q) ||
          mrName.includes(q) ||
          hiName.includes(q) ||
          translit.includes(q) ||
          aliases.includes(q) ||
          ingredientsText.includes(q);

        if (!matches) return false;
      }

      // 2. Meal Category
      if (selectedCategory !== 'all') {
        const matchCat = recipe.category === selectedCategory || (recipe.mealTypes && recipe.mealTypes.includes(selectedCategory));
        if (!matchCat) return false;
      }

      // 3. Cuisine / Region
      if (selectedCuisine !== 'all') {
        if (selectedCuisine === 'khandesh' && !(recipe.isKhandeshi || recipe.cuisine === 'khandesh')) {
          return false;
        }
        if (selectedCuisine === 'everyday_maharashtrian' && recipe.cuisine !== 'everyday_maharashtrian') {
          return false;
        }
        if (selectedCuisine !== 'khandesh' && selectedCuisine !== 'everyday_maharashtrian' && recipe.cuisine !== selectedCuisine) {
          return false;
        }
      }

      // 4. Dietary
      if (selectedDiet !== 'all') {
        if (selectedDiet === 'veg' && !(recipe.dietary === 'veg' || recipe.dietary === 'vegan' || recipe.dietary === 'jain')) {
          return false;
        }
        if (selectedDiet === 'vegan' && recipe.dietary !== 'vegan') {
          return false;
        }
        if (selectedDiet === 'jain' && recipe.dietary !== 'jain') {
          return false;
        }
        if (selectedDiet === 'non-veg' && recipe.dietary !== 'non-veg') {
          return false;
        }
      }

      // 5. Time
      const totalTime = (recipe.prepTime || 0) + (recipe.cookTime || 0);
      if (selectedTime === 'quick' && totalTime > 25) return false;
      if (selectedTime === 'medium' && totalTime > 40) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'time_asc') {
        const timeA = (a.prepTime || 0) + (a.cookTime || 0);
        const timeB = (b.prepTime || 0) + (b.cookTime || 0);
        return timeA - timeB;
      }
      if (sortBy === 'cost_asc') {
        return (a.cost || 0) - (b.cost || 0);
      }
      if (sortBy === 'name_asc') {
        const nameA = a.name?.en || (typeof a.name === 'string' ? a.name : '');
        const nameB = b.name?.en || (typeof b.name === 'string' ? b.name : '');
        return nameA.localeCompare(nameB);
      }
      // default: Featured (Khandeshi & Maharashtrian dishes first)
      if (a.isKhandeshi && !b.isKhandeshi) return -1;
      if (!a.isKhandeshi && b.isKhandeshi) return 1;
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedCuisine, selectedDiet, selectedTime, sortBy]);

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedCuisine('all');
    setSelectedDiet('all');
    setSelectedTime('any');
    setSortBy('featured');
  };

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'all' ||
    selectedCuisine !== 'all' ||
    selectedDiet !== 'all' ||
    selectedTime !== 'any';

  return (
    <div className="flex-1 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight font-serif">
          {t('navDiscover')}
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
          Explore our collection of over 100+ authentic Indian, Maharashtrian, and Khandeshi recipes with instant multilingual search.
        </p>
      </div>

      {/* Main Filter & Search Control Panel */}
      <div className="p-4 sm:p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-4 mb-8">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search in English, मराठी (उदा. शेव भाजी, पोहे), or हिन्दी (उदा. बैंगन भरता)..."
            className="w-full pl-12 pr-10 py-3 rounded-2xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-stone-400 hover:text-stone-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Meal Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {[
            { id: 'all', label: 'All Dishes' },
            { id: 'breakfast', label: 'Breakfast (नाश्ता)' },
            { id: 'lunch', label: 'Lunch (दुपारचे जेवण)' },
            { id: 'dinner', label: 'Dinner (रात्रीचे जेवण)' },
            { id: 'snack', label: 'Snacks (खमंग फराळ)' },
            { id: 'sweet', label: 'Sweets (गोडधोड)' },
            { id: 'accompaniment', label: 'Thecha & Accompaniments' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dropdowns Row: Cuisine, Diet, Time, Sort */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-stone-100 dark:border-stone-800 text-xs">
          {/* Cuisine / Region */}
          <div>
            <label className="block text-[11px] font-semibold text-stone-500 mb-1">
              {t('cuisineRegion')}
            </label>
            <select
              value={selectedCuisine}
              onChange={(e) => setSelectedCuisine(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">All Cuisines</option>
              <option value="khandesh">खान्देशी खास (Khandesh Special)</option>
              <option value="everyday_maharashtrian">Everyday Maharashtrian</option>
              <option value="traditional">Traditional Recipes</option>
              <option value="vidarbha">Vidarbha (विदर्भ)</option>
              <option value="konkan">Konkan Coastal (कोकणी)</option>
              <option value="pune_kolhapur">Pune & Kolhapur</option>
              <option value="festive_seasonal">Festive Sweets & Faral</option>
              <option value="north_indian">North Indian</option>
              <option value="south_indian">South Indian</option>
              <option value="gujarati">Gujarati</option>
            </select>
          </div>

          {/* Diet */}
          <div>
            <label className="block text-[11px] font-semibold text-stone-500 mb-1">
              {t('dietaryPreference')}
            </label>
            <select
              value={selectedDiet}
              onChange={(e) => setSelectedDiet(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">{t('dietAll')}</option>
              <option value="veg">{t('dietVeg')}</option>
              <option value="vegan">{t('dietVegan')}</option>
              <option value="jain">{t('dietJain')}</option>
              <option value="non-veg">{t('dietNonVeg')}</option>
            </select>
          </div>

          {/* Time */}
          <div>
            <label className="block text-[11px] font-semibold text-stone-500 mb-1">
              {t('prepTimeMax')}
            </label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="any">{t('timeAny')}</option>
              <option value="quick">{t('timeQuick')}</option>
              <option value="medium">{t('timeMedium')}</option>
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-[11px] font-semibold text-stone-500 mb-1">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="featured">Featured / Signature</option>
              <option value="time_asc">Quickest First</option>
              <option value="cost_asc">Most Budget-Friendly</option>
              <option value="name_asc">Name (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Active Filters Clear Bar */}
        {hasActiveFilters && (
          <div className="flex items-center justify-between pt-2 text-xs">
            <span className="text-stone-500">
              Filters active
            </span>
            <button
              onClick={clearAllFilters}
              className="text-red-500 hover:text-red-700 font-semibold cursor-pointer"
            >
              {t('clearAll')}
            </button>
          </div>
        )}
      </div>

      {/* Results Header Count */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs sm:text-sm font-bold text-stone-600 dark:text-stone-300">
          Showing <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">{filteredRecipes.length}</span> recipes
        </span>
      </div>

      {/* Recipes Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm">
          <ChefHat className="w-16 h-16 text-stone-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-stone-800 dark:text-stone-200 mb-1">
            No matching recipes found
          </h3>
          <p className="text-xs text-stone-500 mb-4">
            Try clearing filters or searching with a different term in English, Marathi, or Hindi.
          </p>
          <button
            onClick={clearAllFilters}
            className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-md cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};
