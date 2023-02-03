import React, { useState, useRef } from 'react';

import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';


const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const nameInput = nameInputRef.current.value;
        const ageInput = ageInputRef.current.value;
        const collegeInput = collegeInputRef.current.value;
        if (nameInput.trim().length === 0 || ageInput.trim().length === 0 || collegeInput.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter valid details. [Input should not be empty]"
            })
            return;
        }
        if (+ageInput < 1) {
            setError({
                title: "Invalid Age",
                message: "Please enter valid age."
            })
            return;
        }
        props.onAddUser(nameInput, ageInput, collegeInput);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        collegeInputRef.current.value = '';
    }

    const errorHandler = () => {
        setError(null);
    }
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>User Name</label>
                    <input id='username' type='text' ref={nameInputRef} />
                    <label htmlFor='age'>Age</label>
                    <input id='age' type='number' ref={ageInputRef} />
                    <label htmlFor='clg'>College Name</label>
                    <input id='clgId' type='text' ref={collegeInputRef} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;

/*
What are refs?
--> Refs are hooks of React which can be rarely used to read the content.

What is the advantage you get using refs?
--> 1.The main advantage of using refs is writing & reading code is very simple compared to useState.

What are controlled and uncontrolled components ?
--> controlled components are those whose state an be controlled by themself are called controlled components.
Ex:- useState()
--> Uncontrolled components are those whose state changes without the access of its own.
Ex:- useRef()
*/