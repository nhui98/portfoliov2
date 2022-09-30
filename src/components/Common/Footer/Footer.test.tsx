import { SOCIAL_LINKS } from "@constants/data";
import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer", () => {
  it("contains the correct number of social links", () => {
    render(<Footer />);

    const links = screen.getAllByRole("listitem");
    expect(links).toHaveLength(SOCIAL_LINKS.length);
  });

  it("has correct linkedin url", () => {
    render(<Footer />);

    expect(
      screen.getByRole("link", {
        name: /visit my linkedin page/,
      })
    ).toHaveAttribute("href", "https://www.linkedin.com/in/nathan-hui/");
  });

  it("has correct mail url", () => {
    render(<Footer />);

    expect(
      screen.getByRole("link", {
        name: /send me an email/,
      })
    ).toHaveAttribute("href", "mailto:hui.nathan9@gmail.com");
  });

  it("has correct linkedin url", () => {
    render(<Footer />);

    expect(
      screen.getByRole("link", {
        name: /visit my github page/,
      })
    ).toHaveAttribute("href", "https://github.com/nhui98");
  });
});
