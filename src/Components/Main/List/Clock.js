import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const ClockStyled = styled.div`
  width: 100%;
  font-size: 45px;
  font-weight: 600;
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