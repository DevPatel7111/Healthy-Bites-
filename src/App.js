import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PrivateRoute from './components/PrivateRoute';
import BMIPage3 from './pages/BMIPage3';
import BMIPage1 from './pages/BMIPage1';
import BMIPage2 from './pages/BMIPage2';
import {auth} from "./firebase"
import About from './pages/About';
import SimpleChatbot from './components/SimpleChatbot';

function App() {
  const [username ,setUsername] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect (()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUsername(user.displayName)
      }
      else setUsername("");
    })
  })

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/about" element={<About/>}/>

        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard name = {username} />
          </PrivateRoute>
        } />
        <Route path="/dashboard/BMIPage1" element={<BMIPage1 />} />
        <Route path="/dashboard/BMIPage2" element={<BMIPage2 />} />
        <Route path="/dashboard/BMIPage3" element={<BMIPage3 />} />

        {/* <Route path="/BMIPage3" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <BMIPage3 />
          </PrivateRoute>
        } />

        <Route path="/BMIPage2" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <BMIPage2 />
          </PrivateRoute>
        } />
        <Route path="/BMIPage1" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <BMIPage1 />
          </PrivateRoute>
        } /> */}

      </Routes>
      <SimpleChatbot/>

    </div>
  );
}

export default App;
