import React, { useEffect, useRef, useState } from "react";
import styled, { CSSObject } from "styled-components";
import { SearchBox, useInstantSearch } from "react-instantsearch-hooks-web";
import { useSearch } from "../customHooks/useSearch";
import SearchResultCard from "./SearchResultCard";
import { device } from "../styles/mediaQueries";

const ulStyle: CSSObject = { listStyleType: "none", width: "100%", padding: 0 };

const Ul = styled.ul`
   @media ${device.laptop} {  
    max-width: 60vw
  },
  ${ulStyle}
`;

type Props = { showMore: any; hits: any; isLastPage: any };

export default function SearchResults({ showMore, isLastPage, hits }: Props) {
  const lastPos = useRef<HTMLLIElement>(null);
  const { uiState, setUiState } = useInstantSearch();
  const { searchState, setSearchState } = useSearch();
  const [detailsOpen, setDetailsOpen] = useState({});

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
        <li key={hit.id}>
          <SearchResultCard
            hit={hit}
            detailsOpen={detailsOpen}
            setDetailsOpen={setDetailsOpen}
          />
        </li>
      ))}
      <li ref={lastPos} aria-hidden={true}></li>
    </Ul>
  );
}
