import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

test('Renders and validates signin form elements', () => {
    render(<Login />);
    const inputElements = screen.getAllByRole('textbox');
    const emailInput = screen.getByText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /ok/i });
    expect(inputElements).toHaveLength(2);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});



