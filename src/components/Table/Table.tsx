import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { memo, useCallback, useState, useEffect } from 'react';

import api from '../../services/api';

import { T4Button } from '..';

import { TableProps } from './types';

export const T4Table: React.FC<TableProps> = memo(
  ({ openModal, handleModal }: TableProps) => {
    const [rows, setRows] = useState([{ id: 1, description: 'Carregando...' }]);
    const [done, setDone] = useState(0);

    const deleteTask = useCallback(
      id => {
        api
          .delete(`/tasks/${id}`)
          .then(() => setDone(done + 1))
          .catch(() => console.log('erro'));
      },
      [done]
    );

    useEffect(() => {
      api
        .get('/tasks')
        .then(response => {
          setRows(response?.data);
        })
        .catch(() => {
          setRows([{ id: 1, description: 'Erro ao carregar dados' }]);
        });
    }, [done, openModal]);

    return (
      <div data-testid="component_table">
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
                    <Checkbox onChange={() => deleteTask(row.id)} data-testid='checkbox_removeTask' />
                  </TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>
                    <T4Button
                      text="EDIT"
                      onClick={() => handleModal(row.id, row.description)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
);
