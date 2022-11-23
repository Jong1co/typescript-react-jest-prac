import React, { useCallback, useRef, useState } from "react";
import TodoPresenterImpl from "../../app/TodoPresenter";
import TodoPresenter from "../../app/TodoPresenter";
import Presenter from "../../app/TodoPresenter";

type Todo = {
  id: number;
  todo: string;
  done: boolean;
};

type PresenterProps = {
  presenter: TodoPresenter;
};

const TodoAddForm = ({ presenter }: PresenterProps) => {
  const input = useRef<HTMLInputElement>(null);
  const [todoList, setTodoList] = useState<Todo[]>(presenter.todoList);

  const addTodoList = useCallback(() => {
    if (input.current !== null) {
      presenter.addTodo(input.current.value, setTodoList);
      input.current.value = "";
    }
  }, []);

  return (
    <div>
      <input type='text' ref={input} />
      <button onClick={addTodoList}>추가하기</button>
      {todoList.map((todo) => {
        return <div key={todo.id}>{todo.todo}</div>;
      })}
    </div>
  );
};

export default TodoAddForm;
