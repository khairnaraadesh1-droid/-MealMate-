import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { PreferencesProvider } from './context/PreferencesContext';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { AiAssistantModal } from './components/AiAssistantModal';
import { Sparkles } from 'lucide-react';

import { HomePage } from './pages/HomePage';
import { KhandeshPage } from './pages/KhandeshPage';
import { DiscoverPage } from './pages/DiscoverPage';
import { RecipeDetailsPage } from './pages/RecipeDetailsPage';
import { PlannerPage } from './pages/PlannerPage';
import { GroceryListPage } from './pages/GroceryListPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { PreferencesPage } from './pages/PreferencesPage';

export function App() {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <PreferencesProvider>
          <HashRouter>
            <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-stone-800 dark:bg-[#0F1216] dark:text-stone-100 transition-colors duration-200">
              <Navbar onOpenAiAssistant={() => setIsAiModalOpen(true)} />

              <main className="flex-1 flex flex-col">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/khandesh" element={<KhandeshPage />} />
                  <Route path="/discover" element={<DiscoverPage />} />
                  <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
                  <Route path="/planner" element={<PlannerPage />} />
                  <Route path="/grocery-list" element={<GroceryListPage />} />
                  <Route path="/favorites" element={<FavoritesPage />} />
                  <Route path="/preferences" element={<PreferencesPage />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>

              {/* Floating Ask MealMate AI Button */}
              <button
                onClick={() => setIsAiModalOpen(true)}
                className="fixed bottom-6 right-6 z-40 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-amber-600 via-orange-500 to-emerald-600 hover:from-amber-700 hover:via-orange-600 hover:to-emerald-700 text-white font-bold text-sm shadow-2xl shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer group border-2 border-white/40"
                title="Ask MealMate AI"
                aria-label="Ask MealMate AI Assistant"
              >
                <div className="relative flex items-center justify-center">
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-yellow-300 animate-ping" />
                </div>
                <span className="hidden sm:inline font-serif font-bold tracking-wide">
                  Ask AI
                </span>
              </button>

              <Footer />
              <Toast />
              <AiAssistantModal
                isOpen={isAiModalOpen}
                onClose={() => setIsAiModalOpen(false)}
              />
            </div>
          </HashRouter>
        </PreferencesProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
