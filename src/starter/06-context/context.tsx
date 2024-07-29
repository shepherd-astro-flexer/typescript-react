import { createContext, PropsWithChildren, useContext, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
);

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be wrapped inside ThemeProvider");
  }

  return context;
};

const ThemeProvider = ({
  children,
  defaultTheme = "dark",
}: PropsWithChildren<{ defaultTheme?: Theme }>) => {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export default ThemeProvider;
