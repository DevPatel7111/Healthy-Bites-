import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png';

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Stay Healthy  for today, tomorrow, and beyond."
      desc2="Stay healthy for beyoud........"
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login