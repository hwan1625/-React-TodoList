import React from 'react';
import styled from 'styled-components';

const LoggedInFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  .profile {
    margin: 0 auto;
    width: 150px;
    height: 150px;
    border: 1px solid black;
    border-radius: 50%;
  }
  .logout-btn {
    display: flex;
    justify-content: center;
    padding: 15px;
    button {
      border: 1px solid black;
      border-radius: 6px;
    }
  }
  .outer-accounts {
    display: flex;
    justify-content: center;
    li {
      padding: 5px;
    }
  }
`;

const LoggedInForm = () => {
  const accounts = ["github", "kakao", "google", "naver"];
  return (
    <LoggedInFormStyled>
      <div className="profile">

      </div>
      <div className="logout-btn">
        <button>로그아웃</button>
      </div>
      <ul className="outer-accounts">
        {accounts.map((account, id) => (
          <li key={id}>{account}</li>
        ))}
      </ul>
    </LoggedInFormStyled>
  );
}

export default LoggedInForm;