import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import LoggedInForm from './LoggedInForm';

const LoginStyled = styled.div`
  width: 100%;
  border: 1px solid black;
  .outer-accounts {
    display: flex;
    justify-content: center;
    padding: 15px;
    li {
      padding: 5px;
    }
  }
`;

const Login = ({ loginState }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(loginState);
  const accounts = ["github", "kakao", "google", "naver"];
  return (
    <LoginStyled>
      {isLoggedIn ?
        <LoggedInForm loginState={isLoggedIn} accounts={accounts} />
        :
        <LoginForm loginState={isLoggedIn} accounts={accounts} />
      }
      <ul className="outer-accounts">
        {accounts.map((account, id) => (
          <li key={id}>{account}</li>
        ))}
      </ul>
    </LoginStyled>
  );
};

export default Login;