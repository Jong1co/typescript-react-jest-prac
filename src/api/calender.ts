import dayjs from "dayjs";

export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type CalenderParams = {
  year: number;
  month: number;
};

/**
 * sun: 0, mon: 1, ... , sat: 6
 * 각각의 요일에 해당하는 날짜가 들어가 있음
 * 2022년 12월의 일요일은 4, 11, 18, 25
 */
const makeCalender = ({ year, month }: CalenderParams): number[][] => {
  const date = dayjs(`${year}-${month}`);
  const prevMonth = dayjs(`${month === 1 ? year - 1 : year}-${month === 1 ? 12 : month - 1}`);

  //그 달의 날짜
  const lastDateInMonth = date.daysInMonth();

  //그 주의 시작 요일 /일 : 0/토: 6/
  const firstDay = date.startOf("month").day();
  const lastDay = date.endOf("month").day();

  const dayArray: number[][] = [[], [], [], [], [], [], []];
  for (let i = 0; i < lastDateInMonth; i++) {
    const day = (firstDay + i) % 7;
    dayArray[day].push(i + 1);
  }

  for (let i = 0; i < firstDay; i++) {
    dayArray[firstDay - 1 - i].unshift(prevMonth.daysInMonth() - i);
  }

  if (lastDay !== 6) {
    for (let i = 1; i + lastDay <= 6; i++) {
      dayArray[i + lastDay].push(i);
    }
  }

  return dayArray;
};

export default makeCalender;
