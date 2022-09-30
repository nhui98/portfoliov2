import { render, screen } from "@testing-library/react";

import Hero from "./Hero";

describe("Hero", () => {
  it("displays headings correctly", () => {
    render(<Hero />);

    const heading1 = screen.getByRole("heading", {
      name: /Hi, my name is/,
      level: 1,
    });
    expect(heading1).toBeInTheDocument();

    const heading2 = screen.getByRole("heading", {
      name: /Nathan Hui/,
      level: 2,
    });
    expect(heading2).toBeInTheDocument();

    const heading3 = screen.getByRole("heading", {
      name: /I'm a Web Developer./,
      level: 3,
    });
    expect(heading3).toBeInTheDocument();
  });

  it("contains correct resume link", () => {
    render(<Hero />);

    const link = screen.getByRole("link", { name: /Resume/ });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/documents/resume.pdf");
  });
});
