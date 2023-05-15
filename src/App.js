import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubmitButton from './components/SubmitButton/SubmitButton';
import Histogram from './components/Histogram/Histogram';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<SubmitButton />} />
      <Route exact path="/histogram-data" element={<Histogram />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;