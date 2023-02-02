import React from 'react';
import './AddUser.css';

const UserList = (props) =>{
    return (
        <ul>
            {props.users.map((user)=>
            <li className='card' key={user.key}>
                {user.name} ({user.age} years old)
            </li>
            )}
        </ul>
    )
}

export default UserList;