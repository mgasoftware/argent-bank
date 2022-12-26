import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';

import { editProfile } from '../../api/editProfile';
import { getUserProfile } from '../../redux/userAction';
import '../../styles/EditName.css';

export default function EditName() {
    const { user } = useSelector(state => state.user);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [isFillForm, setIsFillForm] = useState(false);

    const dispatch = useDispatch();

    const handleClickEdit = (e) => {
        e.preventDefault();
        setIsEdit(true);
    }

    const handleClickSave = async e => {
        e.preventDefault();
        if(!firstName || !lastName){
            setIsFillForm(true);
        }
        else{
            try {
                await editProfile({firstName, lastName});
                dispatch(getUserProfile());
            } catch (error) {
                console.log(error);
            }
            finally{
                setIsEdit(false);
                setIsFillForm(false);
                setFirstName('');
                setLastName('');
            }
        }
    }

    const handleClickCancel = (e) => {
        e.preventDefault();
        setIsFillForm(false);
        setIsEdit(false);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "firstName":
                setFirstName(value);
                break;

            case "lastName":
                setLastName(value);
                break;

            default:
                break;
        }
    }

    return (
        <div className="header">
            {!isEdit ? (<div>
                <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
                <button className="edit-button" onClick={handleClickEdit}>Edit Name</button>
            </div>) : (<div>
                <h1>Welcome back</h1>
                {isFillForm && <Alert variant="danger" style={{ color: "red", padding: "1em" }}>Fill the form please !</Alert>}
                <div className="input-name">
                    <input
                        name="firstName"
                        type="text"
                        id="firstName"
                        className="input-firstName"
                        placeholder={user.firstName}
                        onChange={handleChange} />
                    <input
                        name="lastName"
                        type="text"
                        id="lastName"
                        className="input-lastName"
                        placeholder={user.lastName}
                        onChange={handleChange} />
                </div>
                <div className="button-wrapper">
                    <button className="save-button" onClick={handleClickSave}>Save</button>
                    <button className="cancel-button" onClick={handleClickCancel}>Cancel</button>
                </div>
            </div>)}
        </div>
    )
}
