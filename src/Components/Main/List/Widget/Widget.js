import React, { useState } from 'react';
import styled from 'styled-components';
import Schedule from './Schedule';
import Posts from './Posts';

const WidgetStyled = styled.div`
  border-top: 1px solid black;
  width: 100%;
  .buttons {
    display: flex;
    justify-content: center;
    button {
      padding: 5px 20px;
      cursor: pointer;
    }
  }
`;

const Widget = () => {
  const [state, setState] = useState(true);
  const onSchedule = () => {
    setState(true);
  };
  const onPosts = () => {
    setState(false);
  };
  return (
    <WidgetStyled>
      <div className="buttons">
        <button onClick={onSchedule}>일정</button>
        <button onClick={onPosts}>게시글</button>
      </div>
      {state ? <Schedule /> : <Posts />}
    </WidgetStyled>
  );
}

export default Widget;