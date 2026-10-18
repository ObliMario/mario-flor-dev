import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeSwitcher() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switcher">
      <button 
        onClick={toggleTheme}
        aria-checked={isDarkTheme}
        aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
        role="switch"
      >
        {isDarkTheme ? '☀️' : '🌙'}
      </button>
    </div>
  );
}

export default ThemeSwitcher;