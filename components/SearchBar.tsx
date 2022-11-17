import { useRouter } from "next/router";
import React from "react";
import { useSearch } from "../customHooks/useSearch";

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
    <form onSubmit={submitHandler}>
      <input type="search" name="query" id="query" />
      <button type="submit">Go</button>
    </form>
  );
}
