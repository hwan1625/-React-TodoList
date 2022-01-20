import React from 'react';
import styled from 'styled-components';
import Calendar from '../Components/Schedule/Calendar';
import TodoList from '../Components/Schedule/TodoList';

const ScheduleStyled = styled.div`

`;

const Schedule = () => {
  return (
    <ScheduleStyled>
      <Calendar />
      <TodoList />
    </ScheduleStyled>
  );
}

export default Schedule;