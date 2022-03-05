import { useState, useCallback, useEffect } from 'react';

import api from './services/api';

type taskItem = {
  description: string;
  id: number;
};

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api
      .get('/tasks')
      .then(response => {
        setTasks(response?.data);
      })
      .catch(err => {
        console.log('err');
      });
  }, []);

  const renderItems = useCallback(
    () => tasks.map((item: taskItem) => <h1> {item.description} </h1>),
    [tasks]
  );

  return (
    <div className="App">
      <h1>testando api</h1>
      {renderItems()}
    </div>
  );
}

export default App;
