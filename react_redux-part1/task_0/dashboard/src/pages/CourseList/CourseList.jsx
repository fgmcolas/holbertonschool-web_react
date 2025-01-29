import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow/CourseListRow';
import WithLogging from '../../components/HOC/WithLogging';

const styles = StyleSheet.create({
    table: {
        marginLeft: 'auto',
        marginRight: 'auto',
        border: 'groove',
        width: '100%',
    },
    th: {
        borderBottom: '1px rgb(178, 178, 178) solid',
        textAlign: 'left',
    },
    tableTitleTh: {
        textAlign: 'center',
    },
});

export const CourseList = ({ courses = [] }) => {
    return (
        <table id="CourseList" className={css(styles.table)}>
            {courses.length > 0 ? (
                <>
                    <thead className={css(styles.tableTitleTh)}>
                        <CourseListRow textFirstCell="Available courses" isHeader={true} />
                        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
                    </thead>
                    <tbody>
                        {courses.map((course) => (
                            <CourseListRow
                                key={course.id}
                                textFirstCell={course.name}
                                textSecondCell={course.credit}
                            />
                        ))}
                    </tbody>
                </>
            ) : (
                <thead className={css(styles.tableTitleTh)}>
                    <CourseListRow textFirstCell="No course available yet" isHeader={true} />
                </thead>
            )}
        </table>
    );
};

export default WithLogging(CourseList);
