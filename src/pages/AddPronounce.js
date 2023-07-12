import React from 'react';
import Sidebar from '../components/Sidebar.js';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const styles = {
    fileInput: {
      display: 'none',
    },
    chooseFileButton: {
      background: '#5e5873',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    fileName: {
      marginLeft: '8px',
    },
  };

export default function AddPronounce(){
    const navigate = useNavigate();

    const handleBackPronounce = () => {
        // Logika autentikasi
        // Setelah berhasil login, arahkan pengguna ke halaman utama
        navigate('/pronounce');
    };

    const handleSavePronounce = () => {
        // Logika autentikasi
        // Setelah berhasil login, arahkan pengguna ke halaman utama
        navigate('/pronounce');
  };
 
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
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
            <h2 style={{fontWeight: 'bold', fontSize: '50px', textAlign:'center'}}>Add Content Pronounciation</h2>
            <div className="textQuiz" id="textQuiz" style={{display: 'flex', alignItems: 'center'}}>
                <h3 style={{width: '30%'}}>Teks Pronounciation</h3>
                <TextField fullWidth id="articleTitle" 
                color= 'secondary'/>
            </div>
            
            <div className="title" id="title" style={{marginTop: '10px', display: 'flex', alignItems: 'center'}}>
                <h3 style={{width: '30%'}}>Audio Quiz</h3>
                <div>
                    <label htmlFor="fileInput" style={styles.chooseFileButton}>
                        Choose File
                    </label>
                    <span style={styles.fileName}>{selectedFile ? selectedFile.name : 'No file chosen'}</span>
                    <input
                        id="fileInput"
                        type="file"
                        accept=".mp3, .wav"
                        style={styles.fileInput}
                        onChange={handleFileChange}
                    />
                    </div>

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
         onClick={handleSavePronounce}
        >Add</Button>
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
         onClick={handleBackPronounce}
        >Back
        </Button>
        
                    </div>
        </>
    )
    }