import { memo } from 'react';

import { TasksCrud } from './pages/Tasks';

export const App: React.FC = memo(() => {
  return <TasksCrud />;
});
