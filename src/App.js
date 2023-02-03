import React, { useState } from 'react';

import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge, clgName) => {
    setUsersList((prevUser) => {
      return [...prevUser, { name: uName, age: uAge, college: clgName, id: Math.random().toString() }]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
