import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AboutPage from "./page";

describe("AboutPage", () => {
  it("renders a heading", () => {
    render(<AboutPage />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  it("renders a heading which have text 'About Us'", () => {
    render(<AboutPage />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toHaveTextContent("About Us");
  });
});
