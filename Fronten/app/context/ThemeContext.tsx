import React, { createContext, useState, useContext, ReactNode } from "react";

// Types
export type Colors = {
  background: string;
  card: string;
  text: string;
  subText: string;
  primary: string;
  border: string;
};

export type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  colors: Colors;
};

// Create context
const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
  colors: {
    background: "#E8FFF9",
    card: "#FFFFFF",
    text: "#333",
    subText: "#888",
    primary: "#1ABC9C",
    border: "#EEE",
  },
});

type ThemeProviderProps = { children: ReactNode };

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  const colors: Colors = isDarkMode
    ? {
        background: "#121212",
        card: "#1E1E1E",
        text: "#FFFFFF",
        subText: "#AAAAAA",
        primary: "#1ABC9C",
        border: "#333",
      }
    : {
        background: "#E8FFF9",
        card: "#FFFFFF",
        text: "#333",
        subText: "#888",
        primary: "#1ABC9C",
        border: "#EEE",
      };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook
export const useTheme = (): ThemeContextType => useContext(ThemeContext);
