import { useRef, useState } from "react";
import styled from "styled-components";
import TodoAddForm from "../components/form/TodoAddForm";
import TodoPresenterImpl, { TodoPresenter } from "../app/TodoPresenter";

const presenter: InstanceType<typeof TodoPresenterImpl> = new TodoPresenterImpl([
  { id: 1, todo: "간지나게 밥먹기", done: false },
  { id: 2, todo: "우아하게 짐싸기", done: true },
]);

const Home = () => {
  return (
    <>
      <TodoAddForm presenter={presenter} />
    </>
  );
};

export default Home;

const Background = styled.main``;
