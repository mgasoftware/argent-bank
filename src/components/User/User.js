import React from 'react'
import Account from '../Features/Account'
import EditName from '../Features/EditName'
import Footer from '../Features/Footer'
import NavBar from '../Features/NavBar'

export default function User() {
    return (
        <div className="user">
            <NavBar />
            <main className="main bg-dark">
                <EditName />
                <h2 class="sr-only">Accounts</h2>
                <Account />
            </main>
            <Footer />
        </div>
    )
}
