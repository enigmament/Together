import React, { useEffect, useState } from 'react';
import './App.css';
import { Skeleton } from '@mui/material';
import { UserData } from './interfaces';
import UserCard from './UserCard';

function App() {
  const [listUser, setListUser] = useState<UserData[]|null>(null)

  
  function fetchGetUsers<T>(): Promise<T> {
      return fetch("https://my.api.mockaroo.com/users.json?key=aa675110")
              .then(response => {
                return response.json()
              })
              .catch(()=>{
                return []
              })
              .then((data) => data as T)
  }

  useEffect(()=>{
    fetchGetUsers<UserData[]>()
      .then((userDataList)=>{
        setListUser(userDataList);
      });
  },[])

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        {<div className='cardshower'>
          {listUser == null &&
            <UserCard loading={true}/>
          }
          {listUser != null &&
            listUser.map((userProfile: UserData)=>{
              return <UserCard user={userProfile}/>
            })
          }
        </div>}
      
      </body>
    </div>
  );
}

export default App;
