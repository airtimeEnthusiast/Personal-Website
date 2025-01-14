import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import CoasterPage from './Pages/HobbyPage/RollerCoasters/CoasterPage';
import ParkCoastersPage from "./Components/ParkCoastersPage";
//import UploadPages from "./Pages/Other/uploadPhotos";

function App() {
  return (
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:category" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/hobbies/roller-coasters" element={<CoasterPage />} />
        {/*<Route path="/uploadPhotos" element={<UploadPages/>}/>*/}
        <Route path="/park/:id" element={<ParkCoastersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
