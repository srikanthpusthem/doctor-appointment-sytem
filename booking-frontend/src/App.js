import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLogin from './components/User/UserLogin';
import UserRegister from './components/User/UserRegister';
import UserDashDashboard from './components/User/UserDashboard';

import DoctorDetail from './components/Doctor/DoctorDetail';
import DoctorRegister from './components/Doctor/DoctorRegister';
import DoctorLogin from './components/Doctor/DoctorLogin';
import DoctorDashboard from './components/Doctor/DoctorDashboard';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/doctorregister' element={<DoctorRegister />}/>
        <Route path="/doctordashboard" element={<DoctorDashboard />} />
        <Route path="/doctorlogin" element={<DoctorLogin />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/userregister" element={<UserRegister />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/userdashboard" element = {<UserDashDashboard/>}/>
        <Route path="/doctor/:id" element={<DoctorDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

