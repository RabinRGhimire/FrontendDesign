import React, {useState} from 'react';
import './App.css';
import MyRoutes from './MyRoutes';

function App() {
  const adminUser={
    email:'admin@admin.com',
    password: 'admin123'
  }

const [user, serUser] = useState({name:'', email:''});
const [error, setError] = useState('');

const Login=details=>{
  console.log(details);
}

const Logout=()=>{
  console.log("Log Out");
}

  return (
    <>
    <MyRoutes/>
    </>
  );
}

export default App;
