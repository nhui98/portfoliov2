import { NAVBAR_LINKS } from "@constants/data";
import { render, screen } from "@testing-library/react";

import Flyout from "./Flyout";

describe("Navbar", () => {
  const closeFlyout = jest.fn();

  it("contains correct number of links", () => {
    render(<Flyout flyoutActive={false} closeFlyout={closeFlyout} />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(NAVBAR_LINKS.length);
  });

  it("displays correct link text", () => {
    render(<Flyout flyoutActive={false} closeFlyout={closeFlyout} />);

    const listItem1 = screen.getByRole("button", { name: /01. About/ });
    expect(listItem1).toBeInTheDocument();
    expect(listItem1).toHaveTextContent(/01.About/);

    const listItem2 = screen.getByRole("button", { name: /02. Experience/ });
    expect(listItem2).toBeInTheDocument();
    expect(listItem2).toHaveTextContent(/02.Experience/);

    const listItem3 = screen.getByRole("button", { name: /03. Projects/ });
    expect(listItem3).toBeInTheDocument();
    expect(listItem3).toHaveTextContent(/03.Projects/);

    const listItem4 = screen.getByRole("button", { name: /04. Contact/ });
    expect(listItem4).toBeInTheDocument();
    expect(listItem4).toHaveTextContent(/04.Contact/);
  });
});
