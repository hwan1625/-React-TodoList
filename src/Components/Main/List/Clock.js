import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const ClockStyled = styled.div`
  border: 1px solid black;
  width: 100%;
  font-size: 30px;
  text-align: center;
`;

const Clock = ({ clock }) => {
  const [time, setTime] = useState(clock);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <ClockStyled>
      {String(time.getHours()).padStart(2, "0")}:{String(time.getMinutes()).padStart(2, "0")}
    </ClockStyled>
  );
}

export default Clock;