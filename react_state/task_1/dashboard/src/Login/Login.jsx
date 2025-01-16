import React, { Component } from 'react';
import WithLogging from '../HOC/WithLogging';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            email: '',
            password: '',
            enableSubmit: false,
        };
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        this.setState({ isLoggedIn: true });
    };

    handleChangeEmail = (e) => {
        const email = e.target.value;
        this.setState({ email }, this.validateForm);
    };

    handleChangePassword = (e) => {
        const password = e.target.value;
        this.setState({ password }, this.validateForm);
    };

    validateForm = () => {
        const { email, password } = this.state;
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const isPasswordValid = password.length >= 8;
        this.setState({ enableSubmit: isValidEmail && isPasswordValid });
    };

    render() {
        const { email, password, enableSubmit } = this.state;

        return (
            <div className="App-body">
                <p>Login to access the full dashboard</p>
                <form onSubmit={this.handleLoginSubmit}>
                    <label htmlFor="email" className="email">
                        Email
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={this.handleChangeEmail}
                        />
                    </label>
                    <label htmlFor="password" className="password">
                        Password
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={this.handleChangePassword}
                        />
                    </label>
                    <input
                        className="label-button"
                        type="submit"
                        value="OK"
                        disabled={!enableSubmit}
                    />
                </form>
            </div>
        );
    }
}

export default WithLogging(Login);
