import React from 'react'
import frameImage from "../assets/frame.png";
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
    return (
        <div className="flex w-11/12 max-w-[950px] py-8 mx-auto gap-y-0 gap-x-12 justify-between">

            <div className='w-11/12 max-w-[400px]'>
                <h1 className='text-richblack-5 font-semibold text-[1.675rem] leading-[2.375rem]'>{title}</h1>

                <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                    <span className='text-richblack-100'>{desc1}</span>
                    <br></br>
                    <span className='text-blue-100 italic'>{desc2}</span>
                </p>

                {formtype === "signup" ?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn} />) :
                    (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}

                <div className='flex w-full items-center my-2 gap-x-2'>
                    <div className='w-full h-[1px] bg-richblack-700'></div>
                    <p className='text-richblack-700 font-medium leading[1.375rem]'>OR</p>
                    <div className='w-full h-[1px] bg-richblack-700'></div>
                </div>

                <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-100 border-richblack-700 border px-[12px] py-[8px] gap-x-2 mt-2">
                    <FcGoogle />
                    <p>Sign in with Google</p>
                </button>
            </div>

            <div className="relative w-11/12 max-w-[450px]">
                <img src={frameImage}
                    alt="Pattern"
                    width={558}
                    height={504}
                    loading="lazy" />

                <img src={image}
                    alt="Students"
                    width={558}
                    height={490}
                    loading="lazy"
                    className="absolute -top-4 right-4" />

            </div>
        </div>
    )
}

export default Template