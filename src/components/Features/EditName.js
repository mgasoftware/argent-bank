import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../styles/EditName.css';

export default function EditName() {
    const dispatch = useDispatch();
    const { isAuth } = useSelector(state => state.login);
    const { user } = useSelector(state => state.user);

    return (
        <div className="header">
            <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
            <button className="edit-button">Edit Name</button>
        </div>
    )
}
