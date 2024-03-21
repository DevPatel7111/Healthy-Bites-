import React from 'react'
import Template from "../components/Template";
import signupImg from "../assets/signup.png";

const Signup = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Start your healthy life journey with us "
      desc1="##########"
      desc2="######"
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup