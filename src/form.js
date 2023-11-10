import './App.css';
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Form1() {
  const [formdata, setFormdata] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3002/register', formdata);
      alert('Registration successful');
      console.log(formdata)
      setFormdata({
        username:"",
        password:""
      })
    } catch (error) {
      alert('Registration failed');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault()
     
    try {
      await axios.post('http://localhost:3002/login', formdata);
      setFormdata({
        username:"",
        password:""
      })
      alert('Login successful');

      navigate('home');
    } catch (error) {
      alert('Login failed');
    }
  };
  return (
    <center className='body'><div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <form onSubmit={handleRegister}>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
        <input type='text'  placeholder='fullname' name='username' onChange={(e)=>setFormdata({...formdata,username:e.target.value})}></input><br/>
        <input type='password' placeholder='password' name='password' onChange={(e)=>setFormdata({...formdata,password:e.target.value})}></input>
          <button className='button' type="submit">Sign up</button>
        </form>
      </div>
      <div className="login">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input type="text" name="username" placeholder="username" onChange={(e)=>setFormdata({...formdata,username:e.target.value})}/>
          <input type="password" name="pswd" placeholder="Password" onChange={(e)=>setFormdata({...formdata,password:e.target.value})}/>
         <button className='button' type="submit" onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div></center>
  );
}

export default Form1;
