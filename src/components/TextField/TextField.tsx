import TextField from '@mui/material/TextField';
import { memo } from 'react';

import { TextFieldProps } from './types';

export const T4TextField: React.FC<TextFieldProps> = memo(
  ({ label, onChange, value }: TextFieldProps) => {
    return (
      <TextField
        variant="outlined"
        label={label}
        onChange={onChange}
        value={value}
      />
    );
  }
);
