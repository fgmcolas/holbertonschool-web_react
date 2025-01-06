import { Component } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

class Notifications extends Component {
    constructor(props) {
        super(props)
    }

    markAsRead = (id) => {
        console.log(`Notification ${id + 1} has been marked as read`);
    }

    shouldComponentUpdate(nextProps) {
        return (
            nextProps.notifications.length >
            this.props.notifications.length ||
            nextProps.displayDrawer !== this.props.displayDrawer
        );
    }

    render() {
        const { notifications = [], displayDrawer = true } = this.props;
        return (
            <>
                <div className="notification-title">Your notifications</div>
                {
                    displayDrawer ? (
                        <div className='Notifications'>
                            {notifications.length > 0 ? (
                                <>
                                    <p>Here is the list of notifications</p>
                                    <button
                                        onClick={() => console.log('Close button has been clicked')}
                                        aria-label='Close'
                                    >
                                        <img src={closeIcon} alt='close icon' />
                                    </button>
                                    <ul>
                                        {notifications.map((notification, index) => (
                                            <NotificationItem
                                                id={index}
                                                key={notification.id}
                                                type={notification.type}
                                                value={notification.value}
                                                html={notification.html}
                                                markAsRead={this.markAsRead}
                                            />
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <p>No new notification for now</p>
                            )}
                        </div>
                    ) :
                        ([])
                }
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

export default Notifications
