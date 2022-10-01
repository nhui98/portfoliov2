import { COMPANY_EXPERIENCE } from "@constants/data";
import { logRoles, render, screen } from "@testing-library/react";

import Experience from "./Experience";

describe("Experience", () => {
  it("contains a header", () => {
    const { container } = render(<Experience />);
    logRoles(container);
    const header = screen.getByRole("heading", { level: 2 });
    expect(header).toBeInTheDocument();
  });

  it("displays the correct number of companies", () => {
    render(<Experience />);

    const companies = screen.getAllByRole("listitem", { name: /company/ });
    expect(companies).toHaveLength(COMPANY_EXPERIENCE.length);
  });

  it("displays the correct number of responsibilities", () => {
    render(<Experience />);

    const length = COMPANY_EXPERIENCE.reduce(
      (prevValue, { responsibilities }) => prevValue + responsibilities.length,
      0
    );

    const responsiblity = screen.getAllByRole("listitem", {
      name: /responsiblity/,
    });
    expect(responsiblity).toHaveLength(length);
  });
});
