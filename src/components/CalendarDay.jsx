import React from 'react';

const CalendarDay = ({day, onClick}) => {
  const dayClassName = `day${day.isToday ? ' today' : ''}${
    day.tours?.length > 0 ? ' available' : ''
  }`;
  // TODO: handle error when day or day.date is null
  return (
    <div className={dayClassName} onClick={onClick}>
      {day?.date?.getDate()}
    </div>
  );
};

export default CalendarDay;
