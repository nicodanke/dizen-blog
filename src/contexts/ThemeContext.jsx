import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import baseTheme from '../components/StyledComponents/Theme';

// Create light and dark theme variants
const themes = {
    light: {
        ...baseTheme,
        mode: 'light',
        body: {
            background: "#FFF",
            text: "#333",
            headers: "#000"
        },
        colors: {
            ...baseTheme.colors,
            background: "#FFF",
            surface: "#F5F5F5",
            text: "#333",
            textSecondary: "#666"
        }
    },
    dark: {
        ...baseTheme,
        mode: 'dark',
        body: {
            background: "#000",
            text: "#888",
            headers: "#FFF"
        },
        colors: {
            ...baseTheme.colors,
            background: "#000",
            surface: "#1A1A1A",
            text: "#FFF",
            textSecondary: "#888"
        }
    }
};

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeContextProvider');
    }
    return context;
};

// Function to detect system theme preference
const getSystemThemePreference = () => {
    if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark'; // Fallback to dark if can't detect
};

export const ThemeContextProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState(() => {
        // Get saved theme from localStorage
        const savedTheme = localStorage.getItem('themeMode');
        if (savedTheme) {
            return savedTheme;
        }
        // If no saved theme, use system preference
        return getSystemThemePreference();
    });

    useEffect(() => {
        // Save theme preference to localStorage
        localStorage.setItem('themeMode', themeMode);
    }, [themeMode]);

    // Listen for system theme changes and update automatically
    useEffect(() => {
        if (typeof window !== 'undefined' && window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

            const handleSystemThemeChange = (e) => {
                // Always update to match system preference
                const newTheme = e.matches ? 'dark' : 'light';
                setThemeMode(newTheme);
                // Update localStorage to reflect the new system preference
                localStorage.setItem('themeMode', newTheme);
            };

            // Modern browsers
            if (mediaQuery.addEventListener) {
                mediaQuery.addEventListener('change', handleSystemThemeChange);
                return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
            }
            // Legacy browsers
            else if (mediaQuery.addListener) {
                mediaQuery.addListener(handleSystemThemeChange);
                return () => mediaQuery.removeListener(handleSystemThemeChange);
            }
        }
    }, []);

    const toggleTheme = () => {
        setThemeMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
    };

    const value = {
        themeMode,
        toggleTheme,
        theme: themes[themeMode]
    };

    return (
        <ThemeContext.Provider value={value}>
            <StyledThemeProvider theme={themes[themeMode]}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

