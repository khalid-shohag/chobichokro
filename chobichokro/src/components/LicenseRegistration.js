import React from "react";
import Navbar from "./navbar";
import { useState } from "react";
import '../components/design_file/LicenseRegistration.css'
import axios from 'axios'

function LicenseRegistration() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [transaction, setTransaction] = useState('');
    const [address, setAddress] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleRequest = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:port/api/license_registration', {
        selectedOption,
        username,
        password,
        email,
        phone,
        transaction,
        address,
      });

      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };


    return(
        <div>
            <Navbar />
            <div className="container">
        <div className="column" style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <h1 className="animation-container animated-text" style={{color: 'black'}}>License Registration &#x1F92D;</h1>
        </div>
      
        <div className="column"
        
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
    >
      
        <div
               
        style={{
          // backgroundImage: `url(${ImageAdmin})`,
          backgroundColor: 'aqua',
          background: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          width: '400px',
          height: '580px',
          marginTop: '100px'
        }}
      >
        <h2 style={{color: 'black'}}>Request for License no.</h2>
        <form >
        <div style={{marginTop: '10px', marginBottom: '10px' }}>
        <label style={{marginRight: '40px', color: 'blue'}}>
        <input
          type="radio"
          value="distributor"
          checked={selectedOption === 'distributor'}
          onChange={handleOptionChange}
        />
        Distributor
      </label>
      <label style={{color: 'maroon'}}>
        <input
          type="radio"
          value="theatre_owner"
          checked={selectedOption === 'theatre_owner'}
          onChange={handleOptionChange}
        />
        Theatre Owner
      </label>

          </div>
          <div style={{marginTop: '10px', marginBottom: '10px' }}>
            <label htmlFor="Name" style={{color: '#2A925E'}}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              style={{ width: '100%', height: "50px", borderRadius: '15px'  }}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={{ marginTop: '10px', marginBottom: '10px' }}>
            <label htmlFor="Email" style={{color: '#2A925E'}}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              style={{ width: '100%', height: "50px", borderRadius: '15px' }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{ marginTop: '10px', marginBottom: '10px' }}>
            <label htmlFor="Phone" style={{color: '#2A925E'}}>Phone:</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              style={{ width: '100%', height: "50px", borderRadius: '15px' }}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div style={{ marginTop: '10px', marginBottom: '10px' }}>
            <label htmlFor="tran_id" style={{color: '#2A925E'}}>Transaction number:</label>
            <input
              type="tran_id"
              id="tran_id"
              name="tran_id"
              style={{ width: '100%', height: "50px", borderRadius: '15px' }}
              onChange={(e) => setTransaction(e.target.value)}
            />
          </div>
          <div style={{ marginTop: '10px', marginBottom: '10px' }}>
            <label htmlFor="address" style={{color: '#2A925E'}}>Address:</label>
            <input
              type="address"
              id="address"
              name="address"
              style={{ width: '100%', height: "50px", borderRadius: '15px' }}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '10px 20px',
              marginLeft: '130px',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              width: '100px',
            }}
           onClick={handleRequest}
          >
            Request
          </button>
        </form>
      </div>
            </div>
        </div>
        </div>
    );
}

export default LicenseRegistration;