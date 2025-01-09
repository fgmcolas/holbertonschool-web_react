import { render, screen, fireEvent } from '@testing-library/react';
import { expect, jest } from "@jest/globals";
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

// it('should render the li element with blue color when type is "default"', () => {
//   const { getByText } = render(
//     <NotificationItem type="default" value="Default notification" />
//   );
//   const liElement = getByText('Default notification');

//   expect(window.getComputedStyle(liElement).color).toBe('blue');
// });

// it('should render the li element with red color when type is "urgent"', () => {
//   const { getByText } = render(
//     <NotificationItem type="urgent" value="Urgent notification" />
//   );

//   const liElement = getByText('Urgent notification');
//   expect(window.getComputedStyle(liElement).color).toBe('red');
// });

it('Should log to the console the "Notification id has been marked as read" with the correct notification item id', () => {
    const mockMarkAsRead = jest.fn()
    render(<NotificationItem markAsRead={mockMarkAsRead} />);
    const firstListItemElement = screen.getAllByRole('listitem')[0];
    fireEvent.click(firstListItemElement)
    expect(mockMarkAsRead).toHaveBeenCalled()
});
