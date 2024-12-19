import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "@jest/globals";
import Login from "./Login";

test("Should render 2 input elements", () => {
    render(<Login />);
    const emailInput = screen.getByRole("textbox");
    const passwordInput = screen.getByLabelText(/Password/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
});

test("Should render 2 label elements with the text 'Email' and 'Password'", () => {
    render(<Login />);
    const labelEmail = screen.getByText(/email/i);
    const labelPassword = screen.getByText(/password/i);
    expect(labelEmail).toBeInTheDocument();
    expect(labelPassword).toBeInTheDocument();
});

test("Should render a button with the text 'OK'", () => {
    render(<Login />);
    const button = screen.getByRole("button", { name: /ok/i });
    expect(button).toBeInTheDocument();
});

test("Should focus input when related label is clicked", async () => {
    render(<Login />);
    const user = userEvent.setup();

    const emailLabel = screen.getByLabelText(/email/i);
    const emailInput = screen.getByRole("textbox");

    await user.click(emailLabel);

    expect(emailInput).toHaveFocus();
});
