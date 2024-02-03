"use client";
import categories from "@/constants/categories";
import { transformString } from "@/helpers";
import { useSearchParams } from "next/navigation";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type ContextType = {
  searchValue: string;
  filterCategory: string;
  setSearchValue: (value: string) => void;
  setFilterCategory: (value: string) => void;
};

export const SearchContext = createContext({
  searchValue: "",
  filterCategory: transformString(categories[0], "lowercase"),
  setSearchValue: (value: string) => {},
  setFilterCategory: (value: string) => {},
});

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [searchValue, setSearchValue] =
    useState<ContextType["searchValue"]>("");
  const [filterCategory, setFilterCategory] = useState<
    ContextType["filterCategory"]
  >(transformString(categories[0], "lowercase"));
  return (
    <SearchContext.Provider
      value={{ searchValue, setSearchValue, filterCategory, setFilterCategory }}
    >
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
