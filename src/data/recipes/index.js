import { KHANDESHI_RECIPES } from './khandeshiRecipes.js';
import { MAHARASHTRIAN_EVERYDAY_RECIPES } from './maharashtrianEverydayRecipes.js';
import { FESTIVE_AND_REGIONAL_RECIPES } from './festiveAndRegionalRecipes.js';
import { PAN_INDIAN_RECIPES } from './panIndianRecipes.js';
import { ADDITIONAL_RECIPES } from './additionalRecipes.js';
import { MORE_RECIPES } from './moreRecipes.js';
import { EXPANDED_CATALOG_RECIPES } from './expandedCatalog.js';
import { GENERATED_CATALOG_RECIPES } from './generatedCatalog.js';
import { BONUS_RECIPES } from './bonusRecipes.js';

// Combine all recipe collections
const combined = [
  ...KHANDESHI_RECIPES,
  ...MAHARASHTRIAN_EVERYDAY_RECIPES,
  ...FESTIVE_AND_REGIONAL_RECIPES,
  ...PAN_INDIAN_RECIPES,
  ...ADDITIONAL_RECIPES,
  ...MORE_RECIPES,
  ...EXPANDED_CATALOG_RECIPES,
  ...GENERATED_CATALOG_RECIPES,
  ...BONUS_RECIPES
];

// Deduplicate by ID just in case
const uniqueMap = new Map();
combined.forEach(r => {
  if (!uniqueMap.has(r.id)) {
    uniqueMap.set(r.id, r);
  }
});

export const ALL_RECIPES = Array.from(uniqueMap.values());

// Helper methods
export const getRecipeById = (id) => ALL_RECIPES.find(r => r.id === id);

export const getKhandeshiRecipes = () => ALL_RECIPES.filter(r => r.isKhandeshi || r.cuisine === 'khandesh');

export const getMaharashtrianRecipes = () => ALL_RECIPES.filter(r => r.isMaharashtrian);

export const getRecipesByCategory = (category) => ALL_RECIPES.filter(r => r.category === category || (r.mealTypes && r.mealTypes.includes(category)));

export const getRecipesByCuisine = (cuisineId) => {
  if (!cuisineId || cuisineId === 'all') return ALL_RECIPES;
  if (cuisineId === 'khandesh') return ALL_RECIPES.filter(r => r.isKhandeshi || r.cuisine === 'khandesh');
  if (cuisineId === 'everyday_maharashtrian') return ALL_RECIPES.filter(r => r.cuisine === 'everyday_maharashtrian');
  if (cuisineId === 'traditional') return ALL_RECIPES.filter(r => r.cuisine === 'traditional');
  if (cuisineId === 'vidarbha') return ALL_RECIPES.filter(r => r.cuisine === 'vidarbha');
  if (cuisineId === 'marathwada') return ALL_RECIPES.filter(r => r.cuisine === 'marathwada');
  if (cuisineId === 'konkan') return ALL_RECIPES.filter(r => r.cuisine === 'konkan');
  if (cuisineId === 'pune_kolhapur') return ALL_RECIPES.filter(r => r.cuisine === 'pune_kolhapur');
  if (cuisineId === 'festive_seasonal') return ALL_RECIPES.filter(r => r.cuisine === 'festive_seasonal');
  return ALL_RECIPES.filter(r => r.cuisine === cuisineId);
};
