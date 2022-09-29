import { render, screen } from "@testing-library/react";

import NavLink, { NavlinkProps } from "./NavLink";

const NavLinkMockProps: NavlinkProps = {
  id: 1,
  counter: "01.",
  text: "About",
  href: "/#about",
};

describe("NavLink", () => {
  it("uses props correctly", () => {
    render(<NavLink {...NavLinkMockProps} />);

    const link = screen.getByRole("button");
    expect(link).toBeInTheDocument;
    expect(link).toHaveTextContent(/01.About/);
  });
});
