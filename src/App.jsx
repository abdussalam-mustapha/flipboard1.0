import { useState } from 'react'
import './App.css'

import { useDispatch, useSelector } from "react-redux";
import Auth from './component/auth/Auth';
import NewsFeed from './component/mainpage/NewsFeed';
import Signup from './component/auth/Signup';
import Navbar from './component/mainpage/Navbar';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

 

  return (
    <>
    <Navbar />
      {!isLoggedIn && <Signup />}
      
      {isLoggedIn && <NewsFeed />}
    </>
  )
}

export default App
