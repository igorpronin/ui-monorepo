import React from 'react';
import {ThemeProvider, } from '@mui/material/styles';
import {defaultTheme} from '../../theme';
import Button from '@mui/material/Button';

type TBetButtonTypes = 'primary' | 'secondary';

interface IBetButtonProps {
  label: string
  type?: TBetButtonTypes
}

const BetButton: React.FC<IBetButtonProps> = ({label, type}) => {
  let color: TBetButtonTypes = 'primary';
  if (type) color = type;
  return (<ThemeProvider theme={defaultTheme}>
    <Button color={color} variant="contained">{label}</Button>
  </ThemeProvider>)
}

export default BetButton;
