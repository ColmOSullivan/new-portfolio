// 
import logo from './logo.svg';
// import sass styling
import './styles/App.css';
// utilities
import { Routes, Route, Link } from 'react-router-dom'
import React from 'react';
// components
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage'
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <main className="App">
      <NavBar />
      <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </main>
  );
}



export default App;
