import "../styles/globals.ts";
import type { AppProps } from "next/app";
import icon from "../public/favicon.png";
import styled, {
  createGlobalStyle,
  CSSObject,
  ThemedBaseStyledInterface,
  ThemeProvider,
} from "styled-components";
import { useState } from "react";
import { SearchProvider } from "../customHooks/useSearch";
import { globalStyle } from "../styles/globals";
import Image from "next/image";

const imageStyle: CSSObject = {};

const ImageStyled = styled(Image)`
  ${imageStyle}
`;

const rootStyle: CSSObject = {
  backgroundColor: "blue",
  position: "relative",
  padding: "4rem",
};

const Root = styled.div`
  ${rootStyle}
`;

const headerStyle: CSSObject = {
  display: "flex",
  justifyContent: "space-between",
};
const Header = styled.header`
  ${headerStyle}
`;

const GlobalStyleSetup = createGlobalStyle`${globalStyle}`;

const Theme = {
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    primary: "#40476D",
    secondary: "#79B4A9",
    tertiary: "#D7F2BA",
    quarternary: "#9FA4C4",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Root>
      <Header>
        <ImageStyled
          src={icon.src}
          alt="company's logo"
          width={60}
          height={60}
        />
        <button>Login</button>
      </Header>
      <GlobalStyleSetup />
      <ThemeProvider theme={Theme}>
        <SearchProvider>
          <Component {...pageProps} />
        </SearchProvider>
      </ThemeProvider>
    </Root>
  );
}
