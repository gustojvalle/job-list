import Head from "next/head";
import React, { ReactNode } from "react";
import styled, { CSSObject } from "styled-components";
import favicon from "../public/favicon.png";

type Props = { children: ReactNode; title: string };

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 10rem 0 10rem;
  min-height: 100vh;
`;

const mainStyle: CSSObject = {};

const Main = styled.div`
  ${mainStyle}
`;

export default function PageWrapper({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>
      <Main>
        <Root>{children}</Root>
      </Main>
    </>
  );
}
