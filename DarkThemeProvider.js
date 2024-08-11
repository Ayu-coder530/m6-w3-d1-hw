import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { selectTheme } from './redux/selectors';

const lightTheme = {
  background: '#fff',
  text: '#000',
  headerBackground: '#000',
};

const darkTheme = {
  background: '#333',
  text: '#fff',
  headerBackground: '#000',
};

function DarkThemeProvider({ children }) {
  const theme = useSelector(selectTheme);
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
}

export default DarkThemeProvider;
