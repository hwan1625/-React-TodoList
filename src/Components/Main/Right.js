import React from 'react';
import styled from 'styled-components';

const RightStyled = styled.div`
  display: flex;
  flex-direction: column;
  button {
    width: 60px;
    height: 60px;
    border: 1px solid black;
    border-radius: 50%;
    margin: 10px 0;
    cursor: pointer;
  }
`;

const Right = (props) => {
  const onHome = () => {
    props.getPage("home");
  }
  const onSchedule = () => {
    props.getPage("schedule");
  }
  const onPosts = () => {
    props.getPage("posts");
  }
  return (
    <RightStyled>
      <button onClick={onHome}>홈</button>
      <button onClick={onSchedule}>일정</button>
      <button onClick={onPosts}>게시글</button>
    </RightStyled>
  );
};

export default Right;