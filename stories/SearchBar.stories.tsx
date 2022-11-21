import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBar from "../components/SearchBar";
import { ThemeType } from "../types/ThemeTypes";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { globalStyle, Theme } from "../styles/globals";

export default {
  title: "Components/SearchBar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const GlobalStyleSetup = createGlobalStyle<{
  theme: ThemeType;
}>`${globalStyle}`;

export const SearchBarTemplate: ComponentStory<typeof SearchBar> = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyleSetup />
    <SearchBar />
  </ThemeProvider>
);
SearchBarTemplate.parameters = {
  nextRouter: {},
};




