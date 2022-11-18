import { useRouter } from "next/router";
import React from "react";
import styled, { CSSObject } from "styled-components";
import { useSearch } from "../customHooks/useSearch";

const formStyle: CSSObject = {
  width: "100%",
  display: "flex",
  backgroundColor: "white",
  borderRadius: "6px",
  overflow: "hidden",
};
const Form = styled.form`
  ${formStyle}
`;

const inpuStyle: CSSObject = {
  width: "100%",
  padding: "1rem",
  border: "none",
  outline: "none",
};
const Input = styled.input`
  ${inpuStyle}
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
      <button type="submit">Go</button>
    </Form>
  );
}
