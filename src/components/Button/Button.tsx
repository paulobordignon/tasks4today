import Button from '@mui/material/Button';
import { memo } from 'react';

import { ButtonProps } from './types';

export const T4Button: React.FC<ButtonProps> = memo(
  ({ onClick, text }: ButtonProps) => {
    return (
      <Button variant="contained" onClick={onClick}>
        {text}
      </Button>
    );
  }
);
