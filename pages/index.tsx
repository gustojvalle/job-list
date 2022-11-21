import React from "react";
import styled, { CSSObject, useTheme } from "styled-components";
import SearchBar from "../components/SearchBar";
import PageWrapper from "../components/PageWrapper";
import { bgGradient } from "../styles/sharedStyles";

const RootDiv = styled.div``;

const h1Style: CSSObject = { textAlign: "center" };
const H1 = styled.h1`
  ${h1Style}
`;

export default function Index(props: any) {
  const theme = useTheme();
  return (
    <PageWrapper bgColour={bgGradient} title="search-page">
      <H1>
        Find a job you love <br />
        with Paradigmo
      </H1>
      <SearchBar />
    </PageWrapper>
  );
}
