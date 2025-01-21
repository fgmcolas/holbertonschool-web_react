import { useState, useCallback } from 'react';
import Notification from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from "../Login/Login";
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { newContext } from '../Context/context';
import './App.css';

const notificationsList = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
];

const coursesList = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
];

function App() {
    const [displayDrawer, setDisplayDrawer] = useState(true);
    const [user, setUser] = useState({ ...newContext.user });
    const [notifications, setNotifications] = useState(notificationsList);
    const handleDisplayDrawer = useCallback(() => {
        setDisplayDrawer(true);
    }, []);
    const handleHideDrawer = useCallback(() => {
        setDisplayDrawer(false);
    }, []);
    const logIn = (email, password) => {
        setUser({
            email,
            password,
            isLoggedIn: true,
        });
    }
    const logOut = () => {
        setUser({
            email: '',
            password: '',
            isLoggedIn: false,
        });
    }
    const markNotificationAsRead = useCallback((id) => {
        console.log(`Notification ${id} has been marked as read`);
        setNotifications((prevNotifications) =>
            prevNotifications.filter((notification) => notification.id !== id)
        );
    }, []);

    return (
        <newContext.Provider value={{ user, logOut }}>
            <Notification
                notifications={notifications}
                displayDrawer={displayDrawer}
                handleDisplayDrawer={handleDisplayDrawer}
                handleHideDrawer={handleHideDrawer}
                markNotificationAsRead={markNotificationAsRead}
            />
            <div className="App">
                <Header />
                {user.isLoggedIn ? (
                    <BodySectionWithMarginBottom title="Course list">
                        <CourseList courses={coursesList} />
                    </BodySectionWithMarginBottom>
                ) : (
                    <BodySectionWithMarginBottom title="Log in to continue">
                        <Login
                            login={logIn}
                            email={user.email}
                            password={user.password}
                        />
                    </BodySectionWithMarginBottom>
                )}
                <BodySection>
                    News from the School
                    <p>Holberton School News goes here</p>
                </BodySection>
                <Footer />
            </div>
        </newContext.Provider>
    );
}

export default App;
