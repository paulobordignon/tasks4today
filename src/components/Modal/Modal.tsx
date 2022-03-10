import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { memo, useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { T4Button, T4TextField } from '..';

import api from '../../services/api';
import { style } from './styles';
import { ModalProps } from './types';

export const T4Modal: React.FC<ModalProps> = memo(
  ({ open, onClose, idEdit, descriptionEdit }: ModalProps) => {
    const {
      handleSubmit,
      control,
      formState: { errors },
      reset,
    } = useForm();
    const [defaultValue, setDefaultValue] = useState('');

    const postTask = useCallback(
      data => {
        api
          .post('/tasks', data)
          .then(() => onClose())
          .catch(() => console.log('erro'));
      },
      [open]
    );

    const putTask = useCallback(
      data => {
        console.log(data, idEdit);
        api
          .put(`/tasks/${idEdit}`, data)
          .then(() => onClose())
          .catch(() => console.log('erro'));
      },
      [open]
    );

    useEffect(() => {
      reset();
      if (descriptionEdit) {
        setDefaultValue(descriptionEdit);
      } else {
        setDefaultValue('');
      }
    }, [open]);

    return (
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Controller
              name="description"
              control={control}
              rules={{ required: true }}
              defaultValue={defaultValue}
              render={({ field: { onChange, value } }) => (
                <T4TextField
                  label="Description"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            {descriptionEdit ? (
              <T4Button onClick={handleSubmit(putTask)} text="EDIT" />
            ) : (
              <T4Button onClick={handleSubmit(postTask)} text="ADD" />
            )}
          </div>
          <div style={{ marginTop: '10px', color: 'red' }}>
            {errors.description && 'Description is required'}
          </div>
        </Box>
      </Modal>
    );
  }
);
