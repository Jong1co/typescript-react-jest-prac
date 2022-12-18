import makeCalender from "../calender";

describe("캘린더 테스트", () => {
  const date = {
    year: 2022,
    month: 12,
  };
  it("2022년 12월은 총 5주 이다.", () => {
    expect(makeCalender(date)[0].length).toBe(5);
  });

  it("2022년 12월 1일은 목요일이다.", () => {
    expect(makeCalender(date)[4][0]).toBe(1);
  });

  it("2022년 11월은 30일 까지만 존재하고, 수요일이다.", () => {
    expect(makeCalender(date)[3][0]).toBe(30);
  });
});
