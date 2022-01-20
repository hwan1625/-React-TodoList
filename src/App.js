import React, { useState } from 'react';
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
  display: flex;
`;

const App = () => {
  const [page, setPage] = useState("home");
  const getPage = (p) => {
    setPage(p);
  }
  return (
    <>
      <GlobalStyle />
      <Inner>
        {/* <Left /> */}
        <Center page={page} />
        <Right getPage={getPage} />
      </Inner>
    </>
  );
}

export default App;
