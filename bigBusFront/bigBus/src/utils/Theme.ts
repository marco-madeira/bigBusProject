import { createTheme } from "@mui/material";

export const Theme = createTheme({
  palette: {
    primary: {
      light: 'rgb(66, 97, 139)',
      main: '#FFE879',
      dark: '#83C464',
    },
    secondary: {
      light: 'rgb(112, 112, 112)',
      main: '#ffff',
      dark: 'rgb(53, 53, 53)'
    },
    error: {
      light: '#ef5350',
      main: '#d32f2f',
      dark: '#c62828'
    },
    warning: {
      light: '#ff9800',
      main: '#ed6c02',
      dark: '#e65100'
    },
    info: {
      light: '#03a9f4',
      main: '#0288d1',
      dark: '#01579b'
    },
    success: {
      light: '#4caf50',
      main: '#2e7d32',
      dark: '#1b5e20'
    },
    
  }
})