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
import Logo from "../components/Logo";

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

const loginButtonStyle: CSSObject = {
  position: "relative",
  zIndex: 99999,
  height: "fit-content",
  padding: "1rem 2rem",
  borderRadius: "8px",
  backgroundColor: "#267E4F",
  color: "white",
  "&:hover": {
    opacity: 0.9,
    border: "1.5px solid rgba(0,0,0, 0.2)",
  },
};

const LoginButton = styled.button`
  ${loginButtonStyle}
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
          <Logo />

          <LoginButton>Login</LoginButton>
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
