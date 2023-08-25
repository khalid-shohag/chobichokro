import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './components/admin/SystemAdmin.js'
import Navbar from './components/navbar.js'
import AdminLogin from './/components/admin/AdminLogin.js'
import AudienceLogin from './components/audience/AudienceLogin';
import DistributorLogin from './components/distributor/DistributorLogin';
import TheatreLogin from './components/theatre/TheatreLogin';
import { useState } from 'react';
import LicenseRegistration from './components/LicenseRegistration';
import Home from './components/Home';
import LicenseStatus from './components/LicenseStatus';
import LicenseStatusLogin from './components/LicenseStatusLogin';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />}/>

        {/*Route for different Login users*/}
        <Route path='/admin_login' element={<AdminLogin value='Admin Login'/>}/>
        <Route path='/audience_login' element={<AudienceLogin value='Audience Login'/>}/>
        <Route path='/distributor_login' element={<DistributorLogin value='Distributor Login'/>}/>
        <Route path='/theatre_login' element={<TheatreLogin value='Theatre Login'/>}/>
        <Route path='/license_registration' element={<LicenseRegistration />} />
        <Route path='license_status' element={<LicenseStatus />} />
        <Route path='/license_status_check' element={<LicenseStatusLogin />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
