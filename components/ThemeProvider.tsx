// context/ThemeProvider.tsx
import React, { useEffect, useState, useCallback } from 'react';
import ThemeContext from '@/lib/theme.context';
import { getPreference, setPreference, getColors } from '@/lib/theme.helper';

interface ThemeProviderProps {
  children: React.ReactNode;
  storageKey: string;
  theme?: string; // Or whichever type your theme is
}

const color = getColors(); // Assuming getColors returns the correct type

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  storageKey,
  theme: startTheme
}) => {
  const [theme, setTheme] = useState<string>(
    startTheme ?? getPreference(storageKey)
  );

  useEffect(() => {
    setPreference(storageKey, theme);
  }, [storageKey, theme]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === color.dark ? color.light : color.dark);
  }, [theme, setTheme, color]);

  return (
    <ThemeContext.Provider value={{ theme, color, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
