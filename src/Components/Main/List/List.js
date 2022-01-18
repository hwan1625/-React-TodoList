import React, { useState } from 'react';
import styled from 'styled-components';
import Clock from './Clock';
import Weather from './Weather';
import Widget from './Widget';

const ListStyled = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid black;
`;

const List = () => {
  const clock = new Date();
  const [isDay, setIsDay] = useState(() => {
    const hours = clock.getHours();
    if (hours >= 6 && hours <= 18) {
      return true;
    } else {
      return false;
    }
  })
  return (
    <ListStyled>
      <Clock clock={clock} />
      <Weather isDay={isDay} />
      <Widget />
    </ListStyled>
  );
};

export default List;