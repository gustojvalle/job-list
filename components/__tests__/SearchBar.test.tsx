import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "../SearchBar";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Home", () => {
  useRouter.mockImplementation(() => ({
    route: "/yourRoute",
    pathname: "/yourRoute",
    query: "",
    asPath: "",
  }));
  it("renders the Search Bar", () => {
    render(<SearchBar />);
  });

  it("checks the placeholder is there", () => {
    const { getAllByPlaceholderText } = render(<SearchBar />);
    expect(
      getAllByPlaceholderText("Search jobs by keyword or location")
    ).toBeDefined();
  });
});
