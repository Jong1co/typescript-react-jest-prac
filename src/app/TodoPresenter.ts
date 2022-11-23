export interface TodoPresenter {
  readonly todoList: Todo[];
  addTodo(todo: string): void;
  deleteTodo(id: number): void;
  checkTodo(id: number): void;
}

export type Todo = {
  id: number;
  todo: string;
  done: boolean;
};

export default class TodoPresenterImpl implements TodoPresenter {
  private _todoList: Todo[];

  get todoList() {
    return this._todoList;
  }

  constructor(todoList: Todo[]) {
    this._todoList = todoList;
  }

  addTodo(todo: string): void {
    this._todoList = [...this._todoList, { id: Number(new Date()), todo, done: false }];
  }

  deleteTodo(id: number): void {
    this._todoList = this._todoList.filter((todo) => todo.id !== id);
  }

  checkTodo(id: number): void {
    this._todoList = this._todoList.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo));
  }
}
