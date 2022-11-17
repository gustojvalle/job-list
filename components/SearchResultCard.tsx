import React from "react";
import { Hit } from "react-instantsearch-core";
import styled from "styled-components";

type Props = { hit: Hit };

const CardComponent = styled.div`
  height: 5rem;
  background-color: yellow;
  border-radius: 6px;
  width: 100%;
`;

export default function SearchResultCard({ hit }: Props) {
  return (
    <CardComponent key={hit.id}>
      <h3>{hit.title}</h3>
      {/* <div
              dangerouslySetInnerHTML={{ __html: hit.description }}
              key={hit.id}
            ></div> */}
    </CardComponent>
  );
}
