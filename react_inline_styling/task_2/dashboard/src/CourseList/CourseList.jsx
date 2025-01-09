import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';

const styles = StyleSheet.create({
    courseTable: {
        margin: '20px auto',
        width: '90%',
        borderCollapse: 'collapse',
    },
    header: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default function CourseList({ courses = [] }) {
    return (
        <table className={css(styles.courseTable)}>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow
                    textFirstCell="Course name"
                    textSecondCell="Credit"
                    isHeader={true}
                />
            </thead>
            <tbody>
                {courses.length > 0 ? (
                    courses.map((course) => (
                        <CourseListRow
                            key={course.id}
                            textFirstCell={course.name}
                            textSecondCell={course.credit}
                            isHeader={false} // Add this to indicate it's a data row
                        />
                    ))
                ) : (
                    <CourseListRow
                        isHeader={true}
                        textFirstCell="No course available yet"
                    />
                )}
            </tbody>
        </table>
    );
}

CourseList.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            credit: PropTypes.number.isRequired,
        })
    ).isRequired,
};
