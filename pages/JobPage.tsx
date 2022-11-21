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
<<<<<<< HEAD
import { device } from "../styles/mediaQueries";
=======

const H1 = styled.h1``;
>>>>>>> 99d2c39801d421d560c027859450855310a42b29

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ID || "",
  process.env.NEXT_PUBLIC_KEY || " "
);

const styleHPPage: CSSObject = {
  "& > select": {
    outline: "none",
    border: "none",
    borderRadius: "6px",
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
<<<<<<< HEAD
  marginBottom: "1rem",
=======
>>>>>>> 99d2c39801d421d560c027859450855310a42b29
  "& > label": {
    marginRight: "0.5rem",
    opacity: 0.7,
  },
};
const ExtraControlsCard = styled.div`
  ${extraControlStyles}
`;

const h2Style: CSSObject = { marginBottom: "2rem", marginTop: "2rem" };
const H2 = styled.h2`
  ${h2Style}
   @media ${device.laptop} {  
    max-width: 60vw
  },`;

function JobPageComponent() {
  const { hits, isLastPage, showMore } = useInfiniteHits<any>();
  const theme = useTheme() as ThemeType;

  return (
    <PageWrapper bgColour={theme.colors.quinternary} title="job-page">
      <h1>Job Openings &#x1F4BC;&#xA;</h1>
      <H2>
        Yes, if you make it look like an electrical fire. When you do things
        right, people will not be sure you have done anything at all.
      </H2>
      {hits.length > 0 && (
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
      )}
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
