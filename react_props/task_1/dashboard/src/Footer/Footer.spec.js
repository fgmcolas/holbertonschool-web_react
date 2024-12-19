import { render, screen } from "@testing-library/react";
import { expect, test } from "@jest/globals";
import Footer from "./Footer";

test("Should render footer with correct copyright text", () => {
    render(<Footer />);
    const footerText = screen.getByText('Copyright {getCurrentYear} - Holberton School');
    expect(footerText).toBeInTheDocument();
});
