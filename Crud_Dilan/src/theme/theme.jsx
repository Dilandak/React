import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E5E1DA', 
    },
    error: {
      main: '#F44336', 
    },
    background: {
      default: 'White',
    },
  },
  typography: {
    fontFamily: 'Trebuchrial, sans-set MS, Aerif',
  },
});

export default theme;