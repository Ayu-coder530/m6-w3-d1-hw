import React from 'react';
import styled from 'styled-components';
import DarkThemeProvider from './DarkThemeProvider';
import DarkThemeToggle from './DarkThemeToggle';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

const Header = styled.header`
  font-size: 2rem;
  font-weight: bold;
  color: teal;
  width: 100%;
  text-align: left;
  padding: 10px;
  background-color: ${(props) => props.theme.headerBackground};
`;

const Content = styled.div`
  text-align: center;
  margin-top: 50px;
  h1 {
    font-size: 3rem;
    margin-bottom: 10px;
  }
  p {
    font-size: 1.5rem;
  }
`;

function App() {
  return (
    <DarkThemeProvider>
      <AppWrapper>
        <Header>THEME APP <DarkThemeToggle /></Header>
        <Content>
          <h1>Welcome!</h1>
          <p>Full Stack Web Development</p>
        </Content>
      </AppWrapper>
    </DarkThemeProvider>
  );
}

export default App;
