
import React, { useState } from 'react';
import axios from 'axios';
import './css/styles.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SubmitRest from './components/SubmitRest';
import Generate from './components/Generate';
import Reset from './components/Reset';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SubmitRest />} />
          <Route exact path="/random" element={<Generate />} />
          <Route exact path='/reset' element={<Reset />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;