import React, {useState} from 'react';

import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {
 const [userData,setUserData]= useState([]);
  const saveUserHandler = (enteredData) =>{
     setUserData((prevData) => {
      return [...prevData, enteredData]
     })
  }
  return (
    <div >
     <AddUser onSaveUser={saveUserHandler}/>
     <UserList users={userData} ></UserList>
    </div>
  );
}

export default App;
