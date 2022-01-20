import React from 'react';
import styled from 'styled-components';
import Home from '../../Pages/Home';
import Schedule from '../../Pages/Schedule';
import Posts from '../../Pages/Posts';

const CenterStyled = styled.div`
  min-width: 750px;
  height: calc(100vh - 32px);
  border: 1px solid black;
  margin: 0 30px;
  padding: 30px 50px;
`;

const Center = ({ page }) => {
  return (
    <CenterStyled>
      {page === "home" ? <Home /> : undefined}
      {page === "schedule" ? <Schedule /> : undefined}
      {page === "posts" ? <Posts /> : undefined}
    </CenterStyled>
  );
};

export default Center;