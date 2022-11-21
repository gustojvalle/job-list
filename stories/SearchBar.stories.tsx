import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBar from "../components/SearchBar";
import Setup from './Setup';

export default {
  title: "Components/SearchBar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

export const SearchBarTemplate: ComponentStory<typeof SearchBar> = (args) => (
  <Setup><SearchBar /></Setup>
);
SearchBarTemplate.parameters = {
  nextRouter: {
    path: "/profile/[id]",
    asPath: "/profile/lifeiscontent",
    query: {
      id: "lifeiscontent",
    },
  },
};




