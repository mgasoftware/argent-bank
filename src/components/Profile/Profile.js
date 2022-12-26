import React from 'react';

import Account from '../Features/Account';
import EditName from '../Features/EditName';
import Footer from '../Features/Footer';
import NavBar from '../Features/NavBar';

import { dataAccount } from '../../datas/dataFeatures';

export default function Profile() {
    return (
        <div className="user">
            <NavBar />
            <main className="main bg-dark">
                <EditName />
                <h2 className="sr-only">Accounts</h2>
                {dataAccount.map((data, index) => (
                    <Account
                        key={index}
                        title={data.title}
                        amount={data.amount}
                        description={data.description} />
                ))}
            </main>
            <Footer />
        </div>
    )
}
