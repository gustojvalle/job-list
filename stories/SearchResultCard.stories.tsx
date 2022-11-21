import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ApplyNowButton from "../components/ApplyNowButton";
import Setup from "./Setup";
import SearchResultCard from "../components/SearchResultCard";
import { BasicDoc, Hit } from "react-instantsearch-core";

export default {
  title: "Components/SearchResultsCard",
  component: SearchResultCard,
} as ComponentMeta<typeof SearchResultCard>;

export const SearchResultCardTemplate: ComponentStory<typeof ApplyNowButton> =
  () => (
    <>
      <Setup>
        <SearchResultCard
          hit={
            {
              _highlightResult: { company_name: undefined },
              objectID: "asdfjlsj",
              id: "kajsdhfkj",
              title: "lskdjfdls",
              description:
                "lakdsjfalsdfjasldkhfdlkjahsldfkjashdflkjasdhfljksdfhlsjkfhalsdkjh",
              city: "London UK ",
            } as unknown as Hit<BasicDoc>
          }
          detailsOpen={{}}
          setDetailsOpen={() => {}}
        />
      </Setup>
    </>
  );
