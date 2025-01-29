import { getFooterCopy } from '../../utils/utils';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer/Footer';

describe('Footer Component', () => {
    test('Renders correct copyright string when getFooterCopy returns true', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });

    test('Does not display "Contact us" link when the user is logged out', () => {
        const user = {
            isLoggedIn: false,
        };
        render(<Footer user={user} />);
        const contactLink = screen.queryByText('Contact us');
        expect(contactLink).toBeNull();
    });

    test('Displays "Contact us" link when the user is logged in', () => {
        const user = {
            isLoggedIn: true,
        };
        render(<Footer user={user} />);
        const contactLink = screen.getByText('Contact us');
        expect(contactLink).toBeInTheDocument();
    });
});
