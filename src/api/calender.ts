import dayjs from "dayjs";

export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type CalenderParams = {
  year: number;
  month: number;
};

export type CalenderDate = CalenderParams & {
  day: number;
};

/**
 * sun: 0, mon: 1, ... , sat: 6
 * 각각의 요일에 해당하는 날짜가 들어가 있음
 * 2022년 12월의 일요일은 4, 11, 18, 25
 */
const makeCalender = ({ year, month }: CalenderParams): CalenderDate[][] => {
  const date = dayjs(`${year}-${month}`);
  console.log(year, month);

  const prevMonth = dayjs(`${month === 1 ? year - 1 : year}-${month === 1 ? 12 : month - 1}`);

  const nextMonth = dayjs(`${month === 12 ? year + 1 : year}-${month === 12 ? 1 : month + 1}`);

  //그 달의 날짜
  const lastDateInMonth = date.daysInMonth();

  //그 주의 시작 요일 /일 : 0/토: 6/
  const firstDay = date.startOf("month").day();
  const lastDay = date.endOf("month").day();

  const dayArray: CalenderDate[][] = [[], [], [], [], [], [], []];
  for (let i = 0; i < lastDateInMonth; i++) {
    const day = (firstDay + i) % 7;
    dayArray[day].push({ year, month, day: i + 1 });
  }

  for (let i = 0; i < firstDay; i++) {
    dayArray[firstDay - 1 - i].unshift({
      year: prevMonth.year(),
      month: prevMonth.month() + 1,
      day: prevMonth.daysInMonth() - i,
    });
  }

  if (lastDay !== 6) {
    for (let i = 1; i + lastDay <= 6; i++) {
      dayArray[i + lastDay].push({
        year: nextMonth.year(),
        month: nextMonth.month() + 1,
        day: i,
      });
    }
  }

  return dayArray;
};

export const movePrevMonth = (
  { year, month }: CalenderParams,
  update: (date: CalenderParams) => void
) => {
  const prevDate = {
    year: month === 1 ? year - 1 : year,
    month: month === 1 ? 12 : month - 1,
  };
  update(prevDate);
};

export const moveNextMonth = (
  { year, month }: CalenderParams,
  update: (date: CalenderParams) => void
) => {
  const prevDate = {
    year: month === 12 ? year + 1 : year,
    month: month === 12 ? 1 : month + 1,
  };
  update(prevDate);
};

export default makeCalender;
