import dayjs from "dayjs";
import Day from "../Atoms/Day";
import cal, { CalenderParams, Month } from "../api/calender";
import { useState, useCallback } from "react";
const Calender = () => {
  const [monthDate, setMonthDate] = useState<CalenderParams>({
    year: dayjs().year(),
    month: dayjs().month() + 1,
  });

  const makeCalender = useCallback(
    (date: CalenderParams) => {
      return cal(date);
    },
    [monthDate]
  );

  return (
    <div style={{ display: "flex" }}>
      {makeCalender(monthDate).map((dayColumn) => {
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {dayColumn.map((date) => {
              return <Day key={`${monthDate.year}-${monthDate.month}-${date}`} date={date} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Calender;
