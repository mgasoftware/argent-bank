import React, { useEffect } from 'react';

import Account from '../Features/Account';
import EditName from '../Features/EditName';
import Footer from '../Features/Footer';
import NavBar from '../Features/NavBar';

import { getUserProfile } from '../../redux/userAction';
import { useDispatch } from 'react-redux';

export default function Profile() {
    const token = sessionStorage.getItem("token");

    if(!token) {
        return <h1>ERREUR</h1>
    }

    return (
        <div className="user">
            <NavBar />
            <main className="main bg-dark">
                <EditName />
                <h2 className="sr-only">Accounts</h2>
                <Account />
            </main>
            <Footer />
        </div>
    )
}
