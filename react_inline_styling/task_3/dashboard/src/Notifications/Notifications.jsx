import { Component } from 'react';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

class Notifications extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.notifications.length !== this.props.notifications.length;
    }

    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`);
    };

    render() {
        const { notifications = [], displayDrawer = true } = this.props;

        return (
            <>
                <div className={css(styles.menuItem)}>Your notifications</div>
                {displayDrawer ? (
                    <div className={css(styles.notifications)}>
                        {notifications.length > 0 ? (
                            <>
                                <p>Here is the list of notifications</p>
                                <button
                                    onClick={() => console.log('Close button has been clicked')}
                                    aria-label="Close"
                                    className={css(styles.closeButton)}
                                >
                                    <img src={closeIcon} alt="close icon" />
                                </button>
                                <ul>
                                    {notifications.map((notification) => (
                                        <NotificationItem
                                            key={notification.id}
                                            type={notification.type}
                                            value={notification.value}
                                            html={notification.html}
                                            markAsRead={() => this.markAsRead(notification.id)}
                                        />
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <p>No new notification for now</p>
                        )}
                    </div>
                ) : null}
            </>
        );
    }
}

const styles = StyleSheet.create({
    menuItem: {
        textAlign: 'right',
    },
    notifications: {
        border: 'dotted crimson',
        marginTop: '1%',
        paddingLeft: '1rem',
        marginBottom: '1rem',
        width: '40%',
        marginLeft: '59%',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        cursor: 'pointer',
        right: '5px',
        top: '20px',
        background: 'transparent',
        border: 'none',
    },
    notificationTitle: {
        float: 'right',
        position: 'absolute',
        right: '10px',
        top: '2px',
    },
});

Notifications.propTypes = {
    notifications: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            value: PropTypes.string,
            html: PropTypes.shape({ __html: PropTypes.string }),
        })
    ).isRequired,
    displayDrawer: PropTypes.bool.isRequired,
};

export default Notifications;
