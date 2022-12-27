import React from 'react';

import '../../styles/Account.css';

/**
 * 
 * @param {object} props 
 * @param {string} props.title
 * @param {string} props.amount
 * @param {string} props.description
 * @returns 
 */

export default function Account(props) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{props.title}</h3>
                <p className="account-amount">{props.amount}</p>
                <p className="account-amount-description">{props.description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )
}
