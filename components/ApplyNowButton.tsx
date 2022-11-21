import React from "react";
import styled, { CSSObject } from "styled-components";
import { ThemeType } from "../types/ThemeTypes";

const rootStyle: CSSObject = {
  color: "white",
  borderRadius: "8px",
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
  &:hover {
    background-color: ${({ theme }: { theme: ThemeType }) =>
      theme.colors.primaryHover};
  }
  background-color: ${({ theme }: { theme: ThemeType }) =>
    theme.colors.primary};
`;

export default function ApplyNowButton() {
  return <Root>Apply Now</Root>;
}
