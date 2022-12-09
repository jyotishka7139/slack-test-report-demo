import { render, screen } from "@testing-library/react";
import App from "./App";

describe("test one", () => {
  test("renders declaration", () => {
    render(<App />);
    const jsonElement = screen.getByTestId("json");
    expect(jsonElement).toHaveTextContent("declaration");
  });
  test("renders version", () => {
    render(<App />);
    const jsonElement = screen.getByTestId("json");
    expect(jsonElement).toHaveTextContent("version");
  });
  describe("test nested format", () => {
    test("render fails", () => {
      render(<App />);
      const jsonElement = screen.getByTestId("format");
      expect(jsonElement).toHaveTextContent(":white_check_mart");
    });
    test("renders declaration", () => {
      render(<App />);
      const jsonElement = screen.getByTestId("format");
      expect(jsonElement).toHaveTextContent("jest tests");
    });
  });
  test("renders declaration", () => {
    render(<App />);
    const jsonElement = screen.getByTestId("format");
    expect(jsonElement).toHaveTextContent(":white_check_mark:");
  });
});
