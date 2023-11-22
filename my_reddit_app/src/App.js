import './App.css';
import { useState } from 'react';
import LogIn from './functions/logIn';
function App() {
  const [userName,setUserName]=useState('');
  
  return (
    <div className="App">
      
        {userName === ''? 
      <button onClick={()=>{LogIn(setUserName)}}>Log In</button> :
      <span>{userName}</span>} 
    </div>
  );
}

export default App;
