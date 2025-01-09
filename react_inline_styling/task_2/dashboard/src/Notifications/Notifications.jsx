import { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    notificationTitle: {
        fontWeight: 'bold',
        fontSize: '20px',
    },
    notifications: {
        border: '2px #e1003c dashed',
        paddingLeft: '20px',
        position: 'absolute',
        top: '10px',
        right: '10px',
        width: '300px',
        height: '200px',
        overflowY: 'auto',
        backgroundColor: '#fff',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
    list: {
        color: '#e1003c',
        listStyleType: 'none',
        padding: '0',
    },
    listItem: {
        marginBottom: '10px',
    },
    defaultPriority: {
        color: 'blue',
    },
    closeButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
    },
    closeIcon: {
        width: '20px',
        height: '20px',
    },
});

class Notifications extends Component {
    constructor(props) {
        super(props);
    }

    markAsRead = (id) => {
        console.log(`Notification ${id + 1} has been marked as read`);
    };

    shouldComponentUpdate(nextProps) {
        return (
            nextProps.notifications.length > this.props.notifications.length ||
            nextProps.displayDrawer !== this.props.displayDrawer
        );
    }

    render() {
        const { notifications = [], displayDrawer = true } = this.props;
        return (
            <>
                <div className={css(styles.notificationTitle)}>Your notifications</div>
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
                                    <img
                                        src={closeIcon}
                                        alt="close icon"
                                        className={css(styles.closeIcon)}
                                    />
                                </button>
                                <ul className={css(styles.list)}>
                                    {notifications.map((notification, index) => (
                                        <NotificationItem
                                            id={index}
                                            key={notification.id}
                                            type={notification.type}
                                            value={notification.value}
                                            html={notification.html}
                                            markAsRead={this.markAsRead}
                                            className={notification.type === 'default' ? css(styles.defaultPriority) : ''}
                                        />
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <p>No new notification for now</p>
                        )}
                    </div>
                ) : (
                    []
                )}
            </>
        );
    }
}

Notifications.propTypes = {
    notifications: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            value: PropTypes.string,
            html: PropTypes.shape({
                __html: PropTypes.string,
            }),
        })
    ),
    displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
    notifications: [],
    displayDrawer: true,
};

export default Notifications;
