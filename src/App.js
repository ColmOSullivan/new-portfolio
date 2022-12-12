// 
import logo from './logo.svg';
// import sass styling
import './styles/App.css';
// utilities
import { Routes, Route } from 'react-router-dom'
// components
import LandingPage from './components/LandingPage'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<LandingPage />}/>
      </Routes>
    </div>
  );
}

export default App;
