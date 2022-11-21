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
import { ThemeType } from "../types/ThemeTypes";

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

const extraControlStyles: CSSObject = {
  display: "flex",
  alignItems: "center",
  "& > label": {
    marginRight: "0.5rem",
    opacity: 0.7,
  },
};
const ExtraControlsCard = styled.div`
  ${extraControlStyles}
`;

function JobPageComponent(props: any) {
  const { hits, isLastPage, showMore } = useInfiniteHits<any>();
  const theme = useTheme() as ThemeType;

  return (
    <PageWrapper bgColour={theme.colors.quinternary} title="job-page">
      <H1>Job Openings</H1>
      <p>
        Yes, if you make it look like an electrical fire. When you do things
        right, people will not be sure you have done anything at all.
      </p>
      <ExtraControlsCard>
        <label>Results per page: </label>
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
      </ExtraControlsCard>
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
