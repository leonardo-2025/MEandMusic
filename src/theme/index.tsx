
import React, { createContext, useContext, useMemo, useState, ReactNode } from 'react';



type ThemeColors = { background: string; surface: string; text: string; subtle: string; primary: string; };

type Theme = { name: 'light' | 'dark'; colors: ThemeColors; };



const LightTheme: Theme = { name: 'light', colors: { background: '#F0F2F5', surface: '#FFFFFF', text: '#0A0A0A', subtle: '#8A8A8A', primary: '#A8B5C8' } };

const DarkTheme: Theme = { name: 'dark', colors: { background: '#0A0A0A', surface: '#1A1A1E', text: '#F0F0F0', subtle: '#6B6B6B', primary: '#A8B5C8' } };



type ThemeContextValue = { theme: Theme; toggleTheme: () => void; };

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);



export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const theme = mode === 'dark' ? DarkTheme : LightTheme;

  const toggleTheme = () => setMode((m) => (m === 'light' ? 'dark' : 'light'));

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;

};



export const useTheme = () => {

  const ctx = useContext(ThemeContext);

  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');

  return ctx;

};

