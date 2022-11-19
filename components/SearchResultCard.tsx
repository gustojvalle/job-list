import React, { useEffect, useState } from "react";
import { Hit } from "react-instantsearch-core";
import styled, { CSSObject, ThemeProps } from "styled-components";
import marker from "../public/marker.png";
import ApplyNowButton from "./ApplyNowButton";
import { cardShadow } from "../styles/sharedStyles";

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
  "&:hover": {
    cursor: "pointer",
  },
};

const Button = styled.button`
  ${closeButtonStyle}
`;

const detailsStyles: CSSObject = {
  position: "relative",
  backgroundColor: "white",
  borderRadius: "6px",
  width: "100%",
  alignItems: "center",
  marginBottom: "1rem",
  ...cardShadow,
  "&[open] > summary > button": {
    transform: "rotate(0)",
    transformOrigin: "center",
    transition: ".25s transform ease",
  },
};

const Details = styled.details`
  ${detailsStyles};
  &[open] > summary {
    border-bottom: ${(props: any) => {
      console.log(props.theme.colors.gray50);
      return `2px solid ${props.theme.colors.quinternary}`;
    }}
  },
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
  marginTop: "1.5rem",
};
const BottomInfo = styled.div`
  ${bottomInfoStyles}
`;

const locationStyle: CSSObject = {
  display: "flex",
  alignItems: "center",
  color: "rgba(0,0,0,0.4)",
};
const LocationInfo = styled.p`
  ${locationStyle}
`;

const locationMarkerStyle: CSSObject = {
  height: "1.6rem",
  opacity: 0.5,
};
const LocationMarker = styled.img`
  ${locationMarkerStyle}
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
          <LocationInfo>
            <span>
              <LocationMarker alt="location marker icon" src={marker.src} />
            </span>
            {hit.city}
          </LocationInfo>
          <ApplyNowButton />
        </BottomInfo>
      </JobInfoContainer>
    </Details>
  );
}
