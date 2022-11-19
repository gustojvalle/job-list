import "../styles/globals.ts";
import type { AppProps } from "next/app";
import icon from "../public/favicon.png";
import styled, {
  createGlobalStyle,
  CSSObject,
  ThemeProvider,
} from "styled-components";
import { SearchProvider } from "../customHooks/useSearch";
import { globalStyle } from "../styles/globals";
import Image from "next/image";
import { ThemeType } from "../types/ThemeTypes";

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

const Theme: CSSObject = {
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    primary: "#40476D",
    secondary: "#79B4A9",
    tertiary: "#D7F2BA",
    quarternary: "#9FA4C4",
    quinternary: "#cfe7bb",
    gray50: "rgba(224,224,224)",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyleSetup />
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
        <ThemeProvider theme={Theme}>
          <SearchProvider>
            <Component {...pageProps} />
          </SearchProvider>
        </ThemeProvider>
      </Root>
    </>
  );
}
