import Head from "next/head";
import React, { ReactNode } from "react";
import styled, { CSSObject } from "styled-components";
import favicon from "../public/favicon.png";

type Props = {
  children: ReactNode;
  title: string;
  bgColour?: string;
  extraStyle?: CSSObject;
};

const mainStyle: CSSObject = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10rem 2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
  minWidth: "100vw",
};

const Main = styled.div.attrs(
  ({ bgColour, extraStyle }: { bgColour: string; extraStyle?: CSSObject }) => ({
    bgColour,
    extraStyle,
  })
)`
  ${mainStyle}
  ${({ extraStyle }: { extraStyle: CSSObject }) => extraStyle}
  background:${({ bgColour }: { bgColour: string }) => bgColour}
`;

export default function PageWrapper({
  children,
  title,
  bgColour,
  extraStyle,
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>
      <Main bgColour={!bgColour ? "white" : bgColour} extraStyle={extraStyle}>
        {children}
      </Main>
    </>
  );
}
