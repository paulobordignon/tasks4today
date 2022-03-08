import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { memo, useState, useEffect } from 'react';

import api from '../../services/api';

export const T4Table: React.FC = memo(() => {
  const [rows, setRows] = useState([{ id: 1, description: 'Carregando...' }]);

  useEffect(() => {
    api
      .get('/tasks')
      .then(response => {
        setRows(response?.data);
      })
      .catch(() => {
        setRows([{ id: 1, description: 'Erro ao carregar dados' }]);
      });
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ width: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Done</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  DONE
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>EDIT</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
});
