import React from 'react';
import axios from 'axios';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../../App';

const { StyleSheetTestUtils } = require("aphrodite");

describe('CourseList Component', () => {
    jest.mock('axios');
    test('renders 5 different rows when user is logged in', async () => {
        axios.get.mockResolvedValueOnce({
            data: {
                courses: [
                    { id: 1, name: 'ES6', credit: 60 },
                    { id: 2, name: 'Webpack', credit: 20 },
                    { id: 3, name: 'React', credit: 40 },
                ],
            },
        });
        render(<App />);
        const emailInput = screen.getByLabelText(/Email/i);
        const passwordInput = screen.getByLabelText(/Password/i);
        const loginButton = screen.getByRole('button', { name: /ok/i });
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });
        fireEvent.click(loginButton);
        await waitFor(() => screen.getByText('ES6'));
        const rows = screen.getAllByRole('row');
        expect(rows).toHaveLength(5);
    });
});

StyleSheetTestUtils.suppressStyleInjection();
