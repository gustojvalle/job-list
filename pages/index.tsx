import React from "react";
import styled, { CSSObject, useTheme } from "styled-components";
import SearchBar from "../components/SearchBar";
import PageWrapper from "../components/PageWrapper";
import { bgGradient } from "../styles/sharedStyles";
import { device } from "../styles/mediaQueries";

const RootDiv = styled.div``;

export default function Index(props: any) {
  const theme = useTheme();
  return (
    <PageWrapper bgColour={bgGradient} title="search-page">
      <h1>
        Find a job you love <br />
        with Paradigmo
      </h1>
      <SearchBar />
    </PageWrapper>
  );
}
