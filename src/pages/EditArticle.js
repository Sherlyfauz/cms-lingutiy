import React from 'react';
import Sidebar from '../components/Sidebar.js';
import TextEdit from '../components/TextEdit.js';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function EditArticle(){
    const navigate = useNavigate();

    const handleBack = () => {
        // Logika autentikasi
        // Setelah berhasil login, arahkan pengguna ke halaman utama
        navigate('/article');
    };

    const handleSave = () => {
        // Logika autentikasi
        // Setelah berhasil login, arahkan pengguna ke halaman utama
        navigate('/article');
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
            <h2 style={{fontWeight: 'bold', fontSize: '50px', textAlign:'center'}}>View Article</h2>
            <div className="title" id="title" style={{display: 'flex', alignItems: 'center'}}>
                <h3 style={{width: '30%'}}>Article title</h3>
                <TextField fullWidth id="articleTitle" />
            </div>
            <div className="title" id="title" style={{marginTop: '10px', display: 'flex', alignItems: 'center'}}>
                <h3 style={{width: '30%'}}>Writer By</h3>
                <TextField fullWidth id="writerBy" />
            </div>

        </div>
        <TextEdit />
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
         onClick={handleSave}
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
         onClick={handleBack}
        >Back
        </Button>
        
                    </div>
        </>
    )
    }