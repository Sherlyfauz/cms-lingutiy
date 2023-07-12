import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(takePronounceId, date, record, result) {
    return {
      takePronounceId,
      date,
      record,
      result,
     };
  }

function Row(props) {
  const { row } = props;
  

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell className='color' component="th" scope="row">
          {row.takePronounceId}
        </TableCell>
        <TableCell className='color' align="left">{row.date}</TableCell>
        <TableCell className='color'>
            <audio controls>
                <source src={row.record} type="audio/mpeg" />
            </audio>
            </TableCell> 
        <TableCell  className='color'align="left">{row.result ? 'Pass' : 'Fail'}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
    row: PropTypes.shape({
        takePronounceId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        record: PropTypes.string.isRequired,
        result: PropTypes.bool.isRequired,
      }).isRequired,
    };



export default function HistoryPronounceUser() {
    const rows = [
        createData('1', '2023-05-23', 'http://example.com/audio1.mp3', true),
        createData('2', '2023-05-23', 'http://example.com/audio1.mp3', false),
        createData('3', '2023-05-23', 'http://example.com/audio1.mp3', true),
    ];

  return (
    
      <Box >
        <TableContainer component={Paper}>
        <Table aria-label="collapsible table" >
            <TableHead>
            <TableRow 
            style={{color: '#5e5873'}}>
                <TableCell className='color' >Take Pronounciation Id</TableCell>
                <TableCell className='color' >Date</TableCell>
                <TableCell className='color'>Record</TableCell>
                <TableCell className='color'>Result</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <Row key={row.takePronounceId} row={row} />
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </Box>
    
  );
}