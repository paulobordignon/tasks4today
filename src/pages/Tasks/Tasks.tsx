import { memo, useCallback, useState } from 'react';

import { T4Button, T4Modal, T4Table } from '../../components';

export const TasksCrud: React.FC = memo(() => {
  const [open, setOpen] = useState(false);

  const handleModal = useCallback(() => {
    setOpen(!open);
  }, [open]);

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
      <T4Table />
      <T4Modal open={open} onClose={() => handleModal()} id={1} />
    </div>
  );
});
