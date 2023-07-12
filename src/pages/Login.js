import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Logika autentikasi
    // Setelah berhasil login, arahkan pengguna ke halaman utama
    navigate('/dashboard');
  };

  return (
      <div className="formContainer"  >
          <Box
                sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                
                }}
            >
            <div style={{border: '1px solid #5e5873', padding: '50px', display: 'flex',
                flexDirection: 'column', borderRadius: '50px'}}>
                <h2>Hello! </h2>
                <span style={{textAlign:'right', marginTop: '-20px', marginBottom: '20px'}}>Linguity Admin Panel</span>
                <TextField label="Username" variant="standard" color="secondary" />
                <TextField label="Password" variant="standard" color="secondary" style={{marginTop: '20px'}}/>
                <Button variant="contained"  style={{marginTop: '50px', background: '#5e5873'}}  onClick={handleLogin}>
                    Login
                    </Button>
              </div>
            </Box>
      </div>
  );
}


