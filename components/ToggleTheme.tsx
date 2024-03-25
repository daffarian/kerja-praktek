'use client';
import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect, useLayoutEffect } from 'react';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const localTheme = localStorage.getItem('theme');

      return localTheme || 'not-dark'; // Default to 'not-dark' if no local storage
    }
    return 'not-dark';
  });

  // Client-side preference check (optional)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setTheme(prefersDark ? 'dark' : 'not-dark');
    }
  }, []);

  // Optional: Set initial theme based on user preference using useLayoutEffect
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setTheme(prefersDark ? 'dark' : 'not-dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const root = document.getElementsByTagName('html')[0];
    root.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon">
      <Sun className="h-[1.2rem] w-[1.2rem] text-sky-500 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] text-sky-500 w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
