import React, {useState} from 'react';

import './AddUser.css';

   
const AddUser = (props) => {
    const [emptyName,setName] = useState('');
     const [emptyAge,setAge]= useState('');
    const[isValid,setIsValid]= useState(true);

    const nameChangeHandler = (event) =>{
        if(event.target.value.trim().length > 0){
            setIsValid(true);
        }
        setName(event.target.value);
    }
    const ageChangeHandler = (event) =>{
        setAge(event.target.value);
    }
   
    const formSubmitHandler = (event) =>{
        event.preventDefault();
        if(emptyName.trim().length === 0 || emptyAge.trim().length === 0){
            setIsValid(false);
            return;
        }
        const userDetails ={
            key: Math.random().toString(),
            name:emptyName,
            age:emptyAge,
        }
        props.onSaveUser(userDetails);
        setName('');
        setAge('');
    }

    return (
        <div className='Card'>
            <form onSubmit={formSubmitHandler}>
                <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label type="text">User Name</label>
                    <input type='text' value={emptyName} onChange={nameChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label type="number">Age</label>
                    <input type='number' value={emptyAge} onChange={ageChangeHandler} />
                </div>
                </div>
                <button className={`new-expense__actions ${!isValid ? 'isValid' : ''}`} type='submit'>Add User</button>
            </form>
        </div>
    )
}

export default AddUser;