import { useReducer, useEffect, useCallback } from 'react';
import axios from 'axios';
import { StyleSheet, css } from 'aphrodite';
import Notification from './components/Notifications/Notifications';
import Header from './components/Header/Header';
import Login from "./pages/Login/Login";
import Footer from './components/Footer/Footer';
import CourseList from './pages/CourseList/CourseList';
import { getLatestNotification } from './utils/utils';
import BodySectionWithMarginBottom from './components/BodySectionWithMarginBottom/BodySectionWithMarginBottom';
import BodySection from './components/BodySection/BodySection';
import { appReducer, initialState, APP_ACTIONS } from './appReducer';

const styles = StyleSheet.create({
    logo: {
        height: '30vmin',
    },
    header: {
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: '20px',
        fontFamily: 'sans-serif',
        color: '#e0454b',
    },
    body: {
        borderTop: 'solid',
        borderBottom: 'solid',
        borderColor: '#e0454b',
        height: '50vh',
        padding: '30px',
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
        fontStyle: 'italic',
        fontFamily: 'sans-serif',
    },
});

function App() {
    const [state, dispatch] = useReducer(appReducer, initialState);
    const handleDisplayDrawer = useCallback(() => {
        dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER });
    }, []);
    const handleHideDrawer = useCallback(() => {
        dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER });
    }, []);
    const logIn = (email, password) => {
        dispatch({
            type: APP_ACTIONS.LOGIN,
            payload: { email, password, isLoggedIn: true },
        });
    };
    const logOut = () => {
        dispatch({ type: APP_ACTIONS.LOGOUT });
    };
    const markNotificationAsRead = useCallback((id) => {
        console.log(`Notification ${id} has been marked as read`);
        dispatch({
            type: APP_ACTIONS.MARK_NOTIFICATION_READ,
            payload: id,
        });
    }, []);

    useEffect(() => {
        if (state.notifications) {
            const fetchNotifications = async () => {
                try {
                    const response = await axios.get('http://localhost:5173/notifications.json');
                    const fetchedNotifications = response.data.notifications.map((notif) => {
                        if (notif.html && notif.html.__html === "") {
                            notif.html.__html = getLatestNotification();
                        }
                        return notif;
                    });
                    dispatch({ type: APP_ACTIONS.SET_NOTIFICATIONS, payload: fetchedNotifications });
                } catch (error) {
                    console.error('Error fetching notifications:', error);
                }
            };
            fetchNotifications();
        }
    }, []);

    useEffect(() => {
        if (state.user.isLoggedIn) {
            const fetchCourses = async () => {
                try {
                    const response = await axios.get('http://localhost:5173/courses.json');
                    dispatch({ type: APP_ACTIONS.SET_COURSES, payload: response.data.courses });
                } catch (error) {
                    console.error('Error fetching courses:', error);
                }
            };
            fetchCourses();
        }
    }, [state.user.isLoggedIn]);

    return (
        <div className="App">
            <Notification
                notifications={state.notifications}
                displayDrawer={state.displayDrawer}
                handleDisplayDrawer={handleDisplayDrawer}
                handleHideDrawer={handleHideDrawer}
                markNotificationAsRead={markNotificationAsRead}
            />
            <Header user={state.user} logOut={logOut} />
            {state.user.isLoggedIn ? (
                <BodySectionWithMarginBottom title="Course list">
                    <CourseList courses={state.courses} />
                </BodySectionWithMarginBottom>
            ) : (
                <BodySectionWithMarginBottom title="Log in to continue">
                    <Login
                        login={logIn}
                    />
                </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
                <p>Holberton School news goes here</p>
            </BodySection>
            <Footer user={state.user} />
        </div>
    );
}

export default App;
