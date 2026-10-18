import React from 'react';
import { usePreferences } from '../context/PreferencesContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = () => {
  const { toast } = usePreferences();

  if (!toast) return null;

  const isSuccess = toast.type === 'success';
  const isInfo = toast.type === 'info';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-100 transition-all duration-300 transform translate-y-0 animate-bounce-short">
      {isSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />}
      {isInfo && <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />}
      {!isSuccess && !isInfo && <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0" />}
      
      <p className="text-sm font-medium pr-2">{toast.message}</p>
    </div>
  );
};
