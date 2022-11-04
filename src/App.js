import React from 'react';
import './App.css';

import { Routes, Route, Router } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.page.jsx';
import ContactPage from './pages/contact-page/contact.page';
import Footer from "./components/footer/footer.component.jsx"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/contact' element={<ContactPage />} />
        </Routes>
        <div>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
