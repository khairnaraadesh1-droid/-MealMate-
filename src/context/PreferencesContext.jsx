import React, { createContext, useContext, useState, useEffect } from 'react';
import { ALL_RECIPES, getRecipeById } from '../data/recipes';
import { WEEKLY_PRESETS } from '../data/weeklyPresets';

const PreferencesContext = createContext();

const DEFAULT_PREFERENCES = {
  defaultServings: 4,
  dietary: 'all',
  spiceLevel: 'any',
  maxTime: 'any',
  favoriteCuisines: ['khandesh', 'everyday_maharashtrian'],
  excludedIngredients: []
};

export const PreferencesProvider = ({ children }) => {
  // Toast notifications
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  // User kitchen preferences
  const [preferences, setPreferencesState] = useState(() => {
    try {
      const saved = localStorage.getItem('mealmate_preferences');
      return saved ? { ...DEFAULT_PREFERENCES, ...JSON.parse(saved) } : DEFAULT_PREFERENCES;
    } catch {
      return DEFAULT_PREFERENCES;
    }
  });

  const updatePreferences = (newPrefs) => {
    setPreferencesState(prev => {
      const updated = { ...prev, ...newPrefs };
      try {
        localStorage.setItem('mealmate_preferences', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
    showToast('Preferences updated!');
  };

  // Favorites
  const [favorites, setFavoritesState] = useState(() => {
    try {
      const saved = localStorage.getItem('mealmate_favorites');
      return saved ? JSON.parse(saved) : ['khandeshi-shev-bhaji', 'khandeshi-thecha', 'kanda-poha', 'puran-poli-katachi-amti'];
    } catch {
      return ['khandeshi-shev-bhaji', 'khandeshi-thecha', 'kanda-poha'];
    }
  });

  const toggleFavorite = (recipeId) => {
    setFavoritesState(prev => {
      let next;
      if (prev.includes(recipeId)) {
        next = prev.filter(id => id !== recipeId);
        showToast('Recipe removed from favorites', 'info');
      } else {
        next = [...prev, recipeId];
        showToast('Recipe added to favorites! ❤️', 'success');
      }
      try {
        localStorage.setItem('mealmate_favorites', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const isFavorite = (recipeId) => favorites.includes(recipeId);

  // Grocery List
  const [groceryList, setGroceryListState] = useState(() => {
    try {
      const saved = localStorage.getItem('mealmate_grocery_list');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    // Default starter list for demo
    return [
      { id: 'g-1', name: { en: 'Thick spicy Besan Shev', mr: 'जाड तिखट शेव', hi: 'मोटी बेसन शेव' }, amount: 200, unit: 'g', category: 'spices', checked: false, cost: 50 },
      { id: 'g-2', name: { en: 'Onions', mr: 'कांदा', hi: 'प्याज' }, amount: 1, unit: 'kg', category: 'vegetables', checked: false, cost: 35 },
      { id: 'g-3', name: { en: 'Khandeshi Kala Masala', mr: 'खान्देशी काळा मसाला', hi: 'काळा मसाला' }, amount: 100, unit: 'g', category: 'spices', checked: false, cost: 45 },
      { id: 'g-4', name: { en: 'Jowar flour', mr: 'ज्वारीचे पीठ', hi: 'ज्वार का आटा' }, amount: 1, unit: 'kg', category: 'grains', checked: true, cost: 40 }
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem('mealmate_grocery_list', JSON.stringify(groceryList));
    } catch (e) {
      console.error(e);
    }
  }, [groceryList]);

  // Add multiple ingredients to grocery list with smart merging
  const addIngredientsToGrocery = (ingredientsArray, servingsMultiplier = 1) => {
    if (!ingredientsArray || !ingredientsArray.length) return;

    setGroceryListState(prev => {
      const newList = [...prev];

      ingredientsArray.forEach(item => {
        const itemAmount = (item.amount || 1) * servingsMultiplier;
        const normalizedName = typeof item.name === 'string' ? item.name.toLowerCase() : (item.name?.en || '').toLowerCase();

        // Check if existing item has same name and unit
        const existingIndex = newList.findIndex(g => {
          const gName = typeof g.name === 'string' ? g.name.toLowerCase() : (g.name?.en || '').toLowerCase();
          return (gName === normalizedName || g.id === item.id) && g.unit === item.unit;
        });

        if (existingIndex > -1) {
          // Merge amount
          const existing = newList[existingIndex];
          newList[existingIndex] = {
            ...existing,
            amount: Math.round((existing.amount + itemAmount) * 10) / 10
          };
        } else {
          // Create new entry
          newList.push({
            id: 'g-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
            name: typeof item.name === 'object' ? item.name : { en: item.name, mr: item.name, hi: item.name },
            amount: Math.round(itemAmount * 10) / 10,
            unit: item.unit || 'units',
            category: item.category || 'others',
            checked: false,
            cost: 30 // estimated baseline
          });
        }
      });

      return newList;
    });

    showToast('Added to Grocery List! 🛒', 'success');
  };

  const toggleGroceryItem = (id) => {
    setGroceryListState(prev => prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const removeGroceryItem = (id) => {
    setGroceryListState(prev => prev.filter(item => item.id !== id));
  };

  const clearCompletedGrocery = () => {
    setGroceryListState(prev => prev.filter(item => !item.checked));
    showToast('Completed items cleared!');
  };

  const clearAllGrocery = () => {
    setGroceryListState([]);
    showToast('Grocery list cleared!');
  };

  const addCustomGroceryItem = (name, amount = 1, unit = 'unit', category = 'others') => {
    if (!name || !name.trim()) return;
    const newItem = {
      id: 'g-custom-' + Date.now(),
      name: { en: name.trim(), mr: name.trim(), hi: name.trim() },
      amount: parseFloat(amount) || 1,
      unit: unit || 'unit',
      category: category || 'others',
      checked: false,
      cost: 25
    };
    setGroceryListState(prev => [newItem, ...prev]);
    showToast(`Added "${name}" to grocery list!`);
  };

  // Weekly Planner State
  const [weeklyPlan, setWeeklyPlanState] = useState(() => {
    try {
      const saved = localStorage.getItem('mealmate_weekly_plan');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    // Default to Khandeshi special week preset
    return WEEKLY_PRESETS[0].days;
  });

  const updatePlanSlot = (day, slot, recipeId) => {
    setWeeklyPlanState(prev => {
      const updated = {
        ...prev,
        [day]: {
          ...prev[day],
          [slot]: recipeId
        }
      };
      try {
        localStorage.setItem('mealmate_weekly_plan', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
    showToast(`Updated ${day} ${slot}!`);
  };

  const applyWeeklyPreset = (presetId) => {
    const preset = WEEKLY_PRESETS.find(p => p.id === presetId) || WEEKLY_PRESETS[0];
    setWeeklyPlanState(preset.days);
    try {
      localStorage.setItem('mealmate_weekly_plan', JSON.stringify(preset.days));
    } catch (e) {
      console.error(e);
    }
    const presetName = preset?.name?.en || (typeof preset?.name === 'string' ? preset.name : 'Weekly');
    showToast(`Applied "${presetName}" preset! 📅`);
  };

  // Export all ingredients from the 7-day meal plan to grocery list
  const exportWeeklyPlanToGrocery = () => {
    const allPlanIngredients = [];

    Object.keys(weeklyPlan).forEach(day => {
      const daySlots = weeklyPlan[day];
      ['breakfast', 'lunch', 'dinner'].forEach(slot => {
        const recipeId = daySlots[slot];
        if (recipeId) {
          const recipe = getRecipeById(recipeId);
          if (recipe && recipe.ingredients) {
            allPlanIngredients.push(...recipe.ingredients);
          }
        }
      });
    });

    if (allPlanIngredients.length > 0) {
      addIngredientsToGrocery(allPlanIngredients, 1);
      showToast(`Exported ingredients for entire week to grocery list! 🛒`, 'success');
    }
  };

  // Recently Suggested Recipes (to avoid repeats)
  const [recentlySuggested, setRecentlySuggested] = useState(() => {
    try {
      const saved = localStorage.getItem('mealmate_recent_suggestions');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const recordSuggestion = (recipeIds) => {
    if (!recipeIds || !recipeIds.length) return;
    setRecentlySuggested(prev => {
      const updated = Array.from(new Set([...recipeIds, ...prev])).slice(0, 20);
      try {
        localStorage.setItem('mealmate_recent_suggestions', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  return (
    <PreferencesContext.Provider value={{
      preferences,
      updatePreferences,
      favorites,
      toggleFavorite,
      isFavorite,
      groceryList,
      addIngredientsToGrocery,
      toggleGroceryItem,
      removeGroceryItem,
      clearCompletedGrocery,
      clearAllGrocery,
      addCustomGroceryItem,
      weeklyPlan,
      updatePlanSlot,
      applyWeeklyPreset,
      exportWeeklyPlanToGrocery,
      recentlySuggested,
      recordSuggestion,
      toast,
      showToast
    }}>
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = () => {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error('usePreferences must be used within a PreferencesProvider');
  }
  return context;
};
