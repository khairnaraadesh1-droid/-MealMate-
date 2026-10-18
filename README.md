# 🍛 MealMate India — AI-Powered Indian Meal Planner
### *स्मार्ट स्वयंपाक, आनंदी कुटुंब • स्मार्ट भोजन, खुशहाल परिवार*

MealMate India is an intelligent, modern, responsive web application designed for busy families, home cooks, and food enthusiasts across India. It solves the everyday dilemma of **"आज काय बनवायचं?" / "आज क्या बनाएं?" / "What should I cook today?"** by providing instant smart meal suggestions based on pantry ingredients, dietary preferences, budget, and prep time — with special cultural pride in **authentic Maharashtrian & Khandeshi cuisines**.

---

## ✨ Key Features

### 1. 🌾 Aapla Maharashtrian Swad & Khandeshi Special Showcase
- **8 Regional Cuisines**: Dedicated showcase spanning Khandesh, Puneri & Kolhapuri, Vidarbha (Saoji), Marathwada, Konkan & Malvan, Desh Everyday, and Festive specials.
- **Dedicated Khandesh Page (`/khandesh`)**:
  - Highlights Khandeshi culinary heritage, the art of **Kala Masala**, earthen pot cooking (*Khapar*), and authentic pairings (Shev Bhaji + Jowar Bhakri, Bharit Puri, Thecha).
  - Quick filterable collection of 28+ authentic Khandeshi recipes.

### 2. 🌐 Full Multilingual Support (3 Languages)
- Toggle seamlessly between:
  - 🇬🇧 **English**
  - 🇮🇳 **मराठी (Marathi)**
  - 🇮🇳 **हिन्दी (Hindi)**
- Every user interface label, recipe name, ingredient description, step-by-step instruction, accompaniment, and AI tip is localized.

### 3. 🍲 110+ Authentic Indian Recipes Catalog
- Rich metadata: Prep time, cook time, budget tier, difficulty, spice level, veg/non-veg indicator, allergens, and accompaniments.
- Multi-facet search by ingredients, cuisines, dietary types, meal types, and price.

### 4. 🧠 Smart Meal Suggestion Engine
- Multi-select interactive pantry ingredient selector organized by categories (Vegetables, Grains, Pulses, Dairy, Spices, Meat).
- Intelligent match scoring algorithm:
  - Matches pantry items against recipes.
  - Highlights missing ingredients.
  - One-click button: **"Add Missing to Grocery List"**.

### 5. 📅 7-Day Weekly Meal Planner
- Breakfast, lunch, and dinner planning board for Monday through Sunday.
- **1-Click Curated Presets**:
  - 🔥 *Khandeshi Special Week*
  - 🏡 *Everyday Maharashtrian Week*
  - ⚡ *Quick 30-min Week*
  - 💰 *Budget-Friendly Veg Week*
- Individual meal swap modals with smart contextual recommendations.
- **1-Click "Export Week to Grocery List"**.

### 6. 🛒 Smart Grocery List
- Auto-categorized ingredients (Vegetables, Grains & Flours, Pulses & Dals, Dairy, Spices & Oils).
- Automated unit merging and quantity combination.
- Real-time estimated budget calculator in ₹ (INR).
- **1-Click "Copy for WhatsApp"** formatted with clean emojis and bullet points for effortless sharing with family or local vendors.

### 7. 📖 Rich Recipe Details & Cooking Mode
- Dynamic serving scaler (adjust servings from 1 to 12; automatically recalibrates ingredient amounts).
- Interactive ingredient check-off list.
- Step-by-step interactive cooking mode with completion tracking.
- Clean print-friendly stylesheet for saving or printing recipe cards.

### 8. 🤖 Ask MealMate AI
- Built-in heuristic reasoning engine running 100% offline out-of-the-box.
- Quick prompt chips (*"Quick 20-min dinner"*, *"Kids lunchbox ideas"*, *"Khandeshi breakfast"*, *"High protein veg"*).
- Optional Gemini API key support for open-ended conversational guidance.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) + Custom Indian Warm Design System
- **Icons**: Lucide React
- **Typography**: Google Fonts (Noto Sans Devanagari, Poppins, Outfit)
- **Effects**: Canvas Confetti for celebratory milestone interactions
- **State Management**: React Context (`LanguageContext`, `ThemeContext`, `PreferencesContext`) with `localStorage` persistence

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0 or newer recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd Mealsuggester

# Install dependencies
npm install

# Start local development server
npm run dev
```

The app will be accessible at: `http://localhost:5173/`

### Production Build
```bash
# Compile and bundle with Vite
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Structure

```
Mealsuggester/
├── public/                 # Static assets and icons
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── AaplaMaharashtrianSwad.jsx  # 8 Maharashtrian regional showcase
│   │   ├── AiAssistantModal.jsx        # Smart interactive AI cooking helper
│   │   ├── Footer.jsx                  # Footer with regional links & credits
│   │   ├── MealSuggestionEngine.jsx    # Pantry ingredient matcher
│   │   ├── Navbar.jsx                  # Multilingual responsive navigation
│   │   ├── RecipeCard.jsx              # Reusable recipe card with badges
│   │   ├── TodayMealPreview.jsx        # Daily meal cards with swap & regenerate
│   │   └── Toast.jsx                   # Toast notification system
│   ├── context/            # Global application state
│   │   ├── LanguageContext.jsx         # English / Marathi / Hindi context
│   │   ├── PreferencesContext.jsx      # User profile, favorites, planner & cart
│   │   └── ThemeContext.jsx            # Dark / Light theme toggle
│   ├── data/               # Authentic recipe database & presets
│   │   ├── ingredients.js              # 60+ Indian pantry ingredients catalog
│   │   ├── regionalCategories.js       # 8 Maharashtrian cultural categories
│   │   ├── weeklyPresets.js            # 4 curated 7-day meal plans
│   │   └── recipes/                    # 110+ comprehensive recipes
│   ├── pages/              # Application pages
│   │   ├── DiscoverPage.jsx            # Recipe explorer with multi-facet filters
│   │   ├── FavoritesPage.jsx           # Saved bookmark collection
│   │   ├── GroceryListPage.jsx         # Categorized shopping list & WhatsApp export
│   │   ├── HomePage.jsx                # Landing page & feature preview
│   │   ├── KhandeshPage.jsx            # Dedicated Khandeshi heritage collection
│   │   ├── PlannerPage.jsx             # 7-day interactive meal board
│   │   ├── PreferencesPage.jsx         # Dietary & household settings
│   │   └── RecipeDetailsPage.jsx       # Servings scaler, checklist & cooking mode
│   ├── translations/       # Multilingual dictionaries
│   │   ├── en.js                       # English strings
│   │   ├── hi.js                       # Hindi strings
│   │   └── mr.js                       # Marathi strings
│   ├── App.jsx             # Router and view controller
│   ├── index.css           # Tailwind v4 styles, variables & print styles
│   └── main.jsx            # React root mount
├── .env.example            # Optional environment variables
├── package.json
└── vite.config.js
```

---

## 🎨 Cultural Design Palette

MealMate India uses a warm, authentic Indian culinary color palette:
- **Khandeshi Terracotta & Spices**: `#C2410C` / `#9A3412`
- **Saffron / Kesar Gold**: `#D97706` / `#F59E0B`
- **Fresh Coriander Green**: `#15803D` / `#22C55E`
- **Warm Cream & Rice Background**: `#FDFBF7` / `#FEFCE8`
- **Dark Night Mode**: Deep slate and obsidian backgrounds with warm amber accents.

---

## 📄 License
MIT License. Built with ❤️ for Indian food lovers and busy families everywhere.
