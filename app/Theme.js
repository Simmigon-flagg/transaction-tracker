"use client"
import React, { createContext, useContext, useState } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: true,
});

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState(theme.config.initialColorMode);

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
      <ChakraProvider theme={{ ...theme, config: { ...theme.config, initialColorMode: colorMode } }}>
        {children}
      </ChakraProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
