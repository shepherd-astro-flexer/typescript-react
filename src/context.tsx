import { createContext, PropsWithChildren, useContext } from "react";

const GlobalContextProvider = createContext<{ name: string } | undefined>(
  undefined
);

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <GlobalContextProvider.Provider value={{ name: "amor" }}>
      {children}
    </GlobalContextProvider.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContextProvider);

  if (context === undefined) {
    throw new Error("useGlobalContext must be used within GlobalProvider");
  }
  // we should be returning
  return context;
};

export default GlobalProvider;
