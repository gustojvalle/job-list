import React, { useRef } from "react";

import {
  InstantSearch,
  HitsPerPage,
  useInfiniteHits,
} from "react-instantsearch-hooks-web";
import styled, { CSSObject, useTheme } from "styled-components";
import PageWrapper from "../components/PageWrapper";
import algoliasearch from "algoliasearch/lite";
import SearchResults from "../components/SearchResults";
import StateIndicator from "../components/StateIndicator";
const H1 = styled.h1``;

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ID || "",
  process.env.NEXT_PUBLIC_KEY || " "
);

const styleHPPage: CSSObject = {
  "& > select": {
    outline: "none",
    border: "none",
    borderRadius: "2px",
    "&:hover": {
      cursor: "pointer",
    },
  },
};
const StyledHPPage = styled(HitsPerPage)`
  ${styleHPPage}
`;

function JobPageComponent(props: any) {
  const { hits, isLastPage, showMore } = useInfiniteHits<any>();
  const theme = useTheme();

  return (
    <PageWrapper bgColour={theme.colors.quinternary} title="job-page">
      <H1>Job Openings</H1>
      <p>
        Just say anything, George, say what evers natural, the first thing that
        comes to your mind. Take that you mutated son-of-a-bitch. My pine, why
        you.
      </p>
      <label>Results per page</label>
      <StyledHPPage
        items={[
          { label: "10", value: 10, default: true },
          { label: "15", value: 15 },
          { label: "20", value: 20 },
          { label: "25", value: 25 },
          { label: "30", value: 30 },
          { label: "35", value: 35 },
          { label: "40", value: 40 },
          { label: "45", value: 45 },
          { label: "50", value: 50 },
          { label: "100", value: 100 },
        ]}
      />
      <SearchResults showMore={showMore} hits={hits} isLastPage={isLastPage} />
      <StateIndicator hits={hits} />
    </PageWrapper>
  );
}

export default function JobPage() {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={process.env.NEXT_PUBLIC_INDEX_NAME || ""}
      routing={true}
    >
      <JobPageComponent />
    </InstantSearch>
  );
}
