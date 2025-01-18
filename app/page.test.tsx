import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./page";
import { getProducts } from "./_service/apiService";

jest.mock("./_service/apiService", () => ({
  getProducts: jest.fn(),
}));

describe("Home", () => {
  it("renders a heading", async () => {
    (getProducts as jest.Mock).mockResolvedValue([]);

    render(await Home());

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
  });

  it("renders a heading which have text 'All Products'", async () => {
    (getProducts as jest.Mock).mockResolvedValue([]);

    render(await Home());

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toHaveTextContent("All Products");
  });
});
