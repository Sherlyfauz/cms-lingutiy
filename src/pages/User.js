import * as React from 'react';
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
  { id: 'username', label: 'Username', minWidth: 30 },
  { id: 'name', label: 'Name', minWidth: 50 },
  { id: 'email', label: 'Email', minWidth: 120 },
  { id: 'password', label: 'Password', minWidth: 80 },
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

function createData(id, username, name, email, password) {
  return { id, username, name, email, password };
}

const rows = [
  createData(1, 'lia', 'lia tania', 'liatanita@gmail.com', 8365929),
  createData(2, 'lia', 'lia tania', 'liatanita@gmail.com', 8365929),
  createData(3, 'lia', 'lia tania', 'liatanita@gmail.com', 8365929),
  createData(4, 'lia', 'lia tania', 'liatanita@gmail.com', 8365929),
  createData(5, 'lia', 'lia tania', 'liatanita@gmail.com', 8365929),
  createData(6, 'lia', 'lia tania', 'liatanita@gmail.com', 8365929),
  
];

export default function User() {
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

  const handleAddUserClick = () => {
    
    navigate("/user/adduser");
  };
  const handleEditUserClick = () => {
    
    navigate("/user/edituser");
  };
  const handleHistoryUserClick = () => {
    
    navigate("/user/historyuser");
  };
  const handleDeleteUserClick = (row) => {
    // Aksi saat tombol Delete diklik
    alert('Delete', row);
  };

  const handleAddAdminClick = () => {
    
    navigate("/user/addadmin");
  };
  const handleEditAdminClick = () => {
    
    navigate("/user/editadmin");
  };
  
  const handleDeleteAdminClick = (row) => {
    // Aksi saat tombol Delete diklik
    alert('Delete', row);
  };
  return (
    
    <Box sx={{ fontFamily: 'Poppins, sans-serif', display: 'flex', flexDirection: 'column', marginLeft: 10, color: '#5e5873' }}>
       <Sidebar />
       <img src={image} alt="Linguity" style={{  width: '100%', maxWidth: '500px',height: 'auto'}}/>
       <h2 style={{ width: '100%', textAlign: 'center'}}>Data User</h2>
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
         onClick={handleAddUserClick}
        >Add User</Button>
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
                    <TableCell align="center" sx={{ border: 'none' }}>
                    <Button
                        variant="outlined"
                        size="small"
                        color="secondary"
                        sx={{marginRight: '30px;'}}
                        onClick={() => handleHistoryUserClick()}
                      >
                        History
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        color="secondary"
                        sx={{marginRight: '30px;'}}
                        onClick={() => handleEditUserClick()}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        color="secondary"
                        onClick={() => handleDeleteUserClick()}
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
      <h2 style={{ width: '100%', textAlign: 'center'}}>Data Admin</h2>
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
         onClick={handleAddAdminClick}
        >Add Admin</Button>
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
                    <TableCell align="center" sx={{ border: 'none' }}>
                      <Button
                        variant="outlined"
                        size="small"
                        color="secondary"
                        sx={{marginRight: '30px;'}}
                        onClick={() => handleEditAdminClick()}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        color="secondary"
                        onClick={() => handleDeleteAdminClick()}
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