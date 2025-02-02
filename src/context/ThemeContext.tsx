import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core";

import detectDarkMode from "../utils/detectDarkMode";

interface ThemeContextProps {
  isDarkMode: boolean;
  colorScheme: string;
  handleDarkModeChange: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  colorScheme: "light",
  handleDarkModeChange: () => "",
});

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const computedColorScheme = useComputedColorScheme("light");

  const handleDarkModeChange = () => {
    setColorScheme(computedColorScheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    colorScheme === "dark" ? setIsDarkMode(true) : setIsDarkMode(false);
  }, [colorScheme, isDarkMode]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setColorScheme(newColorScheme);
      });
  }, [setColorScheme]);

  useEffect(() => {
    setColorScheme(detectDarkMode());
  }, []);

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, colorScheme, handleDarkModeChange }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
