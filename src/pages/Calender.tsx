import dayjs from "dayjs";
import Day from "../Atoms/Day";
import calender, { CalenderParams, movePrevMonth, moveNextMonth } from "../api/calender";
import { useState, useCallback } from "react";
const Calender = () => {
  const [monthDate, setMonthDate] = useState<CalenderParams>({
    year: dayjs().year(),
    month: dayjs().month() + 1,
  });

  const makeCalender = useCallback(
    (date: CalenderParams) => {
      return calender(date);
    },
    [monthDate]
  );

  return (
    <div style={{ display: "flex" }}>
      <button
        onClick={() => {
          movePrevMonth(monthDate, setMonthDate);
        }}
      >
        이전달
      </button>
      <button
        onClick={() => {
          moveNextMonth(monthDate, setMonthDate);
        }}
      >
        다음달
      </button>
      {makeCalender(monthDate).map((dayColumn) => {
        return (
          <div style={{ display: "flex", flexDirection: "column" }} key={dayColumn[0].day}>
            {dayColumn.map((date) => {
              return (
                <Day
                  key={`${date.year}-${date.month}-${date.day}`}
                  date={date}
                  currentMonth={monthDate.month}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Calender;
