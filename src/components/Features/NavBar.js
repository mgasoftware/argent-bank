import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router';

import '../../styles/NavBar.css';
import { logout } from '../../redux/loginSlice';
import logo from '../../assets/argentBankLogo.png';

export default function NavBar() {
    const dispatch = useDispatch();
    const { isAuth } = useSelector(state => state.login);
    const { user } = useSelector(state => state.user);
    const navigate = useNavigate();

    const handleLogOut = e => {
        e.preventDefault();
        dispatch(logout());
        sessionStorage.removeItem("token");
        navigate("/");
    }

    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            {!isAuth ?
                (<div>
                    <NavLink className="main-nav-item" to="/sign-in">
                        <i className="fa fa-user-circle"></i>
                        {" "}Sign In
                    </NavLink>
                </div>) :
                (
                    <div>
                        <NavLink className="main-nav-item" to="/user" >
                            <i className="fa fa-user-circle"></i>
                            {" "}{user.firstName}
                        </NavLink>
                        <NavLink className="main-nav-item" to="/" onClick={handleLogOut}>
                            {" "}<i className="fa fa-sign-out"></i>
                            {" "}Sign Out
                        </NavLink>
                    </div>)
            }
        </nav>
    )
}
