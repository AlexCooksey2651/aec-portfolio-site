import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './NavBar'
import Home from './Home'
import Projects from './Projects'
import Bio from './Bio'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/bio' element={<Bio />}/>
        {/* <Route path='/contact' element={<Contact />}/> */}
      </Routes>
    </div>
  );
}

export default App;
