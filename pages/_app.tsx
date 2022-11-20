import "../styles/globals.ts";
import type { AppProps } from "next/app";
import icon from "../public/favicon.png";
import styled, {
  createGlobalStyle,
  CSSObject,
  ThemeProvider,
} from "styled-components";
import { SearchProvider } from "../customHooks/useSearch";
import { globalStyle, Theme } from "../styles/globals";
import Image from "next/image";
import { ThemeType } from "../types/ThemeTypes";
import Link from "next/link";

const imageStyle: CSSObject = {
  position: "relative",
  zIndex: 99999,
  boxShadow: "9px 9px 20px #cccccc",
};

const ImageStyled = styled(Image)`
  ${imageStyle}
`;

const rootStyle: CSSObject = {
  position: "relative",
  height: "100%",
  padding: "2rem",
};

const Root = styled.div`
  ${rootStyle};
`;

const headerStyle: CSSObject = {
  display: "flex",
  justifyContent: "space-between",
};

const Header = styled.header`
  ${headerStyle}
`;

const GlobalStyleSetup = createGlobalStyle<{
  theme: ThemeType;
}>`${globalStyle}`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyleSetup />
      <Root>
        <Header>
          <Link href="/">
            <ImageStyled
              src={icon.src}
              alt="company's logo"
              width={60}
              height={60}
            />
          </Link>
          <button>Login</button>
        </Header>
        <ThemeProvider theme={Theme}>
          <SearchProvider>
            <Component {...pageProps} />
          </SearchProvider>
        </ThemeProvider>
      </Root>
    </>
  );
}
