import Link from "next/link";
import React from "react";
import styled, { CSSObject } from "styled-components";

const linkStyle: CSSObject = {
  width: "4rem",
  height: "4rem",
  borderRight: "1rem solid #267E4F",
  borderLeft: "1rem solid #267E4F",
  borderTop: "1rem solid #267E4F",
  background: "rgba(0,0,0,0)",
  position: "relative",
  zIndex: 9999,
};

const LinkStyled = styled(Link)`
  ${linkStyle}
`;

export default function Logo() {
  return <LinkStyled href="/" />;
}
