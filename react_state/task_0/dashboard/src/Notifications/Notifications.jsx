import { Component } from 'react';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

class Notifications extends Component {
    state = {
        displayDrawer: true,
    };

    closeNotifications = () => {
        this.setState({ displayDrawer: false });
    };

    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextProps.notifications.length !== this.props.notifications.length ||
            nextState.displayDrawer !== this.state.displayDrawer
        );
    }

    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`);
    };

    render() {
        const { notifications = [] } = this.props;
        const { displayDrawer } = this.state;
        return (
            <>
                {!displayDrawer && (
                    <div
                        className={css(styles.menuItem)}
                        onMouseEnter={() => console.log('Hovered over the Notifications menu item!')}>
                        Your notifications
                    </div>
                )}
                <div
                    className={css(styles.notifications)}
                    style={{ visibility: displayDrawer ? 'visible' : 'hidden' }}>
                    {notifications.length > 0 ? (
                        <>
                            <p className={css(styles.text)}>Here is the list of notifications</p>
                            <button
                                onClick={this.closeNotifications}
                                aria-label="Close"
                                className={css(styles.closeButton)}
                            >
                                <img
                                    src={closeIcon}
                                    alt="close icon"
                                    className={css(styles.closeIcon)}
                                />
                            </button>
                            <ul className={css(styles.noPadding)}>
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
                        <p className={css(styles.text)}>No new notification for now</p>
                    )}
                </div>
            </>
        );
    }
}

const insertKeyframes = () => {
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes opacityChange {
            0% { opacity: 0.5; }
            100% { opacity: 1; }
        }
        @keyframes bounce {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(5px); }
        }
    `;
    document.head.appendChild(style);
};

insertKeyframes();

const styles = StyleSheet.create({
    menuItem: {
        textAlign: 'right',
        position: 'fixed',
        top: '10px',
        right: '10px',
        backgroundColor: '#fff8f8',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        ':hover': {
            animation: 'opacityChange 1s ease-in-out 3, bounce 0.5s ease-in-out 3',
        },
    },
    notifications: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        border: 'dotted crimson',
        padding: 0,
        fontSize: '20px',
        zIndex: 1000,
    },
    closeButton: {
        position: 'absolute',
        cursor: 'pointer',
        right: '5px',
        top: '5px',
        background: 'transparent',
        border: 'none',
    },
    closeIcon: {
        width: '20px',
        height: '20px',
        objectFit: 'contain',
    },
    text: {
        fontSize: '20px',
        marginBottom: '20px',
    },
    noPadding: {
        padding: 0,
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
};

export default Notifications;
