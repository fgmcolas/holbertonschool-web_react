import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';

const styles = StyleSheet.create({
    courses: {
        margin: '130px auto',
        width: '90%',
        height: '33vh',
    },
    courseTable: {
        width: '100%',
    },
    table: {
        borderCollapse: 'collapse',
        border: '2px solid rgb(161, 161, 161)',
    },
    th: {
        border: '2px solid rgb(161, 161, 161)',
        padding: '10px',
        backgroundColor: '#f4f4f4',
    },
    td: {
        border: '2px solid rgb(161, 161, 161)',
        padding: '10px',
    },
});

CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
};

export default function CourseList({ courses = [] }) {
    return (
        <div className={css(styles.courses)}>
            {courses.length > 0 ? (
                <table id="CourseList" className={css(styles.courseTable)}>
                    <thead>
                        <CourseListRow textFirstCell="Available courses" isHeader={true} />
                        <CourseListRow
                            textFirstCell="Course name"
                            textSecondCell="Credit"
                            isHeader={true}
                        />
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
                </table>
            ) : (
                <table id="CourseList" className={css(styles.courseTable)}>
                    <thead>
                        <CourseListRow
                            isHeader={true}
                            textFirstCell="No course available yet"
                        />
                    </thead>
                </table>
            )}
        </div>
    );
}
