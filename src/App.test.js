import { render, screen } from "@testing-library/react";
import App from "./App";

describe("test one", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText("src/App.js");
    expect(linkElement).toBeInTheDocument();
  });
  describe("test nested", () => {
    test("renders learn react link", () => {
      render(<App />);
      const imgElement = screen.getByAltText("logo");
      expect(imgElement).toBeInTheDocument();
    });
    test("renders learn react link", () => {
      render(<App />);
      const linkElement = screen.getByText("src/App.js");
      expect(linkElement).toBeInTheDocument();
    });
  });
});
