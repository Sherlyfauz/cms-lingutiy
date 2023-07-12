import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(takeQuizId, date, level, history) {
    return {
      takeQuizId,
      date,
      level,
      history,
      score: history.reduce((count, item) => count + (item.results === true ? 1 : 0), 0),
    };
  }

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

 

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell className='color'>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell className='color' component="th" scope="row">
          {row.takeQuizId}
        </TableCell>
        <TableCell className='color' align="left">{row.date}</TableCell>
        <TableCell className='color' align="left">{row.level}</TableCell>
        <TableCell  className='color'align="left">{row.score}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell className='color' style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detail Quiz
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className='color'>Quiz Id</TableCell>
                    <TableCell className='color'>Record</TableCell>
                    <TableCell className='color'>Result</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.quizId}>
                      <TableCell className='color'>
                        {historyRow.quizId}
                      </TableCell>
                      <TableCell className='color'>
                      <audio controls>
                              <source src={historyRow.Record} type="audio/mpeg" />
                            </audio></TableCell>
                      <TableCell className='color'>{historyRow.results ? 'Pass' : 'Fail'}</TableCell>
                    </TableRow>
                  ))}
                  
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
    row: PropTypes.shape({
        takeQuizId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        level: PropTypes.string.isRequired,
        history: PropTypes.arrayOf(
          PropTypes.shape({
            quizId: PropTypes.string.isRequired,
            record: PropTypes.string.isRequired,
            results: PropTypes.bool.isRequired,
          })
        ).isRequired,
        score: PropTypes.number.isRequired,
      }).isRequired,
    };



export default function HistoryQuizUser() {
    const rows = [
        createData('1', '2023-05-23', 'hard', [
            {
       
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: true,
              },
              {
            
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: false,
              },
              {
               
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: true,
              },
              {
            
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: false,
              },
              {
               
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: true,
              },
              {
            
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: false,
              },
              {
               
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: true,
              },
              {
            
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: false,
              },
              {
               
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: true,
              },
              {
            
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: false,
              },
        ]),
        createData('2', '2023-05-23', 'hard', [
            {
       
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: true,
              },
              {
            
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: false,
              },
              {
               
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: true,
              },
              {
            
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: false,
              },
              {
               
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: true,
              },
              {
            
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: false,
              },
              {
               
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: true,
              },
              {
            
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: false,
              },
              {
               
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: true,
              },
              {
            
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: false,
              },
        ]),
        createData('3', '2023-05-23', 'hard', [
            {
       
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: true,
              },
              {
            
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: false,
              },
              {
               
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: true,
              },
              {
            
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: false,
              },
              {
               
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: true,
              },
              {
            
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: false,
              },
              {
               
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: true,
              },
              {
            
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: false,
              },
              {
               
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: true,
              },
              {
            
                quizId: '11091700',
                record: 'http://example.com/audio1.mp3',
                results: false,
              },
        ]),
        ];
  return (
    
      <Box >
        <TableContainer component={Paper}>
        <Table aria-label="collapsible table" >
            <TableHead>
            <TableRow 
            style={{color: '#5e5873'}}>
                <TableCell className='color'/>
                <TableCell className='color' >Take Quiz Id</TableCell>
                <TableCell className='color' >Date</TableCell>
                <TableCell className='color'>Level</TableCell>
                <TableCell className='color'>Score</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <Row key={row.takeQuizId} row={row} />
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </Box>
    
  );
}