import React from 'react';
import styled from 'styled-components';

const LoggedInFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  padding-bottom: 0px !important;
  height: 195px;
  .profile-img {
    margin: 0 auto;
    width: 100px;
    height: 100px;
    border: 1px solid black;
    border-radius: 50%;
  }
  .username {
    text-align: center;
    padding: 10px 0 0 0;
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
  
`;

const LoggedInForm = ({ accounts }) => {
  return (
    <LoggedInFormStyled>
      <div className="profile-img">

      </div>
      <div className="username">
        홍길동님! 환영합니다.
      </div>
      <div className="logout-btn">
        <button>로그아웃</button>
      </div>

    </LoggedInFormStyled>
  );
}

export default LoggedInForm;