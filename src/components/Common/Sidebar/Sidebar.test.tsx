import { SOCIAL_LINKS } from "@constants/data";
import { logRoles, render, screen } from "@testing-library/react";

import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  it("contains the correct number of social links", () => {
    render(<Sidebar />);

    const links = screen.getAllByRole("listitem");
    expect(links).toHaveLength(SOCIAL_LINKS.length);
  });

  it("has correct linkedin url", () => {
    render(<Sidebar />);

    expect(
      screen.getByRole("link", {
        name: /visit my linkedin page/,
      })
    ).toHaveAttribute("href", "https://www.linkedin.com/in/nathan-hui/");
  });

  it("has correct mail url", () => {
    render(<Sidebar />);

    expect(
      screen.getByRole("link", {
        name: /send me an email/,
      })
    ).toHaveAttribute("href", "mailto:hui.nathan9@gmail.com");
  });

  it("has correct linkedin url", () => {
    render(<Sidebar />);

    expect(
      screen.getByRole("link", {
        name: /visit my github page/,
      })
    ).toHaveAttribute("href", "https://github.com/nhui98");
  });
});
