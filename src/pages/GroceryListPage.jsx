import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { usePreferences } from '../context/PreferencesContext';
import {
  ShoppingCart,
  Plus,
  Trash2,
  Printer,
  Copy,
  CheckCircle2,
  Circle,
  IndianRupee,
  Sparkles,
  Check,
  PackageOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const GroceryListPage = () => {
  const { t, getLocalized } = useLanguage();
  const {
    groceryList,
    toggleGroceryItem,
    removeGroceryItem,
    clearCompletedGrocery,
    clearAllGrocery,
    addCustomGroceryItem,
    showToast
  } = usePreferences();

  const [newItemName, setNewItemName] = useState('');
  const [newItemAmount, setNewItemAmount] = useState('1');
  const [newItemUnit, setNewItemUnit] = useState('pack');
  const [newItemCategory, setNewItemCategory] = useState('vegetables');

  // Handle adding custom item
  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItemName.trim()) return;
    addCustomGroceryItem(newItemName, newItemAmount, newItemUnit, newItemCategory);
    setNewItemName('');
    setNewItemAmount('1');
  };

  // Group items by category
  const groupedGrocery = useMemo(() => {
    const groups = {
      vegetables: [],
      grains: [],
      pulses: [],
      dairy: [],
      spices: [],
      others: []
    };

    groceryList.forEach(item => {
      const cat = item.category || 'others';
      if (groups[cat]) {
        groups[cat].push(item);
      } else {
        groups.others.push(item);
      }
    });

    return groups;
  }, [groceryList]);

  // Total and completed counts
  const totalCount = groceryList.length;
  const completedCount = groceryList.filter(item => item.checked).length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // Estimated budget sum
  const totalEstimatedCost = useMemo(() => {
    return groceryList.reduce((sum, item) => sum + (item.cost || 25), 0);
  }, [groceryList]);

  // Format and copy list to clipboard (WhatsApp friendly)
  const handleCopyList = () => {
    if (!groceryList.length) return;

    let text = `🛒 *MealMate India — Grocery Shopping List*\n\n`;

    const categoryNames = {
      vegetables: '🥦 Vegetables & Produce',
      grains: '🌾 Grains & Flours',
      pulses: '🥣 Dals & Pulses',
      dairy: '🥛 Dairy',
      spices: '🌶️ Spices & Masalas',
      others: '📦 Essentials'
    };

    Object.keys(groupedGrocery).forEach(cat => {
      const items = groupedGrocery[cat];
      if (items.length > 0) {
        text += `*${categoryNames[cat] || cat}*\n`;
        items.forEach(it => {
          const status = it.checked ? '✅' : '⬜';
          const name = getLocalized(it.name);
          text += `${status} ${name} (${it.amount} ${it.unit})\n`;
        });
        text += `\n`;
      }
    });

    text += `*Est. Total Budget:* ~₹${totalEstimatedCost}\nGenerated via MealMate India`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      showToast(t('copiedToClipboard'), 'success');
      try {
        confetti({ particleCount: 20, spread: 60, origin: { y: 0.8 } });
      } catch (e) {}
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const categoryTitles = {
    vegetables: t('categoryProduce'),
    grains: t('categoryGrains'),
    pulses: t('categoryPulses'),
    dairy: t('categoryDairy'),
    spices: t('categorySpices'),
    others: t('categoryOthers')
  };

  return (
    <div className="flex-1 py-8 sm:py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full print-page">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-2">
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>{t('navGrocery')}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-50 font-serif tracking-tight">
            {t('groceryTitle')}
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
            {t('grocerySubtitle')}
          </p>
        </div>

        {/* Action Buttons: Copy & Print */}
        <div className="flex items-center gap-2.5 no-print">
          <button
            onClick={handleCopyList}
            disabled={totalCount === 0}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 active:scale-95 disabled:opacity-50 cursor-pointer"
          >
            <Copy className="w-4 h-4" />
            <span>{t('btnCopyList')}</span>
          </button>

          <button
            onClick={handlePrint}
            disabled={totalCount === 0}
            className="px-4 py-2.5 rounded-xl bg-white dark:bg-stone-800 hover:bg-stone-50 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>{t('btnPrintList')}</span>
          </button>
        </div>
      </div>

      {/* Progress & Estimated Budget Bar */}
      {totalCount > 0 && (
        <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm mb-8 space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-semibold">
            <span className="text-stone-600 dark:text-stone-400">
              Shopping Progress: <span className="text-stone-900 dark:text-stone-100 font-bold">{completedCount} of {totalCount} {t('purchasedItems')}</span> ({progressPercent}%)
            </span>
            <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 rounded-xl">
              <span>{t('estimatedGroceryBudget')}:</span>
              <span className="flex items-center gap-0.5 text-sm">
                <IndianRupee className="w-3.5 h-3.5" />
                ~{totalEstimatedCost}
              </span>
            </div>
          </div>

          {/* Progress track */}
          <div className="w-full bg-stone-100 dark:bg-stone-800 rounded-full h-2 overflow-hidden">
            <div
              className="bg-emerald-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* Quick Add Custom Item Form */}
      <form onSubmit={handleAddItem} className="p-4 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm mb-8 no-print">
        <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2.5">
          Add Custom Item
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder={t('addItemPlaceholder')}
            className="sm:col-span-5 px-4 py-2.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <input
            type="number"
            step="0.1"
            min="0.1"
            value={newItemAmount}
            onChange={(e) => setNewItemAmount(e.target.value)}
            placeholder="Qty"
            className="sm:col-span-2 px-3 py-2.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <select
            value={newItemUnit}
            onChange={(e) => setNewItemUnit(e.target.value)}
            className="sm:col-span-2 px-3 py-2.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="pack">pack</option>
            <option value="kg">kg</option>
            <option value="g">g</option>
            <option value="bunch">bunch</option>
            <option value="pieces">pieces</option>
            <option value="litres">litres</option>
          </select>

          <select
            value={newItemCategory}
            onChange={(e) => setNewItemCategory(e.target.value)}
            className="sm:col-span-2 px-3 py-2.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="vegetables">Produce</option>
            <option value="grains">Grains/Atta</option>
            <option value="pulses">Dals</option>
            <option value="dairy">Dairy</option>
            <option value="spices">Spices</option>
            <option value="others">Other</option>
          </select>

          <button
            type="submit"
            disabled={!newItemName.trim()}
            className="sm:col-span-1 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center disabled:opacity-50 cursor-pointer shadow-sm"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </form>

      {/* Categorized Grocery List */}
      {totalCount > 0 ? (
        <div className="space-y-6">
          {Object.keys(groupedGrocery).map(categoryKey => {
            const items = groupedGrocery[categoryKey];
            if (!items.length) return null;

            return (
              <div
                key={categoryKey}
                className="rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm overflow-hidden"
              >
                {/* Category Header */}
                <div className="px-5 py-3.5 bg-stone-50 dark:bg-stone-800/60 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between font-bold text-xs sm:text-sm text-stone-800 dark:text-stone-200 font-serif">
                  <span>{categoryTitles[categoryKey] || categoryKey}</span>
                  <span className="text-xs text-stone-400 font-normal">
                    {items.length} items
                  </span>
                </div>

                {/* Items in Category */}
                <div className="divide-y divide-stone-100 dark:divide-stone-800">
                  {items.map(item => {
                    const itemName = getLocalized(item.name);
                    const isChecked = item.checked;

                    return (
                      <div
                        key={item.id}
                        className={`p-3.5 sm:p-4 flex items-center justify-between gap-3 text-xs sm:text-sm transition-colors hover:bg-stone-50 dark:hover:bg-stone-800/40 ${
                          isChecked ? 'bg-stone-50/60 dark:bg-stone-800/20' : ''
                        }`}
                      >
                        <div
                          onClick={() => toggleGroceryItem(item.id)}
                          className="flex items-center gap-3 cursor-pointer flex-1"
                        >
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors shrink-0 ${
                              isChecked
                                ? 'bg-emerald-600 border-emerald-600 text-white'
                                : 'border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800'
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>

                          <span
                            className={`font-medium ${
                              isChecked
                                ? 'line-through text-stone-400 dark:text-stone-500'
                                : 'text-stone-800 dark:text-stone-200'
                            }`}
                          >
                            {itemName}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          <span className="font-bold text-xs px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                            {item.amount} {item.unit}
                          </span>

                          <button
                            onClick={() => removeGroceryItem(item.id)}
                            className="p-1.5 text-stone-400 hover:text-red-500 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors no-print cursor-pointer"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* List Clear Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-200 dark:border-stone-800 no-print">
            <button
              onClick={clearCompletedGrocery}
              disabled={completedCount === 0}
              className="text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 disabled:opacity-40 cursor-pointer"
            >
              {t('btnClearPurchased')}
            </button>

            <button
              onClick={clearAllGrocery}
              className="text-xs font-semibold text-red-500 hover:text-red-700 cursor-pointer"
            >
              {t('btnClearAll')}
            </button>
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm max-w-xl mx-auto">
          <PackageOpen className="w-16 h-16 text-stone-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-stone-800 dark:text-stone-200 mb-1">
            {t('emptyGroceryTitle')}
          </h3>
          <p className="text-xs text-stone-500 leading-relaxed mb-6">
            {t('emptyGrocerySubtitle')}
          </p>
        </div>
      )}
    </div>
  );
};
