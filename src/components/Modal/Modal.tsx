import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { memo, useCallback } from 'react';

import { T4Button, T4TextField } from '..';

import api from '../../services/api';
import { ModalProps } from './types';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const T4Modal: React.FC<ModalProps> = memo(props => {
  const postTask = useCallback(() => {
    api
      .post('/tasks', { description: 'testeeeee' })
      .then(() => console.log('ok'))
      .catch(() => console.log('erro'));
  }, []);

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <T4TextField />
        <T4Button
          onClick={() => {
            postTask();
            props.onClose();
          }}
          text="ADD"
        />
      </Box>
    </Modal>
  );
});
