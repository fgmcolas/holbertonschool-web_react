import PropTypes from 'prop-types';

CourseListRow.propTypes = {
    isHeader: PropTypes.bool.isRequired,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string.isRequired,
};

export default function CourseListRow({
    isHeader = false,
    textFirstCell = '',
    textSecondCell = null
}) {
    return (
        isHeader ? (
            <tr>
                <th colSpan={textSecondCell ? 1 : 2}>{textFirstCell}</th>
                {textSecondCell ? <th>{textSecondCell}</th> : null}
            </tr>
        ) : (
            <tr>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        )
    )
}
