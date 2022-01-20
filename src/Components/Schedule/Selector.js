import React from 'react';
import styled from 'styled-components';

const SelectorStyled = styled.div`
  position: absolute;
  top: 75px;
  width: 150%;
  height: 150%;
  z-index: 2;
  background: white;
  border: 1px solid black;
  
  
`;

const Selector = () => {
  return (
    <SelectorStyled>
      <select>
        {[...Array(50)].map((year, index) => (
          <option key={index}>{index + 1}</option>
        ))}
      </select>
    </SelectorStyled>
  );
}

export default Selector;