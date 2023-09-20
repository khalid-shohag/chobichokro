import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, Outlet, useNavigate } from 'react-router-dom'; // Import the new hooks

const DropdownMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Use the useNavigate hook instead of withRouter

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = ['Admin', 'Distributor', 'Theatre', 'Audience', 'Get License', 'License Status check'];

  const handleItemClick = (item) => {
    setIsMenuOpen(false);

    // Navigate to corresponding routes
    switch (item) {
      case 'Admin':
        navigate('/admin');
        break;
      case 'Theatre':
        navigate('/theatre_page');
        break;
      case 'Audience':
        navigate('/audience_page');
        break;
      case 'Distributor':
        navigate('/distributor_page');
        break;
        case 'Get License':
          navigate('/license_registration');
          break;
          case 'License Status check':
            navigate('/license_status_check');
            break;
      default:
        break;
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={toggleMenu}
        style={{ padding: '10px 20px', background: 'black', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        <FaBars style={{ marginRight: '10px' }} />
        {/* {isMenuOpen ? 'Close' : 'Menu'} */}
      </button>
      {isMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 50,
            left: -50,
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            width: '300px'
          }}
        >
          {menuItems.map((item) => (
            <div
              key={item}
              onClick={() => handleItemClick(item)}
              style={{
                padding: '10px 20px',
                cursor: 'pointer',
                background: 'transparent',
                backgroundColor: '#2A925E',
                color: 'black',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
