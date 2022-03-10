import { memo, useCallback, useState } from 'react';

import { T4Button, T4Modal, T4Table } from '../../components';

export const TasksCrud: React.FC = memo(() => {
  const [open, setOpen] = useState(false);
  const [idEdit, setIdEdit] = useState(0);
  const [descriptionEdit, setDescriptionEdit] = useState('');

  const handleModal = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const addNewTask = useCallback(() => {
    setDescriptionEdit('');
    setIdEdit(0);
  }, []);

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>tasks4today</h1>
      <T4Button
        onClick={() => {
          addNewTask();
          handleModal();
        }}
        text="ADD NEW TASK"
      />
      <T4Table
        openModal={open}
        handleModal={() => handleModal()}
        setDescriptionEdit={setDescriptionEdit}
        setIdEdit={setIdEdit}
      />
      <T4Modal
        open={open}
        onClose={() => handleModal()}
        idEdit={idEdit}
        descriptionEdit={descriptionEdit}
      />
    </div>
  );
});
