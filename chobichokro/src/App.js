import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './components/admin/SystemAdmin.js'
import Navbar from './components/navbar.js'
import AdminLogin from './/components/admin/AdminLogin.js'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/admin' element={<Admin />}/>
        <Route path='/admin_login' element={<AdminLogin />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
