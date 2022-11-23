import { Todo } from "../../../app/TodoPresenter";
import React, { ReactComponentElement } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import TodoAddForm from "../TodoAddForm";
import TodoPresenter from "../../../app/TodoPresenter";

describe("TodoAddForm", () => {
  const todoList: Todo[] = [
    { id: 1, todo: "간지나게 밥먹기", done: false },
    { id: 2, todo: "우아하게 짐싸기", done: true },
  ];
  let addTodo;
  let TodoComponent: any;
  let presenter: TodoPresenter;

  beforeEach(() => {
    addTodo = jest.fn();
    TodoComponent = <TodoAddForm presenter={presenter} />;
  });

  it("renders", () => {
    const component = renderer.create(TodoComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
