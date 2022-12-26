import React from 'react'
import { useSelector } from "react-redux";
import { Routes, Route } from 'react-router-dom';

import Home from "../Home/Home";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Protected from "../Services/Protected";

export default function Router() {

    const { isAuth } = useSelector(state => state.login);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Protected isAuth={isAuth}><Profile /></Protected>} />
        </Routes>
    )
}
