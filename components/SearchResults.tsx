import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { SearchBox, useInstantSearch } from "react-instantsearch-hooks-web";
import { useSearch } from "../customHooks/useSearch";
import SearchResultCard from "./SearchResultCard";

const Ul = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
`;

type Props = { showMore: any; hits: any; isLastPage: any };

export default function SearchResults({ showMore, isLastPage, hits }: Props) {
  const lastPos = useRef<HTMLLIElement>(null);
  console.log(hits);

  const { uiState, setUiState } = useInstantSearch();
  const { searchState, setSearchState } = useSearch();
  const [detailsOpen, setDetailsOpen] = useState({});

  useEffect(() => {
    console.log(hits);
  }, [hits]);
  useEffect(() => {
    setUiState({
      [process.env.NEXT_PUBLIC_INDEX_NAME || ""]: {
        query: searchState,
      },
    });
  }, [searchState, setUiState]);

  useEffect(() => {
    if (lastPos.current !== null && typeof showMore === "function") {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLastPage) {
            showMore();
          }
        });
      });

      observer.observe(lastPos.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [isLastPage, showMore]);
  return (
    <Ul>
      <SearchBox hidden={true} />
      {hits.map((hit: any) => (
        <SearchResultCard
          key={hit.id}
          hit={hit}
          detailsOpen={detailsOpen}
          setDetailsOpen={setDetailsOpen}
        />
      ))}
      <li ref={lastPos} aria-hidden={true}></li>
    </Ul>
  );
}
