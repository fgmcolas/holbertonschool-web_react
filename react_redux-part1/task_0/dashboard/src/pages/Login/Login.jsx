import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import WithLogging from '../../components/HOC/WithLogging';
import useLogin from '../../hooks/useLogin';

const styles = StyleSheet.create({
    appBody: {
        borderTop: 'solid',
        borderBottom: 'solid',
        borderColor: '#e0454b',
        minHeight: '50vmax',
        padding: '30px',
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
    },
    label: {
        fontWeight: 'bold',
        padding: '0.5rem'
    },
    input: {
        marginRight: '0.5rem',
        height: '1rem',
        padding: '0.2rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    submitButton: {
        backgroundColor: 'rgb(197 193 193)',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        ':disabled': {
            backgroundColor: '#ddd',
        },
    },
});

const Login = ({ login }) => {
    const {
        email,
        password,
        enableSubmit,
        handleChangeEmail,
        handleChangePassword,
        handleLoginSubmit,
    } = useLogin({
        onLogin: login,
    });

    return (
        <form aria-label="form" onSubmit={handleLoginSubmit}>
            <div className={`${css(styles.appBody)} App-body`}>
                <p>Login to access the full dashboard</p>
                <div className={css(styles.form)}>
                    <label htmlFor="email" className={css(styles.label)}>Email</label>
                    <input
                        type="email"
                        name="user_email"
                        id="email"
                        value={email}
                        onChange={handleChangeEmail}
                        className={css(styles.input)}
                    />
                    <label htmlFor="password" className={css(styles.label)}>Password</label>
                    <input
                        type="password"
                        name="user_password"
                        id="password"
                        value={password}
                        onChange={handleChangePassword}
                        className={css(styles.input)}
                    />
                    <input
                        value="OK"
                        type="submit"
                        disabled={!enableSubmit}
                        className={css(styles.submitButton)}
                    />
                </div>
            </div>
        </form>
    );
};

const LoginWithLogging = WithLogging(Login);

export default LoginWithLogging;
