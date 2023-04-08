import React, { useState } from 'react'
import { useContext } from 'react';
import { allContext } from './Context';

 var style={
    width:"300px",
    boxShadow:"0 10px 10px black",
    borderRadius:"20px",
    padding:"30px",
    margin:"150px auto",
    textAlign:"center"

     
    
 }
const Login = () => {
    const {setIslogedin,setUser,user}  = useContext(allContext);


    const handle=()=>{
        if(user.name==="bijit" && user.password==="525619"){
            setIslogedin(true);

        }
        else{
            alert("WRONG USERNAME & PASSWORD")
        }
    }
  return (
    <div style={style}>
    <h3>Please Login to Continue</h3>
       <div>
        <input type="text" placeholder='Username' onChange={(e)=>{setUser({
            ...user,
            name:e.target.value
        })}}/>
       </div><br/>
       <div>
        <input type="password" placeholder='Password' onChange={(e)=>{setUser({
            ...user,
            password:e.target.value
        })}}/>
 
       </div><br/>
       <div>
        <button onClick={handle}>Login</button>
       </div>
       
    </div>
  )
}

export default Login
