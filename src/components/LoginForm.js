import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';


const LoginForm = ({ setIsLoggedIn }) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" })
  const[errormessage,setErrormessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }))
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
      signInWithEmailAndPassword(auth,formData.email,formData.password)
     .then(async(res)=>{
      const user = res.user;


      toast.success("Logged In");
    navigate("/dashboard");
     })
    
    .catch((error)=>{
      console.log(error)
      setErrormessage("Email is already in use ")
      toast.error("Please register first  ")
    })

  }
  return (
    <form onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6">
      <label className="w-full">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Email Address<sup>*</sup>
        </p>
        <input
          type="email"
          required
          value={formData.email}
          placeholder="Enter your email address"
          onChange={changeHandler}
          name="email"
          className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
        />
      </label>

      <label className="w-full relative">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Password<sup className="text-pink-200">*</sup>
        </p>
        <input
          type={showPassword ? "text" : "password"}
          required
          value={formData.password}
          placeholder="Enter Password"
          onChange={changeHandler}
          name="password"
          className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5" />

        <span onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] cursor-pointer ">
          {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
        </span>
        <Link to="#">
          <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
            Forget Password
          </p>
        </Link>
      </label> 

      <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">
        Sign In
      </button>
    </form>
  )
}

export default LoginForm