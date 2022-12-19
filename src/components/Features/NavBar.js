import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/argentBankLogo.png'

export default function NavBar() {
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
            <div>
                <NavLink className="main-nav-item" to="./sign-in">
                    <i className="fa fa-user-circle"></i>
                    {" "}Sign In
                </NavLink>
            </div>
        </nav>
    )
}
