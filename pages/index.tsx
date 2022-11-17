import React from "react";
import styled from "styled-components";
import { SearchBox } from "react-instantsearch-hooks-web";

const RootDiv = styled.div``;

export default function index() {
  return <div>{<SearchBox />}</div>;
}
