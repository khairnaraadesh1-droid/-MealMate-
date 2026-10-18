import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../translations/en';
import { mr } from '../translations/mr';
import { hi } from '../translations/hi';

const LanguageContext = createContext();

const translations = { en, mr, hi };

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('mealmate_lang');
      return saved === 'mr' || saved === 'hi' || saved === 'en' ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = (lang) => {
    if (lang === 'en' || lang === 'mr' || lang === 'hi') {
      setLanguageState(lang);
      try {
        localStorage.setItem('mealmate_lang', lang);
      } catch (err) {
        console.error('Failed to save language', err);
      }
    }
  };

  const t = (key, fallback = '') => {
    const activeDict = translations[language] || translations.en;
    if (activeDict && activeDict[key] !== undefined) {
      return activeDict[key];
    }
    // Fallback to English dictionary if missing in MR or HI
    if (translations.en && translations.en[key] !== undefined) {
      return translations.en[key];
    }
    return fallback || key;
  };

  /**
   * Helper to retrieve localized text from a multilingual object { en: '...', mr: '...', hi: '...' }
   */
  const getLocalized = (obj, fallback = '') => {
    if (!obj) return fallback;
    if (typeof obj === 'string') return obj;
    return obj[language] || obj.en || obj.mr || obj.hi || fallback;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getLocalized }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
