import Head from "next/head";
import React, { ReactNode } from "react";
import styled, { CSSObject } from "styled-components";
import favicon from "../public/favicon.png";

type Props = { children: ReactNode; title: string; bgColour?: string };

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

const Main = styled.div.attrs(({ bgColour }: { bgColour: string }) => ({
  bgColour,
}))`
  ${mainStyle}
  background:${({ bgColour }: { bgColour: string }) => bgColour}
`;

export default function PageWrapper({ children, title, bgColour }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>
      <Main bgColour={!bgColour ? "white" : bgColour}>{children}</Main>
    </>
  );
}
