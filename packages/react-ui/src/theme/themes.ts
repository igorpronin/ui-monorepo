import {createTheme} from '@mui/material/styles';

interface IThemePalette {
  primary: {
    main: string
    light: string
    dark: string
  },
  secondary: {
    main: string
    light: string
    dark: string
  },
  // error: {},
  // warning: {},
  // info: {},
  // success: {}
}

const lightThemePalette: IThemePalette = {
  primary: {
    main: '#b9f3ff',
    light: '#dbfaff',
    dark: '#5ee6ff'
  },
  secondary: {
    main: '#d5d5d5',
    light: '#fcfcfc',
    dark: '#888888'
  }
}

const darkThemePalette: IThemePalette = {
  primary: {
    main: '#556de6',
    light: '#8ca2ff',
    dark: '#4f34e1'
  },
  secondary: {
    main: '#32394e',
    light: '#566181',
    dark: '#222736'
  }
}

const components = () => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '12px'
        }
      }
    }
  }
}

export const defaultTheme = createTheme({
  palette: darkThemePalette,
  components: components()
});

export const lightTheme = createTheme({
  palette: lightThemePalette,
  components: components()
});

