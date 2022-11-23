export interface TodoPresenter {
  readonly todoList: Todo[];
  addTodo(todo: string, update: (todoList: Todo[]) => void): void;
  deleteTodo(id: number, update: (todoList: Todo[]) => void): void;
  checkTodo(id: number, update: (todoList: Todo[]) => void): void;
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

  addTodo(todo: string, update: (todoList: Todo[]) => void): void {
    this._todoList = [...this._todoList, { id: Number(new Date()), todo, done: false }];
    update(this._todoList);
  }

  deleteTodo(id: number, update: (todoList: Todo[]) => void): void {
    this._todoList = this._todoList.filter((todo) => todo.id !== id);
    update(this._todoList);
  }

  checkTodo(id: number, update: (todoList: Todo[]) => void): void {
    this._todoList = this._todoList.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo));
    update(this._todoList);
  }
}
