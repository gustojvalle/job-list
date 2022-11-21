import React, { ReactNode } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { globalStyle, Theme } from "../styles/globals";
import { ThemeType } from "../types/ThemeTypes";

const GlobalStyleSetup = createGlobalStyle<{
  theme: ThemeType;
}>`${globalStyle}`;

export default function Setup({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyleSetup />
      {children}
    </ThemeProvider>
  );
}
