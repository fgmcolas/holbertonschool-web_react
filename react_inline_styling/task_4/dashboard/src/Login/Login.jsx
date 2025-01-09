import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    loginContainer: {
        margin: '0 auto',
        padding: '20px',
    },
    inputLabel: {
        display: 'inline-block',
        width: '30%',
        marginBottom: '10px',
    },
    inputField: {
        display: 'inline-block',
        width: '65%',
        marginBottom: '10px',
        border: '1px solid #ccc',
        padding: '8px',
        boxSizing: 'border-box',
    },
    button: {
        display: 'block',
        width: '100px',
        marginTop: '10px',
        padding: '10px',
    },

    small: {
        '@media (max-width: 899px)': {
            width: '400px',
        },
    },
    large: {
        '@media (min-width: 900px)': {
            width: '90%',
        },
    },
});

function Login() {
    return (
        <div className={css(styles.loginContainer, styles.small, styles.large)}>
            <p>Login to access the full dashboard</p>
            <div>
                <label htmlFor="email" className={css(styles.inputLabel)}>Email:</label>
                <input type="email" name="user_email" id="email" className={css(styles.inputField)} />
            </div>
            <div>
                <label htmlFor="password" className={css(styles.inputLabel)}>Password:</label>
                <input type="text" name="user_password" id="password" className={css(styles.inputField)} />
            </div>
            <button role="button" type="submit" className={css(styles.button)}>OK</button>
        </div>
    );
}

export default Login;
