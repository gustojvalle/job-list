import React from "react";
import Logo from "../components/Logo";
import PageWrapper from "../components/PageWrapper";

export default function Custom404() {
  return (
    <PageWrapper title="404 not found">
      <h1>404 | Page not found</h1>
      <Logo />
    </PageWrapper>
  );
}
