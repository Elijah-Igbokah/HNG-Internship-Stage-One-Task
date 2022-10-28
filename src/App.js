import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/homepage.page.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
