import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import CoasterPage from './Pages/HobbyPage/RollerCoasters/CoasterPage';

function App() {
  return (
    <Router basename="/Personal-Website"> {/* Add basename here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:category" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/roller-coasters" element={<CoasterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
