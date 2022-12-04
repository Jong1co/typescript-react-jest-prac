import React from "react";
import styled from "styled-components";

export type LoginButtonProps = {
  loginHandler: () => void;
  text: "Login" | "Logout";
};

const LoginButton = ({ loginHandler, text }: LoginButtonProps) => {
  return (
    <StyledButton onClick={loginHandler} text={text}>
      {text}
    </StyledButton>
  );
};

export default LoginButton;

const StyledButton = styled.button<Pick<LoginButtonProps, "text">>`
  width: 84px;
  height: 32px;
  font-size: 1rem;
  border: none;
  border-radius: 2px;
  color: white;
  background-color: ${(props) => (props.text === "Login" ? "black" : "#fa6161")};
  cursor: pointer;
`;
