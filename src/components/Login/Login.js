import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';

import '../../styles/Login.css';
import NavBar from '../Features/NavBar'
import Footer from '../Features/Footer'
import { loginPending, loginSuccess, loginFail, loginSave } from '../../redux/loginSlice';
import { userLogin } from '../../api/userLogin';
import { useNavigate } from 'react-router';
import { getUserProfile } from '../../redux/userAction';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isFillForm, setIsFillForm] = useState(false);

    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(state => state.login);
    const navigate = useNavigate();

    const handleOnChange = e => {
        const { name, value } = e.target;

        switch (name) {
            case "text":
                setEmail(value);
                break;

            case "password":
                setPassword(value);
                break;

            case "checkbox":
                setRememberMe(value);
                break;

            default:
                break;
        }
    };

    const handleChangeSubmit = async e => {
        e.preventDefault();
        if (!email || !password) {
            setIsFillForm(true);
        }
        else {
            setIsFillForm(false);
            dispatch(loginPending());
            try {
                await userLogin({ email, password }, rememberMe);
                dispatch(loginSuccess());
                dispatch(getUserProfile());
                if (rememberMe === true) {
                    dispatch(loginSave())
                }
                navigate("/profile");
            }
            catch (error) {
                dispatch(loginFail(error.response.data.message))
            }
        }
    }

    return (
        <div className="login">
            <NavBar />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    {isFillForm && <Alert variant="danger" style={{ color: "red", padding: "1em" }}>Fill the form please !</Alert>}
                    {!isFillForm && error && <Alert variant="danger" style={{ color: "red", padding: "1em" }}>{error}</Alert>}
                    <form action="post" onSubmit={handleChangeSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input
                                name="text"
                                type="text"
                                id="username"
                                onChange={handleOnChange} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input
                                name="password"
                                type="password"
                                id="password"
                                onChange={handleOnChange} />
                        </div>
                        <div className="input-remember">
                            <input
                                name="checkbox"
                                type="checkbox"
                                id="remember-me"
                                onChange={handleOnChange} />
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
