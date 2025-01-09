import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseList from './CourseList';

StyleSheetTestUtils.suppressStyleInjection();

test('Should render CourseList without crashing', () => {
    const courses = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
    ];
    render(<CourseList courses={courses} />);
    expect(screen.getByText('Available courses')).toBeInTheDocument();
});

test('Should render only the "No course available yet" message when no courses are provided', () => {
    const { getByText } = render(<CourseList courses={[]} />);
    const noCoursesMessage = getByText('No course available yet');
    expect(noCoursesMessage).toBeInTheDocument();
});

test('Should render 1 row when no courses are provided', () => {
    render(<CourseList courses={[]} />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(3);
    expect(screen.getByText('No course available yet')).toBeInTheDocument();
});

test('Should render 3 rows when no courses are provided (including headers)', () => {
    render(<CourseList courses={[]} />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(3);
});

test('Should render 5 rows when courses are provided', () => {
    const courses = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
    ];
    render(<CourseList courses={courses} />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(5);
});
