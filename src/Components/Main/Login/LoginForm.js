import React from 'react';
import styled from 'styled-components';

const LoginFormStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  .login-box {
    width: 200px;
    height: 100px;
    border: 1px solid black;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    li {
      span {
        width: 40px;
      }
    }
  }
  .login-btns {
    display: flex;
    justify-content: center;
    padding: 15px 10px;
    button {
      margin: 0 10px;
      border: 1px solid black;
      border-radius: 6px;
    }
  }
`;

const LoginForm = () => {
  return (
    <LoginFormStyled>
      <form action="">
        <ul className="login-box">
          <li>
            <span>ID</span>
            <input type="text" placeholder="아이디" />
          </li>
          <li>
            <span>PW</span>
            <input type="password" placeholder="비밀번호" />
          </li>
        </ul>
        <div className="login-btns">
          <button type="submit">로그인</button>
          <button>회원가입</button>
        </div>
      </form>
    </LoginFormStyled>
  );
}

export default LoginForm;