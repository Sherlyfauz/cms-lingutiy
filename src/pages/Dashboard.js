import React from 'react';
import Sidebar from '../components/Sidebar.js';
import Box from "@mui/material/Box";
import image from '../assets/Linguity-Logo.png';

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: '900',
          marginLeft: '20%',
          marginRight: '20%',
          color: '#5e5873',
        }}
      >
        <img src={image} alt="Linguity" style={{ height: '100%', maxHeight: '200px', width: 'auto' }} />
        <h2 style={{ fontSize: '100px', fontFamily: 'League Spartan, sans-serif' }}>Linguity</h2>
      </Box>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#5e5873',
        }}>
            <h3 style={{fontSize: '50px' }}>Hello Admin</h3>
            <p style={{fontSize: '20px' }}>Congratulations! Our users are now up to <span>15</span></p>
        </div>
    </>
  );
}
