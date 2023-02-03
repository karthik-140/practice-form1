import React, { useState } from 'react';

import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';


const AddUser = (props) => {
    const [enteredUsername, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error,setError]= useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter valid name and age. [Input should not be empty]"
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid Age",
                message: "Please enter valid age."
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');

    }

    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    const errorHandler = () =>{
        setError(null);
    }
    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>User Name</label>
                <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler} />
                <label htmlFor='age'>Age</label>
                <input id='age' type='number' value={enteredAge} onChange={ageChangeHandler} />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
        </div>
    )
}

export default AddUser;