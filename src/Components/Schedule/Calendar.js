import React, { useState } from 'react';
import styled from 'styled-components';
import Selector from './Selector';

const CalendarStyled = styled.div`
  .top{
    height: 60px;
    position: relative;
    .prev-next {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      button {
        cursor: pointer;
        margin: 0 80px;
        font-size: 16px;
        width: 60px;
      }
    }
    .selector {
      height: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      button {
        font-size: 30px;
        font-weight: 600;
        cursor: pointer;
        z-index: 1;
      }
    }
  }
  .main {
    display: flex;
    flex-direction: column;
    ul {
      display: flex;
      justify-content: center;
      li {
        width: 60px;
        height: 60px;
        padding: 20px;
        margin: 0 15px;
        text-align: center;
      }
    }
  }

`;

const date = new Date();
const renderCalendar = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();
  const thisMonth = new Date(viewYear, viewMonth + 1, 0);
  const prevMonth = new Date(viewYear, viewMonth, 0);
  const thisMonth_lastDate = thisMonth.getDate();
  const thisMonth_lastDay = thisMonth.getDay();
  const prevMonth_lastDate = prevMonth.getDate();
  const prevMonth_lastDay = prevMonth.getDay();

  const prevMonth_dates = [];
  const thisMonth_dates = [...Array(thisMonth_lastDate + 1).keys()].slice(1);
  const nextMonth_dates = [];

  if (prevMonth_lastDay !== 6) {
    for (let i = 0; i < prevMonth_lastDay + 1; i++) {
      prevMonth_dates.unshift(prevMonth_lastDate - i);
    }
  }
  for (let i = 1; i < 7 - thisMonth_lastDay; i++) {
    nextMonth_dates.push(i);
  }
  const dates = prevMonth_dates.concat(thisMonth_dates, nextMonth_dates);
  const weeks = dates.length / 7;
  const dates_by_weeks = new Array(weeks);
  for (let i = 0; i < weeks; i++) {
    dates_by_weeks[i] = new Array(7);
    for (let j = 0; j < 7; j++) {
      dates_by_weeks[i][j] = parseInt(dates[(i * 7) + j]);
    }
  }
  return dates_by_weeks;
};

const Calendar = () => {
  const [dateList, setDateList] = useState(renderCalendar());
  const [select, setSelect] = useState(false);
  const onPrev = () => {
    date.setMonth(date.getMonth() - 1);
    setDateList(renderCalendar());
  };
  const onNext = () => {
    date.setMonth(date.getMonth() + 1);
    setDateList(renderCalendar());
  };
  const onSelect = () => {
    setSelect(!select);
  };

  return (
    <CalendarStyled>
      <div className="top">
        <div className="prev-next">
          <button onClick={onPrev}>이전</button>
          <button onClick={onNext}>다음</button>
        </div>
        <div className="selector">
          <button className="year" onClick={onSelect}>{date.getFullYear()}년</button>
          <button className="month" onClick={onSelect}>{date.getMonth() + 1}월</button>
          {select ? <Selector /> : undefined}
        </div>
      </div>
      <div className="main">
        {dateList.map((dates, id) =>
          <ul key={id}>
            {dates.map((date, id) => (
              <li key={id}>{date}</li>
            ))}
          </ul>
        )}

      </div>
    </CalendarStyled>
  );
};

export default Calendar;