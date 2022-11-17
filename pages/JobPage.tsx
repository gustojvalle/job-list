import React, { ReactElement } from "react";
import { useHits, SearchBox } from "react-instantsearch-hooks-web";
import styled from "styled-components";

const CardComponent = styled.div``;

export default function JobPage() {
  const { hits } = useHits<any>();
  console.log(hits);
  var parser = new DOMParser();
  const html = parser.parseFromString(hits[0]?.description, "text/xml");
  console.log(html);
  return (
    <div>
      <SearchBox />
      {hits.map((hit: any) => (
        <CardComponent key={hit.id}>
          <h3>{hit.title}</h3>
          {/* <div
            dangerouslySetInnerHTML={{ __html: hit.description }}
            key={hit.id}
          ></div> */}
        </CardComponent>
      ))}
      {/* <div dangerouslySetInnerHTML={{ __html: hit.description }}></div> */}
    </div>
  );
}
