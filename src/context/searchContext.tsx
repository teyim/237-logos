"use client";
import { useSearchParams } from "next/navigation";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type ContextType = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

export const SearchContext = createContext({
  searchValue: "",
  setSearchValue: (value: string) => {},
});

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [searchValue, setSearchValue] =
    useState<ContextType["searchValue"]>("");
  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useThemeContext must be used inside the ThemeProvider");
  }

  return context;
};
