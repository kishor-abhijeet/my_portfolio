import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState, useEffect } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen transition-colors duration-500">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
     
        <Routes >
        <Route path='/' element={ <Home />} />

      </Routes>
     <Footer />
     
      
      
    </div>
  )
}

export default App
