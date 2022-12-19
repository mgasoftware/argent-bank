import React, { useState } from 'react'

import NavBar from '../Features/NavBar'
import Footer from '../Features/Footer'
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleChangeSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3001/api/v1/user/login', { email, password })
            .then((response) => {
                console.log(response.data)
                return response.data;
            })
            .catch((error) => console.log(error))
            .finally()
    }
    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    return (
        <div className="login">
            <NavBar />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form action="post" onSubmit={handleChangeSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={email}
                                onChange={handleChangeEmail} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handleChangePassword} />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button className="sign-in-button">Sign In</button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    )
}
