import React from 'react';
import './App.css';
import Home from './home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlipCardComponent from './sample';
import Form from './form';
import Card from './product';
import Pv from './pv';
import Pvs from './pvs';
import StudentLists from './pvslistr';
import Borrow from './borrow';
import Arrow from './check';
import JournalData from './journalData'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/sample" element={<FlipCardComponent />} />
        <Route path="/" element={<Form />} />
        <Route path="/product" element={<Card />} />
        <Route path="/pv" element={<Pv />} />
        <Route path="/pvs" element={<Pvs/>} />
        <Route path="/cart" element={<StudentLists></StudentLists>} />
        <Route path="/borrow" element={<Borrow></Borrow>} />
        <Route path="/arrow" element={<Arrow></Arrow>} />
        <Route path="/jd" element={<JournalData></JournalData>} />

      
      </Routes>
    </Router>
  );
}

export default App;
