import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import HolbertonLogo from '../../assets/holbertonlogo.jpg';

const styles = StyleSheet.create({
    header: {
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: '20px',
        fontFamily: 'sans-serif',
        color: '#e0454b',
    },
    logo: {
        height: '30vmin',
    },
    logoutSection: {
        marginLeft: '20px',
    },
});

const Header = ({ user, logOut }) => {
    return (
        <div className={css(styles.header)}>
            <img className={css(styles.logo)} src={HolbertonLogo} alt="holberton logo" />
            <h1>School dashboard</h1>
            {user.isLoggedIn && (
                <div className={css(styles.logoutSection)} id="logoutSection">
                    Welcome <b>{user.email}</b> (<a href="" onClick={logOut}>logout</a>)
                </div>
            )}
        </div>
    );
};

export default Header;
