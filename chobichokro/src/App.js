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
import DistributorPage from './components/distributor/DistributorPage';
import TheatrePage from './components/theatre/TheatrePage';
import Dashboard from './components/audience/dashboard';
import MovieDetails from './components/appear/movieDetails';
import Reciept from './components/appear/receipt';
import MovieReview from "./components/appear/MovieReview";
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

        {/*Route for pages*/}
        <Route path='/distributor_page' element={<DistributorPage />} />
        <Route path='/theatre_page' element={<TheatrePage />} />
        <Route path='/audience_dashboard' element={<Dashboard />} />
        <Route path='/movie/:movie_id' element={<MovieDetails />} />
        <Route path='/movie/reciept' element={<Reciept />} />
        <Route path='/movie/review' element={<MovieReview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
