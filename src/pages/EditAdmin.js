import React from 'react';
import Sidebar from '../components/Sidebar.js';
import { TextField, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function EditAdmin(){
    const navigate = useNavigate();

    const handleBackAdmin = () => {
        // Logika autentikasi
        // Setelah berhasil login, arahkan pengguna ke halaman utama
        navigate('/user');
    };

    const handleSaveEditAdmin = () => {
        // Logika autentikasi
        // Setelah berhasil login, arahkan pengguna ke halaman utama
        navigate('/user');
  };
 
    return(
        <>
        <Sidebar />
        <div style={{
            width: '900',
            marginLeft: '20%',
            marginTop: '50px',
            marginRight: '20%',
            fontFamily: 'Poppins, sans-serif',
            color: '#5e5873',
        }}>
            <h2 style={{fontWeight: 'bold', fontSize: '50px', textAlign:'center'}}>Edit Admin Account</h2>
            <div className="userName" id="userName" style={{display: 'flex', alignItems: 'center'}}>
                <h3 style={{width: '30%'}}>Username</h3>
                <TextField fullWidth id="userName" 
                color= 'secondary'/>
            </div>
            <div className="name" id="name" style={{display: 'flex', alignItems: 'center'}}>
                <h3 style={{width: '30%'}}>Name</h3>
                <TextField fullWidth id="name" 
                color= 'secondary'/>
            </div>
            <div className="email" id="email" style={{display: 'flex', alignItems: 'center'}}>
                <h3 style={{width: '30%'}}>Email</h3>
                <TextField fullWidth id="email" 
                color= 'secondary'/>
            </div>
            <div className="password" id="password" style={{display: 'flex', alignItems: 'center'}}>
                <h3 style={{width: '30%'}}>Password</h3>
                <TextField fullWidth id="password" 
                color= 'secondary'/>
            </div>
            </div>
        
        <div id="button" style={{display: 'flex', alignItems: 'center'}}>
        <Button variant="contained"  
        style={{
            marginTop: '50px',
            width: '100%',
            marginLeft: '20%',
            marginRight: '20%',
            fontFamily: 'Poppins, sans-serif',
            backgroundColor: '#5e5873',
            color: 'white',
        }} 
         onClick={handleSaveEditAdmin}
        >Save Edit</Button>
        <Button variant="contained"  
        style={{
            marginTop: '50px',
            width: '100%',
            marginLeft: '20%',
            marginRight: '20%',
            fontFamily: 'Poppins, sans-serif',
            backgroundColor: '#5e5873',
            color: 'white',
        }} 
         onClick={handleBackAdmin}
        >Back
        </Button>
        
                    </div>
        </>
    )
    }