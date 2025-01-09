import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    default: {
        color: 'blue',
    },
    urgent: {
        color: 'red',
    },
});

class NotificationItem extends PureComponent {
    render() {
        const { type, value, html, markAsRead } = this.props;

        return (
            <li
                className={css(type === 'default' ? styles.default : styles.urgent)}
                data-notification-type={type}
                dangerouslySetInnerHTML={type === 'urgent' && html !== undefined ? html : undefined}
                onClick={markAsRead}
            >
                {type === 'urgent' && html !== undefined ? null : value}
            </li>
        );
    }
}

NotificationItem.propTypes = {
    type: PropTypes.oneOf(['default', 'urgent']).isRequired,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
    value: '',
    html: undefined,
};

export default NotificationItem;
