import React, { createContext, ReactNode, useContext, useState } from "react";

type SearchContextType = {
  searchState: string;
  setSearchState: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchContext = createContext<SearchContextType>({
  searchState: "",
  setSearchState: () => null,
});

export const SearchProvider: React.FC<any> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [searchState, setSearchState] = useState<string>("");

  return (
    <SearchContext.Provider value={{ searchState, setSearchState }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): SearchContextType => {
  const { searchState, setSearchState } =
    useContext<SearchContextType>(SearchContext);
  return { searchState, setSearchState };
};
