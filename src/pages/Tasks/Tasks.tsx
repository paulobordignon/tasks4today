import { memo, useState } from 'react';

import { T4Button, T4Modal, T4Table } from '../../components';

export const TasksCrud: React.FC = memo(() => {
  const [open, setOpen] = useState(false);

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
      <T4Button onClick={() => {}} text="ADD NEW TASK" />
      <T4Table />
    </div>
  );
});
