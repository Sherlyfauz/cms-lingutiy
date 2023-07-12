import React from 'react';
import Sidebar from '../components/Sidebar.js';
import HistoryQuiz from '../components/HistoryQuizUser.js';
import HistoryPronounce from '../components/HistoryPronounceUser.js'
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function HistoryUser(){
  const navigate = useNavigate();

  const handleBacktoUser = () => {
      // Logika autentikasi
      // Setelah berhasil login, arahkan pengguna ke halaman utama
      navigate('/user');
  };

  return(
    <>
       <div id="button" style={{display: 'flex', alignItems: 'center'}}>
        <Button variant="contained"  
        style={{
            marginTop: '50px',
            width: '100%',
            marginLeft: '7%',
            marginRight: '80%',
            fontFamily: 'Poppins, sans-serif',
            backgroundColor: '#5e5873',
            color: 'white',
        }} 
         onClick={handleBacktoUser}
        >Back
        </Button>
        </div>
      <Box 
      sx={{ 
        fontFamily: 'Poppins, sans-serif', 
        display: 'flex', 
        flexDirection: 'column', 
        marginLeft: 10, 
        marginRight: '20px',
        marginBottom: 10,
        color: '#5e5873' 
        }}>
      
      <Sidebar />
      <h2 style={{fontWeight: 'bold', fontSize: '50px', textAlign:'center'}}>History Quiz</h2>
       <HistoryQuiz />
       <h2 style={{fontWeight: 'bold', fontSize: '50px', textAlign:'center'}}>History Pronounciation</h2>
        <HistoryPronounce />
       
       </Box>       
    </>
  )
}