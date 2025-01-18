import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ContactPage from "./page";

describe("ContactPage", () => {
  it("renders a heading", () => {
    render(<ContactPage />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  it("renders a heading which have text 'Contact Us'", () => {
    render(<ContactPage />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toHaveTextContent("Contact Us");
  });

  it("should show a contact us form", () => {
    render(<ContactPage />);

    const label = screen.getByLabelText("Email");

    expect(label).toBeInTheDocument();
  });
});
