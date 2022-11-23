import { TodoPresenter, Todo } from "./../TodoPresenter";
import TodoPresenterImpl from "../TodoPresenter";

describe("Todo", () => {
  let presenter: TodoPresenter;
  let addTodo;
  const todoList: Todo[] = [
    { id: 1, todo: "간지나게 밥먹기", done: false },
    { id: 2, todo: "우아하게 짐싸기", done: true },
  ];

  beforeEach(() => {
    presenter = new TodoPresenterImpl(todoList);
    addTodo = jest.fn();
  });

  it("increase todoList length when add todo", () => {
    presenter.addTodo("피터지게 공부하기");

    expect(presenter.todoList.length).toBe(3);
    expect(presenter.todoList[2].done).toBe(false);
    expect(presenter.todoList[2].todo).toBe("피터지게 공부하기");
  });
});
