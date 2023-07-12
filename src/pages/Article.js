import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';  
import { useNavigate } from "react-router-dom";
import image from '../assets/Linguity-Logo_title_rectangle.png'
import Sidebar from '../components/Sidebar.js';
import Box from "@mui/material/Box";



const columns = [
  { id: 'id', label: 'ID', minWidth: 10 },
  { id: 'title', label: 'Title', minWidth: 100 },
  { id: 'writer', label: 'Writer By', minWidth: 70 },
//   {
//     id: 'population',
//     label: 'Population',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'size',
//     label: 'Size\u00a0(km\u00b2)',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'density',
//     label: 'Density',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toFixed(2),
//   },
];

function createData(id, title, writer) {
  return { id, title, writer };
}

const rows = [
  createData(1, 'learning english now', 'lia tania'),
  createData(2, 'learning english now', 'lia tania'),
  createData(3, 'learning english now', 'lia tania'),
  createData(4, 'learning english now', 'lia tania'),
  createData(5, 'learning english now', 'lia tania'),
  createData(6, 'learning english now', 'lia tania'),
  
  
];

export default function Article() {
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

  const handleAddArticleClick = () => {
    navigate("/article/addarticle");
  }

  const handleEditArticleClick = () => {
    // Aksi saat tombol Edit diklik
    navigate("/article/editarticle");
  };
  
  
  const handleDeleteArticleClick = () => {
    // Aksi saat tombol Delete diklik
    alert('Delete');
  };

  return (
    
    <Box sx={{ fontFamily: 'Poppins, sans-serif', display: 'flex', flexDirection: 'column', marginLeft: 10, color: '#5e5873' }}>
       <Sidebar />
       <img src={image} alt="Linguity" style={{  width: '100%', maxWidth: '500px',height: 'auto'}}/>
       <h2 style={{ width: '100%', textAlign: 'center'}}>Learning Article</h2>
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
         onClick={handleAddArticleClick}
        >Add Article</Button>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table"
        sx={{ fontFamily: 'Poppins, sans-serif', color: '#5e5873'}}
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={{ fontFamily: 'Poppins, sans-serif', color: '#5e5873'}}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell sx={{ fontFamily: 'Poppins, sans-serif', color: '#5e5873'}} key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell align="right" sx={{ border: 'none' }}>
                      <Button
                        variant="outlined"
                        size="small"
                        color="secondary"
                        sx={{marginRight: '20px;'}}
                        onClick={() => handleEditArticleClick()}
                      >
                        View
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        color="secondary"
                        sx={{marginRight: '20px'}}
                        onClick={() => handleDeleteArticleClick()}
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
        sx={{ fontFamily: 'Poppins, sans-serif', color: '#5e5873'}}
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