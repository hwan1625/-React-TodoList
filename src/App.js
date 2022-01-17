import React from 'react';
import Left from './Components/Main/Left';
import Center from './Components/Main/Center';
import Right from './Components/Main/Right';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {

  }
`;
const Inner = styled.div`
  padding: 16px 100px;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Inner>
        <Left />
        <Center />
        <Right />
      </Inner>
    </>
  );
}

export default App;
