import React from "react";

type DayProps = {
  date: number;
};

const Day = ({ date }: DayProps) => {
  return (
    <div
      style={{ width: "100px", height: "100px", background: date ? "red" : "gray", margin: "8px" }}
    >
      {date !== 0 && date}
    </div>
  );
};

export default Day;
