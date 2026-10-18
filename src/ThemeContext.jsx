import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Verificar si hay una preferencia guardada en localStorage
  const savedTheme = localStorage.getItem('theme');
  const [isDarkTheme, setIsDarkTheme] = useState(
    savedTheme ? savedTheme === 'dark' : true // Por defecto es oscuro si no hay preferencia
  );

  // Función para cambiar el tema
  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  // Aplicar la clase del tema al elemento raíz cuando cambie
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};