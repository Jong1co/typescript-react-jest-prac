import dayjs from "dayjs";
import Day from "../Atoms/Day";

const Calender = () => {
  const date = dayjs("2022-8");
  //그 달의 날짜
  const lastDateInMonth = date.daysInMonth();

  //그 주의 시작 요일 /일 : 0/토: 6/
  const firstDay = date.startOf("month").day();
  const lastDay = date.endOf("month").day();

  // const dayArray = new Array(7).fill([] as number[])
  // fill을 하면 같은 주소값을 가진 배열이 계속 채워짐
  //
  const dayArray: number[][] = [[], [], [], [], [], [], []];
  for (let i = 0; i < lastDateInMonth; i++) {
    const day = (firstDay + i) % 7;
    dayArray[day].push(i + 1);
  }
  for (let i = 0; i < firstDay; i++) {
    dayArray[i].unshift(0);
  }

  if (lastDay !== 6) {
    for (let i = 1; i + lastDay <= 6; i++) {
      dayArray[i + lastDay].push(0);
    }
  }

  console.log(dayArray);

  return (
    <div>
      <Day date={1}></Day>
    </div>
  );
};

export default Calender;
