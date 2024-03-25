// context/ThemeContext.js
import { createContext } from 'react';

export default createContext({
  theme: undefined,
  color: undefined,
  setTheme: () => {},
  toggleTheme: () => {}
});
