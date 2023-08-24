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
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/admin' element={<Admin />}/>

        {/*Route for different Login users*/}
        <Route path='/admin_login' element={<AdminLogin value='Admin Login'/>}/>
        <Route path='/audience_login' element={<AudienceLogin value='Audience Login'/>}/>
        <Route path='/distributor_login' element={<DistributorLogin value='Distributor Login'/>}/>
        <Route path='/theatre_login' element={<TheatreLogin value='Theatre Login'/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
