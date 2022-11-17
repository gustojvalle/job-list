import { createContext } from "react";

type SearchContextType = {
  searchState: string;
  setSearchState: (...args: any) => null;
};

export const SearchContext = createContext<SearchContextType>({
  searchState: "",
  setSearchState: () => null,
});
