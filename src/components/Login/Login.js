import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import '../../styles/Login.css';
import NavBar from '../Features/NavBar'
import Footer from '../Features/Footer'
import { loginPending, loginSuccess, loginFail } from '../../redux/loginSlice';
import { userLogin } from '../../api/userLogin';
import { Navigate, useNavigate } from 'react-router';
import { getUserProfile } from '../../redux/userAction';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const dispatch = useDispatch();
    const { isLoading, isAuth, error } = useSelector(state => state.login);
    const navigate = useNavigate();

    const handleChangeSubmit = async e => {
        e.preventDefault();
        if (!email || !password) {
            alert("Fill the form please !")
        }
        else {
            dispatch(loginPending());

            try {
                await userLogin({ email, password });
                dispatch(loginSuccess());
                dispatch(getUserProfile());
                navigate("/user");
            }
            catch (error) {
                dispatch(loginFail(error.response.data.message))
            }
        }
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
                        {isLoading ? (<button disabled={true} className="sign-in-button">Loading</button>) :
                            (<button className="sign-in-button">Sign In</button>)
                        }
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    )
}
