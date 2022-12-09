import { render, screen } from "@testing-library/react";
import App from "./App";

describe("test one", () => {
  test("renders declaration new", () => {
    render(<App />);
    const jsonElement = screen.getByTestId("json");
    expect(jsonElement).toHaveTextContent("declaration");
  });
  describe("test nested format new", () => {
    test("render fails", () => {
      render(<App />);
      const jsonElement = screen.getByTestId("format");
      expect(jsonElement).toHaveTextContent(":white_check_mart");
    });
    test("renders declaration new", () => {
      render(<App />);
      const jsonElement = screen.getByTestId("format");
      expect(jsonElement).toHaveTextContent("jest tests");
    });
  });
});
