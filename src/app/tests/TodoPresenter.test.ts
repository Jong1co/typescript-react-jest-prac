import { TodoPresenter, Todo } from "./../TodoPresenter";
import TodoPresenterImpl from "../TodoPresenter";

describe("Todo", () => {
  let presenter: TodoPresenter;
  let addTodo;
  let deleteTodo;
  const todoList: Todo[] = [
    { id: 1, todo: "간지나게 밥먹기", done: false },
    { id: 2, todo: "우아하게 짐싸기", done: true },
  ];

  beforeEach(() => {
    presenter = new TodoPresenterImpl(todoList);
    addTodo = jest.fn();
    deleteTodo = jest.fn();
  });

  it("increase todoList length when add todo", () => {
    presenter.addTodo("피터지게 공부하기");

    expect(presenter.todoList.length).toBe(3);
    expect(presenter.todoList[2].done).toBe(false);
    expect(presenter.todoList[2].todo).toBe("피터지게 공부하기");
  });

  it("decrease todoList length when delete todo", () => {
    presenter.deleteTodo(1);

    expect(presenter.todoList.length).toBe(1);
    expect(presenter.todoList[0].todo).toBe("우아하게 짐싸기");
  });

  describe("checkTodo 함수 호출 시 반대 boolean 값으로 변경되어야 함", () => {
    it("한 번 호출 시 반대 boolean값으로 변경", () => {
      presenter.checkTodo(1);

      expect(presenter.todoList.length).toBe(2);
      expect(presenter.todoList[0].done).toBe(true);
    });

    it("두 번 호출 시 boolean값 유지", () => {
      presenter.checkTodo(1);
      presenter.checkTodo(1);

      expect(presenter.todoList.length).toBe(2);
      expect(presenter.todoList[0].done).toBe(false);
    });
  });
});
