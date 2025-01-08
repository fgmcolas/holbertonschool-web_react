import PropTypes from 'prop-types';

const headerStyle = { backgroundColor: '#deb5b545' };
const rowStyle = { backgroundColor: '#f5f5f5ab' };

CourseListRow.propTypes = {
    isHeader: PropTypes.bool.isRequired,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string.isRequired,
};

export default function CourseListRow({
    isHeader = false,
    textFirstCell = '',
    textSecondCell = null,
}) {
    const style = isHeader ? headerStyle : rowStyle;

    return (
        <tr style={style}>
            {isHeader ? (
                <>
                    <th colSpan={textSecondCell ? 1 : 2}>{textFirstCell}</th>
                    {textSecondCell && <th>{textSecondCell}</th>}
                </>
            ) : (
                <>
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
                </>
            )}
        </tr>
    );
}
