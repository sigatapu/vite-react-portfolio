import React from 'react'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"

import Home from "./components/Home"
import About from "./components/About"
import Skills from './components/Skills'
import Projects from "./components/Projects"
import Services from "./components/Services"
import Contact from "./components/Contact"

const App = () => {
  return (
   <Router>
    <Navbar/>
    <Routes>

   <Route path="/" element = {<Home/>} />
   <Route path="/about" element = {<About/>} />
   <Route path="/skills" element = {<Skills/>} />
   <Route path="/projects" element = {<Projects/>} />
   <Route path="/services" element = {<Services/>} />
   <Route path="/contact" element = {<Contact/>} />

    </Routes>
    
   </Router>
  )
}

export default App
