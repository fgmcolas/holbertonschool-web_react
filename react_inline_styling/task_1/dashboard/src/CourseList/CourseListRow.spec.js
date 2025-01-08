import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import CourseListRow from './CourseListRow';

test('Should display 2 "th" elements when "isHeader" is true and "textSecondCell" is not null', () => {
    render(
        <table>
            <tbody>
                <CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />
            </tbody>
        </table>
    );
    const trElement = screen.getByRole('row');
    expect(trElement).toHaveStyle({ backgroundColor: 'rgb(222, 181, 180, 0.27)' });
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
    const trElement = screen.getByRole('row');
    expect(trElement).toHaveStyle({ backgroundColor: 'rgb(222, 181, 180, 0.27)' });
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
    const trElement = screen.getByRole('row');
    expect(trElement).toHaveStyle({ backgroundColor: 'rgb(245, 245, 245, 0.67)' });
    const tdElements = screen.getAllByRole('cell');
    expect(tdElements).toHaveLength(2);
});

test('Should render background color #deb5b545 when isHeader is true', () => {
    render(
        <table>
            <tbody>
                <CourseListRow isHeader={true} textFirstCell="Header" textSecondCell="SubHeader" />
            </tbody>
        </table>
    );
    const trElement = screen.getByRole('row');
    expect(trElement).toHaveStyle({ backgroundColor: 'rgb(222, 181, 180, 0.27)' });
});

test('Should render background color #f5f5f5ab when isHeader is false', () => {
    render(
        <table>
            <tbody>
                <CourseListRow isHeader={false} textFirstCell="Row1" textSecondCell="Row2" />
            </tbody>
        </table>
    );
    const trElement = screen.getByRole('row');
    expect(trElement).toHaveStyle({ backgroundColor: 'rgb(245, 245, 245, 0.67)' });
});
