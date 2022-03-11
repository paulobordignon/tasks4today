import { render } from '@testing-library/react';

import { T4Table } from './Table';

describe('table component', () => {
  it('should exist the table component', () => {
    const { getByTestId } = render(
      <T4Table openModal={false} handleModal={() => {}} />
    );

    expect(getByTestId('component_button')).toBeTruthy();
    expect(getByTestId('component_table')).toBeTruthy();
  });
});
