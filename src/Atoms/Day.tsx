import React from "react";
import { CalenderDate } from "../api/calender";

type DayProps = {
  date: CalenderDate;
  currentMonth: number;
};

const Day = ({ date, currentMonth }: DayProps) => {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        background: date.month === currentMonth ? "red" : "gray",
        margin: "8px",
      }}
    >
      {date.day}
    </div>
  );
};

export default Day;
