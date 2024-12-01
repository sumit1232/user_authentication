import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
function Login() {
    const [loginData,setloginData] = useState({
        username:'',
        password:'',
    })

    const handleLoginSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login',loginData);
            const success = response.data;
            if(success){
                console.log('Login Successfully');
            }
            else{
                console.log("Login Failed");
            }
        } catch (error) {
            console.log("login Error",error);
        }
        setloginData({
            username:'',
            password:''
        })
    }



    const handleLoginChage = (e) => {
        const {name,value} = e.target;
        setloginData((prevData)=>({
            ...prevData,
            [name]:value
        }))
        // console.log(e);  
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleLoginSubmit}>
            <input type='text' 
            name='username' 
            placeholder='username'
            value={loginData.username}
             onChange={handleLoginChage} required />
             <input type='password' 
            name='password' 
            placeholder='password'
            value={loginData.password}
             onChange={handleLoginChage} required />

<button
          type='submit'
        >Login</button>
        <p>Not Register ?
          <Link to="/registration">Here</Link>
        </p>
        </form>
    </div>
  )
}

export default Login