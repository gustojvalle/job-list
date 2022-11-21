import Link from "next/link";
import React from "react";
import { useInstantSearch } from "react-instantsearch-hooks-web";
import styled, { CSSObject } from "styled-components";

const divStyle: CSSObject = {
  backgroundColor: "rgba(0,0,0,0.3)",
  padding: "1rem",
  border: "1px solid gray",
  borderRadius: "8px",
};

const Div = styled.div`
  ${divStyle}
`;

const StyledLink = styled(Link)`
  ${divStyle}
`;

export default function StateIndicator({ hits }: { hits: any }) {
  const { status, error } = useInstantSearch();
  if (status === "idle" && hits.length === 0) {
    return (
      <StyledLink href="/">
        No results were found go back to home page
      </StyledLink>
    );
  } else if (status === "stalled" || status === "loading") {
    return <Div>...loading...</Div>;
  } else if (status === "error") {
    return <Div>{error?.message}</Div>;
  }
  return null;
}
