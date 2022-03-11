import { render } from '@testing-library/react';

import { T4Button } from './Button';

describe('button component', () => {
  it('should exist the button', () => {
    const { getByTestId } = render(<T4Button text="Botao teste" />);

    expect(getByTestId('component_button')).toBeTruthy();
  });

  it('should exist text on button', () => {
    const { getByText } = render(<T4Button text="Botao teste" />);

    expect(getByText('Botao teste')).toBeTruthy();
  });
});
