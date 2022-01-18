import React, { useState } from 'react';
import styled from 'styled-components';
import Login from './Login/Login.js';
import List from './List/List.js';

const LeftStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: calc(100vh - 32px);
`;

const Left = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <LeftStyled>
      <Login loginState={isLoggedIn} />
      <List />
    </LeftStyled>
  );
};

export default Left;