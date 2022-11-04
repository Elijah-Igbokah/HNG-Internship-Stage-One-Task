import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.page.jsx';
import ContactPage from './pages/contact-page/contact.page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/contact' element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
