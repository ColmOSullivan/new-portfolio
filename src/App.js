// 
import logo from './logo.svg';
// import sass styling
import './styles/App.css';
// utilities
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import React from 'react';
// components
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage'
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  const location = useLocation();
  return (
    <main className="App">
      <NavBar />
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
            <Route path='/' element={<LandingPage />}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </AnimatePresence>
    </main>
  );
}



export default App;
