import { memo, useCallback, useState } from 'react';

import { T4Button, T4Modal, T4Table } from '../../components';

export const TasksCrud: React.FC = memo(() => {
  const [open, setOpen] = useState(false);
  const [idEdit, setIdEdit] = useState(0);
  const [descriptionEdit, setDescriptionEdit] = useState('');

  const handleModal = useCallback(
    (id?: number, description?: string) => {
      if (id && description) {
        setIdEdit(id);
        setDescriptionEdit(description);
      } else {
        setIdEdit(0);
        setDescriptionEdit('');
      }
      setOpen(!open);
    },
    [open]
  );

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
      <T4Button onClick={() => handleModal()} text="ADD NEW TASK" />
      <T4Table openModal={open} handleModal={handleModal} />
      <T4Modal
        open={open}
        onClose={() => handleModal()}
        idEdit={idEdit}
        descriptionEdit={descriptionEdit}
      />
    </div>
  );
});
