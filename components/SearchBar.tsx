import { useRouter } from "next/router";
import React from "react";
import styled, { CSSObject } from "styled-components";
import { useSearch } from "../customHooks/useSearch";
import magnifierIcon from "../public/magnifier.png";
import { device } from "../styles/mediaQueries";
import { cardShadow } from "../styles/sharedStyles";

const formStyle: CSSObject = {
  width: "100%",
  display: "flex",
  backgroundColor: "white",
  borderRadius: "6px",
  overflow: "hidden",
  padding: "1rem",
  ...cardShadow,
};
const Form = styled.form`
  ${formStyle}
   @media ${device.laptop} {  
    max-width: 60vw
  },
`;

const inpuStyle: CSSObject = {
  width: "100%",
  padding: "none",
  border: "none",
  outline: "none",
};
const Input = styled.input`
  ${inpuStyle}
`;

const searchIconStyles: CSSObject = {
  display: "flex",
  padding: "0.2rem",
  opacity: 0.5,
  height: "1.5rem",
};
const SearchIcon = styled.img`
  ${searchIconStyles}
`;

export default function SearchBar() {
  const { searchState, setSearchState } = useSearch();
  const router = useRouter();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement & {
      query: { value: string };
    };
    setSearchState(target.query.value);
    router.push(
      `/JobPage?development_jobs_index[query]="${target.query.value}"`
    );
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input
        placeholder="Search jobs by keyword or location"
        type="search"
        name="query"
        id="query"
      />
      <button type="submit">
        <SearchIcon src={magnifierIcon.src} />
      </button>
    </Form>
  );
}
