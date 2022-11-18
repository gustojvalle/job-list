import React from "react";
import styled, { CSSObject, useTheme } from "styled-components";
import { SearchBox } from "react-instantsearch-hooks-web";
import SearchBar from "../components/SearchBar";
import PageWrapper from "../components/PageWrapper";

const RootDiv = styled.div``;

const h1Style: CSSObject = { textAlign: "center" };
const H1 = styled.h1`
  ${h1Style}
`;

export default function Index(props: any) {
  const theme = useTheme();
  console.log(theme);
  return (
    <PageWrapper
      bgColour={`background: rgb(255,255,255);
background: linear-gradient(153deg, rgba(255,255,255,1) 6%, rgba(184,205,174,1) 25%, rgba(207,231,187,1) 43%, rgba(159,164,196,1) 74%, rgba(186,202,191,1) 97%);`}
      title="search-page"
    >
      <H1>
        Find a job you love <br />
        with Paradigmo
      </H1>
      <SearchBar />
    </PageWrapper>
  );
}
