import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useReducer, useEffect, useLayoutEffect } from 'react';
import { Button } from '@/components/ui/button';

const initialState = {
  access:
    typeof window !== 'undefined'
      ? window.localStorage.getItem('access')
      : false,
  refresh:
    typeof window !== 'undefined'
      ? window.localStorage.getItem('refresh')
      : false,
  isAuthenticated: null,
  user: null
};

function reducer(state:any, action:any) {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
}

export function ModeToggle() {
  const [state, dispatch] = useReducer(reducer, {
    theme: localStorage.getItem('theme') || 'not-dark'
  });

  // Client-side preference check (optional)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      dispatch({
        type: 'SET_THEME',
        payload: prefersDark ? 'dark' : 'not-dark'
      });
    }
  }, []);

  // Optional: Set initial theme based on user preference using useLayoutEffect
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      dispatch({
        type: 'SET_THEME',
        payload: prefersDark ? 'dark' : 'not-dark'
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', state.theme);
    const root = document.getElementsByTagName('html')[0];
    root.classList.toggle('dark', state.theme === 'dark');
  }, [state.theme]);

  const toggleTheme = () => {
    dispatch({
      type: 'SET_THEME',
      payload: state.theme === 'dark' ? 'light' : 'dark'
    });
  };

  return (
    <Button onClick={toggleTheme} variant="ghost" size="icon">
      <Sun className="h-[1.2rem] w-[1.2rem] text-sky-500 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] text-sky-500 w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
