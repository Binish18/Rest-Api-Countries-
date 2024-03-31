import { useState } from 'react'

import { FaRegMoon } from "react-icons/fa";
import './App.css'
import { FiSun } from "react-icons/fi";
import { useEffect } from 'react';
import Countries from './Countries';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryDetails from './CountryDetails';

function App() {
  const [theme,setTheme] = useState('light-theme')
  const ToggleTheme=()=>{
    if(theme === 'dark-theme'){
      setTheme('light-theme')
    }
    else {
      setTheme('dark-theme')
    }

  }
  useEffect(()=>{
   document.body.className = theme;
  },[theme])

  return (
    <>


<nav className="navbar navbar-expand-lg ">
  <div className='container'>
  <a className="navbar-brand" href="#">Where in the World ? </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <a className="nav-link" href="#" id='toggler' onClick={()=>ToggleTheme()}>
          { theme === 'light-theme' ? <FiSun  className='me-2 mb-1'/> : <FaRegMoon className='me-2 mb-1'/>  } Dark Mode</a>
      </li>


    </ul>
  
  </div>
  </div>
</nav>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Countries/>} />
    <Route path="/country/:name" element={<CountryDetails/>} />
  </Routes>
</BrowserRouter>
     </>
  )
}

export default App
