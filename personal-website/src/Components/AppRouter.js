import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './Pages/Home';
import Projects from './Pages/Projects';

function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Home />
                } />
                <Route path="/projects/:category" element={
                    <Projects />
                } />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter