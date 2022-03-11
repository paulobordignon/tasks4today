import { render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';

import { TasksCrud } from './Tasks';

describe('tasks integration', () => {
  it('should add new task', async () => {
    const { getByText, getByLabelText } = render(
      <TasksCrud />
    );

    userEvent.click(getByText('ADD NEW TASK'));

    await waitFor(() => {
      expect(getByText('ADD')).toBeInTheDocument();
    })

    userEvent.type(getByLabelText('Description'), 'new task test')
    userEvent.click(getByText('ADD'));
    
    await waitFor(() => {
      expect(getByText('new task test')).toBeInTheDocument();
    })

  });
});
