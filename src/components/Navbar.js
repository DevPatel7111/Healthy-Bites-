import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import logo from "../assets/Logo.svg"

const Navbar = (props) => {
    
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;


    return (
        <div className='flex justify-between items-center w-11/12 max-w-[950px] py-4 mx-auto'>
            <Link to="/" >
                <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
            </Link>
            <nav>
                <ul className='text-richblack-100 flex gap-x-6'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className='flex gap-x-4 items-center'>
                {!isLoggedIn &&
                    <Link to="/login">
                        <button className='bg-richblack-800 text-richblack-100  py-2 px-4 rounded-md border border-richblack-700'>
                            Log in
                        </button>
                    </Link>
                }
                {!isLoggedIn &&
                    <Link to="/signup">
                        <button className='bg-richblack-800 text-richblack-100  py-2 px-4 rounded-md border border-richblack-700'>
                            Sign up
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/">
                        <button onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logout Successfully")
                        }}
                            className="bg-richblack-800 py-2 px-4 rounded-md border border-richblack-700 text-richblack-100">
                            Logout
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to="/dashboard">
                        <button className="bg-richblack-800 py-2 px-4 rounded-md border border-richblack-700 text-richblack-100">
                            Dashboard
                        </button>
                    </Link>
                }
            </div>

            {/* <button className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded overflow-hidden" onClick={toggleChat}>
                {chatOpen ? 'Close Chat' : 'Open Chat'}
            </button>
            {chatOpen && (
                <ChatBot
                    steps={[
                        {
                            id: '1',
                            message: 'Hi  sir i am your personal assistant, sam.?',
                            trigger: '2',
                        },
                        {
                            id: '2',
                            message: 'what is your name',
                            trigger: '3',
                        },
                        {
                            id: '3',
                            user: true,
                            trigger: '4',
                        },
                        {
                            id: '4',
                            message:"hi {previousValue} how may i help u ..... ",
                            trigger: '5',
                        },
                        {
                            id: '5',
                           user:true,
                            trigger:'6',
                        },
                        {
                            id:'6',
                            message:"please mail us we will try to sort your data as soon as possible ",
                            end:true
                        }
                    ]}
                />
            )} */}
        </div>
    )
}

export default Navbar;
