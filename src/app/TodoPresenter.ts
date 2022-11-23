export interface TodoPresenter {
  addTodo(value: string): void;
  readonly todoList: Todo[];
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
}
