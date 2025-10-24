import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { useTranslation } from 'react-i18next';

function ThemeSwitcher() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <div className="theme-switcher">
      <button 
        onClick={toggleTheme}
        aria-pressed={isDarkTheme}
        aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
        role="switch"
      >
        {isDarkTheme ? '☀️' : '🌙'}
      </button>
    </div>
  );
}

export default ThemeSwitcher;