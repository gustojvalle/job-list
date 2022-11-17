import React from "react";
import styled, { CSSObject } from "styled-components";
import { SearchBox } from "react-instantsearch-hooks-web";
import SearchBar from "../components/SearchBar";
import PageWrapper from "../components/PageWrapper";

const RootDiv = styled.div``;

const h1Style: CSSObject = { textAlign: "center" };
const H1 = styled.h1`
  ${h1Style}
`;

export default function index(props: any) {
  return (
    <PageWrapper title="search-page">
      <H1>
        Find a job you love <br />
        with Paradigmo
      </H1>
      <SearchBar />
    </PageWrapper>
  );
}
