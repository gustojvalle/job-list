import React from "react";
import { CSSObject, useTheme } from "styled-components";
import SearchBar from "../components/SearchBar";
import PageWrapper from "../components/PageWrapper";
import { bgGradient } from "../styles/sharedStyles";

export default function Index() {
  const theme = useTheme();
  return (
    <PageWrapper
      bgColour={bgGradient}
      title="search-page"
      extraStyle={
        {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        } as CSSObject
      }
    >
      <h1>
        Find a job you love &#x1FAF6; <br />
        with Paradigmo
      </h1>
      <SearchBar />
    </PageWrapper>
  );
}
