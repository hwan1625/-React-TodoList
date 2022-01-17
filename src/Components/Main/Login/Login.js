import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import LoggedInForm from './LoggedInForm';

const LoginStyled = styled.div`
  width: 100%;
  min-height: 25%;
  
`;

const Login = ({ loginState }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(loginState);
  return (
    <LoginStyled>
      {isLoggedIn ?
        <LoggedInForm loginState={isLoggedIn} />
        :
        <LoginForm loginState={isLoggedIn} />
      }
    </LoginStyled>
  );
};

export default Login;