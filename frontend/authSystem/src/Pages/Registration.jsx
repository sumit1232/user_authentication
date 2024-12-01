import React, { useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"

const Registration = () => {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    password: '',
  })

  const handleRegistrationchange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleRegistrationSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/registration',registrationData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setRegistrationData({
      username:'',
      password:''
    })
  }
  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleRegistrationSubmit}>
        <input
          type='text'
          name='username'
          placeholder="username"
          value={registrationData.username}
          onChange={handleRegistrationchange}
        />
        <input
          type='text'
          name='password'
          placeholder="password"
          value={registrationData.password}
          onChange={handleRegistrationchange}
        />
        <button
          type='submit'
        >Register</button>
        <p>Already Register ?
          <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Registration