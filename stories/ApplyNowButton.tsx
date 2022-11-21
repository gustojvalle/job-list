import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ApplyNowButton from "../components/ApplyNowButton";

export default {
  title: "Components/SearchBar",
  component: ApplyNowButton,
} as ComponentMeta<typeof ApplyNowButton>;

export const SearchBarTemplate: ComponentStory<typeof ApplyNowButton> = (
  args
) => <ApplyNowButton />;
SearchBarTemplate.parameters = {
  nextRouter: {
    path: "/profile/[id]",
    asPath: "/profile/lifeiscontent",
    query: {
      id: "lifeiscontent",
    },
  },
};
