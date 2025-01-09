import { render, screen, fireEvent } from '@testing-library/react';
import { expect, jest } from "@jest/globals";
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

it('Should log to the console the "Notification id has been marked as read" with the correct notification item id', () => {
    const mockMarkAsRead = jest.fn()
    render(<NotificationItem markAsRead={mockMarkAsRead} />);
    const firstListItemElement = screen.getAllByRole('listitem')[0];
    fireEvent.click(firstListItemElement)
    expect(mockMarkAsRead).toHaveBeenCalled()
});
