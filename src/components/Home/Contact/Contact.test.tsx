import { render, screen } from "@testing-library/react";

import Contact from "./Contact";

describe("Contact", () => {
  it("contains the correct header", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading", {
      level: 2,
      name: /04. Contact me/,
    });
    expect(heading).toBeInTheDocument();
  });

  it("has the correct link to mail", () => {
    render(<Contact />);

    const link = screen.getByRole("link", { name: /Message me/ });
    expect(link).toHaveAttribute("href", "mailto:hui.nathan9@gmail.com");
  });
});
