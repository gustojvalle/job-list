import React from "react";
import { useInstantSearch } from "react-instantsearch-hooks-web";

export default function StateIndicator({ hits }: { hits: any }) {
  const { status, error } = useInstantSearch();
  console.log(status);
  if (status === "idle" && hits.length === 0) {
    return <div>...No Results...</div>;
  } else if (status === "stalled" || status === "loading") {
    return <div>...loading...</div>;
  } else if (status === "error") {
    return <div>{error?.message}</div>;
  }
  return null;
}
