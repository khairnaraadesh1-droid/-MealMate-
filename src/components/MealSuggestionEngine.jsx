import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePreferences } from '../context/PreferencesContext';
import { INGREDIENTS_CATALOG } from '../data/ingredients';
import { ALL_RECIPES } from '../data/recipes';
import { RecipeCard } from './RecipeCard';
import {
  Search,
  Plus,
  X,
  Check,
  Sparkles,
  Filter,
  Flame,
  Clock,
  Utensils,
  ShoppingCart,
  AlertCircle
} from 'lucide-react';

export const MealSuggestionEngine = ({ initialCuisine = 'all' }) => {
  const { t, getLocalized } = useLanguage();
  const {
    preferences,
    recentlySuggested,
    recordSuggestion,
    addIngredientsToGrocery,
    showToast
  } = usePreferences();

  // Selected meal slot
  const [selectedSlot, setSelectedSlot] = useState('lunch'); // breakfast | lunch | dinner | full_day

  // Selected ingredients IDs
  const [selectedIngredients, setSelectedIngredients] = useState([
    'onion',
    'garlic',
    'potato',
    'kala_masala'
  ]);

  // Ingredient search filter
  const [ingredientQuery, setIngredientQuery] = useState('');

  // Custom ingredient input
  const [customInput, setCustomInput] = useState('');

  // Preference filters
  const [dietFilter, setDietFilter] = useState(preferences.dietary || 'all');
  const [cuisineFilter, setCuisineFilter] = useState(initialCuisine || 'all');
  const [timeFilter, setTimeFilter] = useState(preferences.maxTime || 'any');
  const [spiceFilter, setSpiceFilter] = useState(preferences.spiceLevel || 'any');

  // Multi-select toggle
  const toggleIngredient = (id) => {
    setSelectedIngredients(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Add custom ingredient
  const handleAddCustom = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    const cleanId = 'custom_' + customInput.trim().toLowerCase().replace(/\s+/g, '_');
    if (!selectedIngredients.includes(cleanId)) {
      setSelectedIngredients(prev => [...prev, cleanId]);
      showToast(`Added "${customInput}" to your ingredients!`);
    }
    setCustomInput('');
  };

  // Filtered ingredients catalog for picker
  const filteredCatalog = useMemo(() => {
    if (!ingredientQuery.trim()) {
      return INGREDIENTS_CATALOG;
    }
    const q = ingredientQuery.toLowerCase();
    return INGREDIENTS_CATALOG.filter(item => {
      const enName = (item.name?.en || (typeof item.name === 'string' ? item.name : '')).toLowerCase();
      const mrName = (item.name?.mr || '').toLowerCase();
      const hiName = (item.name?.hi || '').toLowerCase();
      return enName.includes(q) || mrName.includes(q) || hiName.includes(q) || item.id.includes(q);
    });
  }, [ingredientQuery]);

  // Staple quick picks
  const staples = useMemo(() => {
    return INGREDIENTS_CATALOG.filter(item => item.staple);
  }, []);

  // Recommendation Calculation Logic
  const recommendationResults = useMemo(() => {
    if (!selectedIngredients.length) return [];

    const selectedSet = new Set(selectedIngredients.map(i => i.toLowerCase()));

    // 1. Filter recipes matching slot, diet, cuisine, and time
    const eligibleRecipes = ALL_RECIPES.filter(recipe => {
      // Slot filter
      if (selectedSlot !== 'full_day') {
        const matchesSlot = recipe.category === selectedSlot || (recipe.mealTypes && recipe.mealTypes.includes(selectedSlot));
        if (!matchesSlot) return false;
      }

      // Dietary filter
      if (dietFilter !== 'all') {
        if (dietFilter === 'veg' && !(recipe.dietary === 'veg' || recipe.dietary === 'vegan' || recipe.dietary === 'jain')) {
          return false;
        }
        if (dietFilter === 'vegan' && recipe.dietary !== 'vegan') {
          return false;
        }
        if (dietFilter === 'jain' && recipe.dietary !== 'jain') {
          return false;
        }
        if (dietFilter === 'non-veg' && recipe.dietary !== 'non-veg') {
          return false;
        }
      }

      // Cuisine filter
      if (cuisineFilter !== 'all') {
        if (cuisineFilter === 'khandesh' && !(recipe.isKhandeshi || recipe.cuisine === 'khandesh')) {
          return false;
        }
        if (cuisineFilter === 'everyday_maharashtrian' && recipe.cuisine !== 'everyday_maharashtrian') {
          return false;
        }
        if (cuisineFilter !== 'khandesh' && cuisineFilter !== 'everyday_maharashtrian' && recipe.cuisine !== cuisineFilter) {
          return false;
        }
      }

      // Time filter
      const totalTime = (recipe.prepTime || 0) + (recipe.cookTime || 0);
      if (timeFilter === 'quick' && totalTime > 25) return false;
      if (timeFilter === 'medium' && totalTime > 40) return false;

      // Spice filter
      if (spiceFilter !== 'any') {
        if (spiceFilter === 'mild' && recipe.spiceLevel !== 'mild') return false;
        if (spiceFilter === 'spicy' && recipe.spiceLevel !== 'spicy') return false;
      }

      return true;
    });

    // 2. Score each eligible recipe based on matching ingredients
    const scored = eligibleRecipes.map(recipe => {
      const recipeIngredients = recipe.ingredients || [];
      const recipeTotalCount = recipeIngredients.length;

      let matchedCount = 0;
      const matchedItems = [];
      const missingItems = [];

      recipeIngredients.forEach(ing => {
        const ingId = ing.id ? ing.id.toLowerCase() : '';
        const ingNameEn = (ing.name?.en || '').toLowerCase();
        const ingNameMr = (ing.name?.mr || '').toLowerCase();

        let isMatched = false;
        if (ingId && selectedSet.has(ingId)) {
          isMatched = true;
        } else {
          // Check substring matching for custom ingredients
          selectedIngredients.forEach(sel => {
            const clean = sel.replace('custom_', '').toLowerCase();
            if (ingNameEn.includes(clean) || ingNameMr.includes(clean)) {
              isMatched = true;
            }
          });
        }

        if (isMatched) {
          matchedCount++;
          matchedItems.push(ing);
        } else {
          missingItems.push(ing);
        }
      });

      // Match percentage of the recipe's required ingredients
      const percentage = recipeTotalCount > 0 ? Math.round((matchedCount / recipeTotalCount) * 100) : 0;

      // Slightly penalize recently suggested to encourage variety
      const wasRecent = recentlySuggested.includes(recipe.id);
      const score = percentage - (wasRecent ? 15 : 0);

      return {
        recipe,
        matchedCount,
        totalCount: recipeTotalCount,
        percentage,
        matchedItems,
        missingItems,
        score
      };
    });

    // 3. Sort by score descending (highest matches first)
    scored.sort((a, b) => b.score - a.score);

    return scored;
  }, [
    selectedIngredients,
    selectedSlot,
    dietFilter,
    cuisineFilter,
    timeFilter,
    spiceFilter,
    recentlySuggested
  ]);

  // Separate exact matches vs fallbacks
  const topMatches = recommendationResults.filter(item => item.matchedCount > 0);
  const fallbacks = topMatches.length === 0 ? recommendationResults.slice(0, 4) : [];

  return (
    <section id="meal-engine" className="py-12 sm:py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{t('engineTitle')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight font-serif">
            {t('engineSubtitle')}
          </h2>
        </div>

        {/* Main Interactive Control Panel */}
        <div className="rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xl p-5 sm:p-8 mb-12">
          {/* Step 1: Meal Slot Selector Tabs */}
          <div className="mb-8">
            <label className="block text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-3">
              1. {t('selectMealSlot')}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
              {[
                { id: 'breakfast', label: t('mealOptionBreakfast'), icon: Utensils },
                { id: 'lunch', label: t('mealOptionLunch'), icon: Utensils },
                { id: 'dinner', label: t('mealOptionDinner'), icon: Utensils },
                { id: 'full_day', label: t('mealOptionFullDay'), icon: Sparkles }
              ].map(slot => (
                <button
                  key={slot.id}
                  onClick={() => setSelectedSlot(slot.id)}
                  className={`py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    selectedSlot === slot.id
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/20 scale-[1.02]'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                  }`}
                >
                  <slot.icon className="w-4 h-4" />
                  <span>{slot.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Available Ingredients Multi-Selector */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                2. {t('availableIngredients')} ({selectedIngredients.length} {t('selectedIngredientsCount')})
              </label>
              {selectedIngredients.length > 0 && (
                <button
                  onClick={() => setSelectedIngredients([])}
                  className="text-xs font-semibold text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                >
                  {t('clearAll')}
                </button>
              )}
            </div>

            {/* Selected Ingredient Chips */}
            {selectedIngredients.length > 0 && (
              <div className="flex flex-wrap gap-2 p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 mb-4">
                {selectedIngredients.map(id => {
                  const catalogItem = INGREDIENTS_CATALOG.find(i => i.id === id);
                  const displayName = catalogItem ? getLocalized(catalogItem.name) : id.replace('custom_', '');

                  return (
                    <span
                      key={id}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold shadow-xs animate-fade-in"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{displayName}</span>
                      <button
                        onClick={() => toggleIngredient(id)}
                        className="hover:bg-emerald-700 p-0.5 rounded-full transition-colors cursor-pointer"
                        title="Remove"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  );
                })}
              </div>
            )}

            {/* Quick Staples Bar */}
            <div className="mb-4">
              <span className="text-xs font-medium text-stone-500 dark:text-stone-400 block mb-2">
                {t('quickStaples')}:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {staples.map(staple => {
                  const isSelected = selectedIngredients.includes(staple.id);
                  const name = getLocalized(staple.name);
                  return (
                    <button
                      key={staple.id}
                      onClick={() => toggleIngredient(staple.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-600 text-white font-bold shadow-xs'
                          : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                      }`}
                    >
                      {isSelected ? '✓ ' : '+ '}
                      {name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Ingredient Search & Custom Input */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Search in Catalog */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  value={ingredientQuery}
                  onChange={(e) => setIngredientQuery(e.target.value)}
                  placeholder={t('searchIngredientPlaceholder')}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Add Custom Ingredient */}
              <form onSubmit={handleAddCustom} className="flex gap-2">
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder={t('addCustomPlaceholder')}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  type="submit"
                  disabled={!customInput.trim()}
                  className="px-4 py-2.5 rounded-xl bg-stone-800 dark:bg-stone-700 hover:bg-stone-900 text-white font-bold text-xs flex items-center gap-1 disabled:opacity-50 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>{t('addCustomIngredient')}</span>
                </button>
              </form>
            </div>

            {/* Search Dropdown / Picker Results */}
            {ingredientQuery.trim() && (
              <div className="mt-3 max-h-48 overflow-y-auto p-2 rounded-xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 flex flex-wrap gap-1.5">
                {filteredCatalog.map(item => {
                  const isSelected = selectedIngredients.includes(item.id);
                  const name = getLocalized(item.name);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleIngredient(item.id)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        isSelected
                          ? 'bg-emerald-600 text-white font-bold'
                          : 'bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-200 hover:bg-emerald-50 dark:hover:bg-emerald-950'
                      }`}
                    >
                      {isSelected ? '✓ ' : '+ '}
                      {name}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Step 3: Preference Filters (Diet, Region, Cooking Time, Spice) */}
          <div className="pt-6 border-t border-stone-200 dark:border-stone-800">
            <label className="block text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-3">
              3. {t('preferencesTitle')}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {/* Diet filter */}
              <div>
                <label className="block text-[11px] font-semibold text-stone-500 mb-1">
                  {t('dietaryPreference')}
                </label>
                <select
                  value={dietFilter}
                  onChange={(e) => setDietFilter(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="all">{t('dietAll')}</option>
                  <option value="veg">{t('dietVeg')}</option>
                  <option value="vegan">{t('dietVegan')}</option>
                  <option value="jain">{t('dietJain')}</option>
                  <option value="non-veg">{t('dietNonVeg')}</option>
                </select>
              </div>

              {/* Cuisine filter */}
              <div>
                <label className="block text-[11px] font-semibold text-stone-500 mb-1">
                  {t('cuisineRegion')}
                </label>
                <select
                  value={cuisineFilter}
                  onChange={(e) => setCuisineFilter(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="all">{t('cuisineAll')}</option>
                  <option value="khandesh">खान्देशी खास (Khandesh Special)</option>
                  <option value="everyday_maharashtrian">रोजचे महाराष्ट्रीयन जेवण</option>
                  <option value="traditional">पारंपारिक पाककृती</option>
                  <option value="vidarbha">विदर्भ विशेष (Vidarbha)</option>
                  <option value="konkan">कोकणी चव (Konkan)</option>
                  <option value="pune_kolhapur">पुणे व कोल्हापूर (Pune/Kolhapur)</option>
                  <option value="festive_seasonal">सण व गोडधोड (Festive)</option>
                  <option value="north_indian">उत्तर भारतीय (North Indian)</option>
                </select>
              </div>

              {/* Time filter */}
              <div>
                <label className="block text-[11px] font-semibold text-stone-500 mb-1">
                  {t('prepTimeMax')}
                </label>
                <select
                  value={timeFilter}
                  onChange={(e) => setTimeFilter(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="any">{t('timeAny')}</option>
                  <option value="quick">{t('timeQuick')}</option>
                  <option value="medium">{t('timeMedium')}</option>
                </select>
              </div>

              {/* Spice filter */}
              <div>
                <label className="block text-[11px] font-semibold text-stone-500 mb-1">
                  {t('spiceLevel')}
                </label>
                <select
                  value={spiceFilter}
                  onChange={(e) => setSpiceFilter(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="any">{t('spiceAny')}</option>
                  <option value="mild">{t('spiceMild')}</option>
                  <option value="medium">{t('spiceMedium')}</option>
                  <option value="spicy">{t('spiceSpicy')}</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* RESULTS SECTION */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-50 font-serif">
              {t('suggestionsTitle')} ({topMatches.length})
            </h3>
            <span className="text-xs text-stone-500 font-medium">
              Ranked by ingredient match
            </span>
          </div>

          {topMatches.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {topMatches.map(({ recipe, percentage, matchedCount, totalCount, missingItems }) => (
                <div key={recipe.id} className="flex flex-col">
                  <RecipeCard
                    recipe={recipe}
                    matchInfo={{
                      percentage,
                      matchedCount,
                      totalCount
                    }}
                  />

                  {/* Missing ingredients breakdown & Quick Add to Grocery */}
                  {missingItems.length > 0 && (
                    <div className="mt-2 p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-xs">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-semibold text-amber-800 dark:text-amber-300">
                          {t('missingIngredients')} ({missingItems.length}):
                        </span>
                        <button
                          onClick={() => addIngredientsToGrocery(missingItems)}
                          className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <ShoppingCart className="w-3 h-3" />
                          <span>{t('addMissingToGrocery')}</span>
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {missingItems.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-1.5 py-0.5 rounded bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 text-[10px] border border-stone-200 dark:border-stone-700"
                          >
                            {getLocalized(item.name)}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            /* Fallback State */
            <div className="p-8 rounded-3xl bg-amber-50 dark:bg-stone-900/60 border border-amber-200 dark:border-stone-800 text-center max-w-2xl mx-auto">
              <AlertCircle className="w-12 h-12 text-amber-600 dark:text-amber-400 mx-auto mb-3" />
              <h4 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2">
                {t('noExactMatchTitle')}
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mb-6">
                {t('noExactMatchSubtitle')}
              </p>

              {fallbacks.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  {fallbacks.map(({ recipe }) => (
                    <RecipeCard key={recipe.id} recipe={recipe} compact={true} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
