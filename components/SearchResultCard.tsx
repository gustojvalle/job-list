import React, { useEffect, useState } from "react";
import { Hit } from "react-instantsearch-core";
import styled, { CSSObject } from "styled-components";

type Props = { hit: Hit; detailsOpen: any; setDetailsOpen: any };

const closeButtonStyle: CSSObject = {
  display: "flex",
  alignItems: "center",
  transform: "rotate(-45deg)",
  transition: ".25s transform ease",
  transformOrigin: "center",
  height: "fit-content",
  width: "fit-content",
  alignContent: "center",
  justifyContent: "center",
  color: "black",
  backgroundColor: "rgba(0,0,0,0)",
  "&:hover": {
    cursor: "pointer",
  },
};

const Button = styled.button`
  ${closeButtonStyle}
`;

const detailsStyles: CSSObject = {
  position: "relative",
  backgroundColor: "yellow",
  borderRadius: "6px",
  width: "100%",
  alignItems: "center",
  marginBottom: "1rem",
  "&[open] > summary > button": {
    transform: "rotate(0)",
    transformOrigin: "center",
    transition: ".25s transform ease",
  },
  "&[open] > summary ": {
    borderBottom: "2px solid black",
  },
};

const Details = styled.details`
  ${detailsStyles}
`;

const summaryStyle: CSSObject = {
  listStyle: "none",
  display: "flex",
  justifyContent: "space-between",
  padding: "0 1rem",
  alignItems: "center",
  height: "fit-content",
  "&:hover": {
    cursor: "pointer",
  },
};

const Summary = styled.summary`
  ${summaryStyle}
`;
const jobInfoContainerStyles: CSSObject = {
  padding: "1rem 1rem",
};
const JobInfoContainer = styled.div`
  ${jobInfoContainerStyles}
`;

const bottomInfoStyles: CSSObject = {
  display: "flex",
  justifyContent: "space-between",
};
const BottomInfo = styled.div`
  ${bottomInfoStyles}
`;
export default function SearchResultCard({
  hit,
  detailsOpen,
  setDetailsOpen,
}: Props) {
  const closeButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement & { id: string | Number };
    setDetailsOpen((prev: any) => ({
      ...prev,
      [target.id]: !prev[target.id],
    }));
  };
  return (
    <Details id={hit.id} open={detailsOpen[hit.id]}>
      <Summary>
        <h3>{hit.title}</h3>
        <Button
          id={hit.id}
          onMouseEnter={() => {
            console.log(hit.id);
          }}
          onClick={closeButtonHandler}
        >
          &#10005;
        </Button>
      </Summary>
      <JobInfoContainer>
        <div
          dangerouslySetInnerHTML={{ __html: hit.description }}
          key={hit.id}
        ></div>
        <BottomInfo>
          <p>{hit.city}</p>
          <button>Apply now</button>
        </BottomInfo>
      </JobInfoContainer>
    </Details>
  );
}
