import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ApplyNowButton from "../components/ApplyNowButton";
import Setup from "./Setup";

export default {
  title: "Components/ApplyNowButton",
  component: ApplyNowButton,
} as ComponentMeta<typeof ApplyNowButton>;

export const ApplyNowButtonTemplate: ComponentStory<typeof ApplyNowButton> =
  () => (
    <>
      <Setup>
        <ApplyNowButton />
      </Setup>
    </>
  );
