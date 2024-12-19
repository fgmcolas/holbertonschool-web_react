import './Notifications.css';
import closeBtn from '../assets/close-button.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

export default function Notifications({ notifications }) {
    console.log(notifications)
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul>
                {notifications.map((notification) => (
                    <NotificationItem
                        key={notification.id}
                        type={notification.type}
                        value={notification.value}
                        html={notification.html}
                    />
                ))}
            </ul>
            <button
                aria-label='Close'
                type='button'
                onClick={() => console.log('Close button has been clicked')}
            >
                <img alt='close-button' src={closeBtn} />
            </button>
        </div>
    );
}

Notifications.propTypes = {
    notifications: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            html: PropTypes.object,
        })
    ).isRequired,
};
