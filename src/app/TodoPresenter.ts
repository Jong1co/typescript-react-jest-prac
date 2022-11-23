export interface TodoPresenter {
  addTodo(value: string): void;
}

type Todo = {
  id: number;
  todo: string;
  done: boolean;
};

export default class TodoPresenterImpl implements TodoPresenter {
  private todoList: Todo[];
  constructor(todoList: Todo[]) {
    this.todoList = todoList;
  }
  addTodo(todo: string): void {
    this.todoList =
  }
}
