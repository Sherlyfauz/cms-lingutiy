import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from "react-router-dom";
import image from '../assets/Linguity-Logo_title_rectangle.png'
import Sidebar from '../components/Sidebar.js';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';

const columns = [
  { id: 'id', label: 'ID', minWidth: 10 },
  { id: 'teksaudio', label: 'Teks Audio', minWidth: 100 },
  { id: 'date', label: 'Date Update', minWidth: 70 },
  { id: 'level', label: 'Level', minWidth: 70 },
  { id: 'audioUrl', label: 'Audio', minWidth: 70 },
];

function createData(id, teksaudio, date, level, audioUrl) {
  return { id, teksaudio, date, level, audioUrl };
}

const rows = [
  createData(1, 'learning english now', '2023-05-26', 'Hard', 'http://example.com/audio1.mp3'),
  createData(2, 'learning english now', '2023-05-26', 'Hard', 'http://example.com/audio1.mp3'),
  createData(3, 'learning english now', '2023-05-26', 'Hard', 'http://example.com/audio1.mp3'),
  createData(4, 'learning english now', '2023-05-26', 'Hard', 'http://example.com/audio1.mp3'),
  createData(5, 'learning english now', '2023-05-26', 'Hard', 'http://example.com/audio1.mp3'),
  createData(6, 'learning english now', '2023-05-26', 'Hard', 'http://example.com/audio1.mp3'),
];

export default function Quiz() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const navigate = useNavigate();

  const handleAddQuizClick = () => {
    navigate("/quiz/addquiz");
  }

  
  const handleDeleteQuizClick = (row) => {
    console.log('Delete', row);
  };

  return (
    <Box sx={{ fontFamily: 'Poppins, sans-serif', display: 'flex', flexDirection: 'column', marginLeft: 10, color: '#5e5873' }}>
      <Sidebar />
      <img src={image} alt="Linguity" style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
      <h2 style={{ width: '100%', textAlign: 'center' }}>Quiz Content</h2>
      <Button variant="contained"  
        style={{
            display: 'flex',
            marginTop: '20px',
            width: '200px',
            marginLeft: '82%',
            marginBottom: '15px',
            fontFamily: 'Poppins, sans-serif',
            backgroundColor: '#5e5873',
            color: 'white',
        }} 
         onClick={handleAddQuizClick}
        >Add Quiz</Button>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table" sx={{ fontFamily: 'Poppins, sans-serif', color: '#5e5873' }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={{ fontFamily: 'Poppins, sans-serif', color: '#5e5873' }}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell sx={{ fontFamily: 'Poppins, sans-serif', color: '#5e5873' }} align="right" style={{ minWidth: 150 }}>
                
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell sx={{ fontFamily: 'Poppins, sans-serif', color: '#5e5873' }} key={column.id} align={column.align}>
                          {column.id === 'audioUrl' && value ? (
                            <audio controls>
                              <source src={value} type="audio/mpeg" />
                            </audio>
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                    <TableCell align="right" sx={{ border: 'none' }}>
                      <Button
                        variant="outlined"
                        size="small"
                        color="secondary"
                        sx={{marginRight: '20px'}}
                        onClick={() => handleDeleteQuizClick()}
                      >
                        Delete
                      </Button>
                      </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{ fontFamily: 'Poppins, sans-serif', color: '#5e5873' }}
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
