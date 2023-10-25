import './App.css';
import React, { useState } from 'react'
import axios from 'axios';

function Form1() {
    const[formdata,setformdata]=useState({
        name:"",
        email:"",
        password:""

    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formdata)
        axios.post('http://localhost:3002/adduserdata',formdata)
    .then((response)=>{
        console.log( response.data)
    } )
    .catch((error)=>{
    console.log(error)
    })
    }
  return (
    <center className='body'><div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
        <input type='text' value={formdata.name} placeholder='fullname' name='name' onChange={(e)=>setformdata({...formdata,name:e.target.value})}></input><br/>
        <input type='email' value={formdata.email} placeholder='Email' name='email' onChange={(e)=>setformdata({...formdata,email:e.target.value})}></input><br/>
        <input type='password' value={formdata.password} placeholder='password' name='password' onChange={(e)=>setformdata({...formdata,password:e.target.value})}></input>
          <button className='button' type="submit">Sign up</button>
        </form>
      </div>
      <div className="login">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <button className='button' type="submit">Login</button>
        </form>
      </div>
    </div></center>
  );
}

export default Form1;
