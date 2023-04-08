import React from 'react'
 import "./Nav.css";
 import { useContext } from 'react';
import { allContext } from './Context';


const Nav = ({state}) => {
    const {setIslogedin,user}  = useContext(allContext);

  return (
    <div className='nav'>
         <div id='title'>
            <h2>React Context</h2>
         </div>
         <div id='menu'>
            <a href="">Home</a>
            <a href="">Product</a>
            <a href="">Profile</a>
            <a href="">Support</a>
             <button onClick={()=>{setIslogedin(false)}} style={{padding:"5px",border:"none"}}>Logout</button>
             <span style={{color:"green" , fontSize:"20px" , marginLeft:"30px"}}>Hey There!</span>
         </div>
    </div>
  )
}

export default Nav
