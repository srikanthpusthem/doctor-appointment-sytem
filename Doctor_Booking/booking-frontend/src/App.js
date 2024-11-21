import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/HomePage';

import DoctorDetail from './components/DoctorDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element = {<Dashboard/>}/>
        <Route path="/doctor/:id" element={<DoctorDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
