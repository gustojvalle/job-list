import React from "react";
import styled, { CSSObject } from "styled-components";

const rootStyle: CSSObject = {
  color: "white",
  borderRadius: "5px",
  height: "fit-content",
  padding: "0.8rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  width: "8rem",
  "&::after": {
    content: "'>'",
  },
};
const Root = styled.button`
  ${rootStyle}
  background-color: ${(props: any) => props.theme.colors.primary};
`;

export default function ApplyNowButton() {
  return <Root>Apply Now</Root>;
}
