import Button from '@mui/material/Button';
import { memo } from 'react';

import { ButtonProps } from './types';

export const T4Button: React.FC<ButtonProps> = memo(props => {
  return (
    <Button variant="contained" onClick={props.onClick}>
      {props.text}
    </Button>
  );
});
