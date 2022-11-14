import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './home';
import Services from './publicHolidays';
import PublicHolidays from './publicHolidays';
import About from './about';
import Provinces from './provinces';

import './App.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/public-holidays' element={<PublicHolidays />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/provinces' element={<Provinces />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
