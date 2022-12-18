import makeCalender, { moveNextMonth, movePrevMonth } from "../calender";

describe("캘린더 테스트", () => {
  const date = {
    year: 2022,
    month: 12,
  };
  let update: () => void;

  beforeEach(() => {
    update = jest.fn();
  });

  it("2022년 12월은 총 5주 이다.", () => {
    expect(makeCalender(date)[0].length).toBe(5);
  });

  it("2022년 12월 1일은 목요일이다.", () => {
    expect(makeCalender(date)[4][0].day).toBe(1);
  });

  it("2022년 11월은 30일 까지만 존재하고, 수요일이다.", () => {
    expect(makeCalender(date)[3][0].day).toBe(30);
  });

  it("moveNextMonth 함수를 호출하면 다음 달로 넘어간다.", () => {
    moveNextMonth(date, update);
    expect(update).toBeCalledWith({ year: 2023, month: 1 });
  });

  it("movePrevMonth 함수를 호출하면 이전 달로 넘어간다.", () => {
    movePrevMonth(date, update);
    expect(update).toBeCalledWith({ year: 2022, month: 11 });
  });

  it("movePrevMonth 함수를 여러 번 호출하면 이전 년도로 넘어간다.", () => {
    const newDate = {
      year: 2023,
      month: 1,
    };
    movePrevMonth(newDate, update);
    expect(update).toBeCalledWith({ year: 2022, month: 12 });
  });
});
