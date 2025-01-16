import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseListRow from './CourseListRow';

StyleSheetTestUtils.suppressStyleInjection();

test('Should display 2 "th" elements when "isHeader" is true and "textSecondCell" is not null', () => {
    render(
        <table>
            <tbody>
                <CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />
            </tbody>
        </table>
    );
    const thElements = screen.getAllByRole('columnheader');
    expect(thElements).toHaveLength(2);
});

test('Should display 1 "th" element with colSpan=2 when "isHeader" is true and "textSecondCell" is null', () => {
    render(
        <table>
            <tbody>
                <CourseListRow isHeader={true} textFirstCell="First" textSecondCell={null} />
            </tbody>
        </table>
    );
    const thElement = screen.getByRole('columnheader');
    expect(thElement).toHaveAttribute('colSpan', '2');
});

test('Should display 2 "td" elements when "isHeader" is false', () => {
    render(
        <table>
            <tbody>
                <CourseListRow isHeader={false} textFirstCell="First" textSecondCell="Second" />
            </tbody>
        </table>
    );
    const tdElements = screen.getAllByRole('cell');
    expect(tdElements).toHaveLength(2);
});
