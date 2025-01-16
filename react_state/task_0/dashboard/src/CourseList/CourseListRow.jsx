import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#deb5b545',
    },
    rowStyle: {
        backgroundColor: '#f5f5f5ab',
    },
    th: {
        border: '2px solid #ddd',
        padding: '10px',
    },
    td: {
        border: '2px solid #ddd',
        padding: '10px',
    },
});

export default function CourseListRow({
    isHeader = false,
    textFirstCell = '',
    textSecondCell = null,
}) {
    const rowStyle = isHeader ? styles.headerStyle : styles.rowStyle;

    return (
        <tr className={css(rowStyle)}>
            {isHeader ? (
                <>
                    <th colSpan={textSecondCell ? 1 : 2} className={css(styles.th)}>
                        {textFirstCell}
                    </th>
                    {textSecondCell && (
                        <th className={css(styles.th)}>{textSecondCell}</th>
                    )}
                </>
            ) : (
                <>
                    <td className={css(styles.td)}>{textFirstCell}</td>
                    <td className={css(styles.td)}>{textSecondCell}</td>
                </>
            )}
        </tr>
    );
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool.isRequired,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
