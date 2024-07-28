import { createContext, PropsWithChildren, useContext } from "react";

const ThemeProviderContext = createContext<{ name: string } | undefined>(
  undefined
);

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be wrapped inside ThemeProvider");
  }

  return context;
};

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProviderContext.Provider value={{ name: "astro" }}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export default ThemeProvider;
