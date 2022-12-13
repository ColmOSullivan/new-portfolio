// 
import logo from './logo.svg';
// import sass styling
import './styles/App.css';
// utilities
import { Routes, Route, Link } from 'react-router-dom'
import React from 'react';
// components
import LandingPage from './components/LandingPage'
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavWrapper/>}>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/skills' element={<Contact/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Skills/>}/>
        </Route>
      </Routes>
    </div>
  );
}

function NavWrapper() {
  return(
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/skills">Projects</Link>
        <Link to="/projects">Skills</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  )
}

export default App;
