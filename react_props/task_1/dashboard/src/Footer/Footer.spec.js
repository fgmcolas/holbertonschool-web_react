import { render, screen } from "@testing-library/react";
import { expect, test } from "@jest/globals";
import Footer from "./Footer";
import { getCurrentYear, getFooterCopy } from "../utils/utils";

test("Should render footer with correct copyright text", () => {
    const expectedFooterText = `Copyright ${getCurrentYear()} - ${getFooterCopy(true)}`;
    render(<Footer />);
    const footerText = screen.getByText(expectedFooterText);
    expect(footerText).toBeInTheDocument();
});
