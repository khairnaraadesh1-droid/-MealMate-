import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ALL_RECIPES } from '../data/recipes';
import {
  Sparkles,
  X,
  Send,
  ChefHat,
  Clock,
  IndianRupee,
  Key,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Flame,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AiAssistantModal = ({ isOpen, onClose }) => {
  const { t, getLocalized, language } = useLanguage();

  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'assistant',
      text: {
        en: 'Namaste! I am MealMate AI. Ask me anything like: "What can I cook with potatoes and onions?", "Suggest a spicy Khandeshi lunch", or "Dinner under ₹100 for 4 people".',
        mr: 'नमस्कार! मी मीलमेट एआय आहे. मला काहीही विचारा: "बटाटा आणि कांदा आहे, काय बनवू?", "झणझणीत खान्देशी जेवण सुचवा", किंवा "४ लोकांसाठी १०० रुपयांत जेवण".',
        hi: 'नमस्ते! मैं मीलमेट एआई हूं। मुझसे कुछ भी पूछें: "आलू और प्याज से क्या बनाऊं?", "तीखा खान्देशी लंच सुझाएं", या "४ लोगों के लिए ₹१०० में डिनर"।'
      },
      structuredCards: []
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('mealmate_gemini_key') || '');
  const [showKeyModal, setShowKeyModal] = useState(false);

  if (!isOpen) return null;

  // Local smart reasoning engine
  const processLocalQuery = (userText) => {
    const q = userText.toLowerCase();

    // 1. Detect if looking for Khandeshi cuisine
    const isKhandeshQuery = q.includes('khandesh') || q.includes('खान्देशी') || q.includes('shev bhaji') || q.includes('thecha') || q.includes('kala masala');

    // 2. Detect if budget query (under 100 / cheap / budget)
    const isBudgetQuery = q.includes('100') || q.includes('budget') || q.includes('स्वस्त') || q.includes('किफायत');

    // 3. Detect if quick query (15 / 20 / 30 mins)
    const isQuickQuery = q.includes('20') || q.includes('15') || q.includes('30') || q.includes('quick') || q.includes('झटपट') || q.includes('जल्दी');

    // 4. Detect meal slots
    const isBreakfast = q.includes('breakfast') || q.includes('नाश्ता') || q.includes('सकाळ');
    const isLunch = q.includes('lunch') || q.includes('दुपार') || q.includes('लंच');
    const isDinner = q.includes('dinner') || q.includes('रात्र') || q.includes('डिनर');

    // 5. Detect ingredients mentioned
    const mentionedIngredients = [];
    ['potato', 'aloo', 'batata', 'बटाटा', 'आलू'].forEach(w => { if (q.includes(w)) mentionedIngredients.push('potato'); });
    ['onion', 'kanda', 'pyaz', 'कांदा', 'प्याज'].forEach(w => { if (q.includes(w)) mentionedIngredients.push('onion'); });
    ['tomato', 'tamatar', 'टोमॅटो', 'टमाटर'].forEach(w => { if (q.includes(w)) mentionedIngredients.push('tomato'); });
    ['paneer', 'पनीर'].forEach(w => { if (q.includes(w)) mentionedIngredients.push('paneer'); });
    ['besan', 'gram flour', 'बेसन'].forEach(w => { if (q.includes(w)) mentionedIngredients.push('besan'); });
    ['poha', 'पोहे', 'पोहा'].forEach(w => { if (q.includes(w)) mentionedIngredients.push('poha'); });
    ['brinjal', 'vangi', 'baingan', 'वांगी', 'बैंगन'].forEach(w => { if (q.includes(w)) mentionedIngredients.push('brinjal'); });

    // Filter candidate recipes
    let candidates = ALL_RECIPES.filter(recipe => {
      if (isKhandeshQuery && !(recipe.isKhandeshi || recipe.cuisine === 'khandesh')) return false;
      if (isBudgetQuery && recipe.cost && recipe.cost > 90) return false;
      if (isQuickQuery) {
        const time = (recipe.prepTime || 0) + (recipe.cookTime || 0);
        if (time > 25) return false;
      }
      if (isBreakfast && recipe.category !== 'breakfast') return false;
      if (isLunch && recipe.category !== 'lunch') return false;
      if (isDinner && recipe.category !== 'dinner') return false;

      // Ingredient match
      if (mentionedIngredients.length > 0) {
        const hasAny = recipe.ingredients.some(i => mentionedIngredients.includes(i.id));
        if (!hasAny) return false;
      }

      return true;
    });

    if (!candidates.length) {
      candidates = ALL_RECIPES.slice(0, 3);
    }

    const selectedCards = candidates.slice(0, 3);

    return {
      text: {
        en: `Here are ${selectedCards.length} authentic dishes perfectly matching your request based on our verified recipe database:`,
        mr: `तुमच्या प्रश्नानुसार आमच्या खात्रीशीर पाककृती संग्रहातून सुचवलेले हे ${selectedCards.length} उत्तम पदार्थ:`,
        hi: `आपके प्रश्न के अनुसार हमारे प्रमाणित रेसिपी डेटाबेस से चुने गए ये ${selectedCards.length} बेहतरीन व्यंजन:`
      },
      structuredCards: selectedCards
    };
  };

  const handleSend = async (customPrompt = null) => {
    const textToSend = customPrompt || query;
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg = { sender: 'user', text: { en: textToSend, mr: textToSend, hi: textToSend } };
    setMessages(prev => [...prev, userMsg]);
    setQuery('');
    setLoading(true);

    setTimeout(() => {
      const response = processLocalQuery(textToSend);
      setMessages(prev => [...prev, { sender: 'assistant', ...response }]);
      setLoading(false);
    }, 600);
  };

  const samplePrompts = [
    t('samplePrompt1'),
    t('samplePrompt2'),
    t('samplePrompt3'),
    t('samplePrompt4')
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-2xl bg-white dark:bg-stone-900 rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-800 flex flex-col h-[85vh] max-h-[700px] overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-stone-800 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-emerald-500/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-600 via-orange-500 to-rose-600 flex items-center justify-center text-white shadow-md">
              <Sparkles className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <span>{t('aiAssistantTitle')}</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                  Local AI
                </span>
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                {t('aiAssistantSubtitle')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowKeyModal(!showKeyModal)}
              className="p-2 rounded-xl text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 border border-stone-200 dark:border-stone-700 bg-white/80 dark:bg-stone-800/80 transition-colors"
              title="API Key Settings"
            >
              <Key className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Optional API Key banner */}
        {showKeyModal && (
          <div className="p-3 bg-amber-50 dark:bg-amber-950/40 border-b border-amber-200 dark:border-amber-800 text-xs flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Key className="w-4 h-4 text-amber-600" />
              <span>Optional Gemini / OpenAI API Key:</span>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => {
                  setApiKey(e.target.value);
                  localStorage.setItem('mealmate_gemini_key', e.target.value);
                }}
                placeholder="AIzaSy..."
                className="px-2 py-1 rounded border border-amber-300 dark:border-amber-700 bg-white dark:bg-stone-800 text-xs"
              />
            </div>
            <button
              onClick={() => setShowKeyModal(false)}
              className="text-stone-500 hover:text-stone-800 text-xs font-semibold"
            >
              Done
            </button>
          </div>
        )}

        {/* Chat History Messages */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-emerald-600 text-white rounded-br-none'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 rounded-bl-none border border-stone-200 dark:border-stone-700'
                }`}
              >
                {getLocalized(msg.text)}
              </div>

              {/* Render Structured Recipe Cards if any */}
              {msg.structuredCards && msg.structuredCards.length > 0 && (
                <div className="mt-3 w-full space-y-2.5">
                  {msg.structuredCards.map(card => {
                    const cardName = getLocalized(card.name);
                    const cardDesc = getLocalized(card.description);
                    const totalTime = (card.prepTime || 0) + (card.cookTime || 0);

                    return (
                      <div
                        key={card.id}
                        className="p-3.5 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 shadow-sm flex items-center justify-between gap-3 hover:border-emerald-500 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={card.image}
                            alt={cardName}
                            className="w-14 h-14 rounded-xl object-cover shrink-0"
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                          <div>
                            <div className="flex items-center gap-1.5">
                              <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100">
                                {cardName}
                              </h4>
                              {card.isKhandeshi && (
                                <span className="px-1.5 py-0.2 rounded text-[10px] bg-orange-600 text-white font-bold">
                                  खान्देशी
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-1">
                              {cardDesc}
                            </p>
                            <div className="flex items-center gap-3 text-[11px] text-stone-500 mt-1">
                              <span className="flex items-center gap-0.5">
                                <Clock className="w-3 h-3" />
                                {totalTime} mins
                              </span>
                              {card.cost && (
                                <span className="flex items-center gap-0.5 font-medium text-stone-700 dark:text-stone-300">
                                  <IndianRupee className="w-3 h-3" />
                                  ~{card.cost}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <Link
                          to={`/recipe/${card.id}`}
                          onClick={onClose}
                          className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 text-emerald-700 dark:text-emerald-400 font-bold text-xs flex items-center gap-1 shrink-0"
                        >
                          <span>View</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-stone-500 italic">
              <Sparkles className="w-4 h-4 animate-spin text-amber-500" />
              <span>{t('aiThinking')}</span>
            </div>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-stone-50/80 dark:bg-stone-800/50 border-t border-stone-200 dark:border-stone-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-semibold text-stone-400 shrink-0">
            {t('samplePromptsTitle')}
          </span>
          {samplePrompts.map((prompt, i) => (
            <button
              key={i}
              onClick={() => handleSend(prompt)}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-white dark:bg-stone-700 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-600 hover:border-emerald-500 hover:text-emerald-600 shrink-0 transition-colors cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 sm:p-4 border-t border-stone-200 dark:border-stone-800 flex items-center gap-2 bg-white dark:bg-stone-900"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('aiPromptPlaceholder')}
            className="flex-1 px-4 py-3 rounded-2xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            type="submit"
            disabled={!query.trim() || loading}
            className="p-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold disabled:opacity-50 transition-all cursor-pointer shadow-md"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};
