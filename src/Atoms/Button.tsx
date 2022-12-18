import React from "react";
import styled from "styled-components";

export type ButtonProps = {
  onClickHandler: () => void;
  text: "Login" | "Logout" | "장바구니 담기";
};

const Button = ({ onClickHandler, text }: ButtonProps) => {
  return (
    <StyledButton onClick={onClickHandler} text={text}>
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<Pick<ButtonProps, "text">>`
  width: 100%;
  height: 32px;
  font-size: 1rem;
  border: none;
  border-radius: 2px;
  color: white;
  background-color: ${(props) => (props.text === "Login" ? "black" : "#fa6161")};
  cursor: pointer;
`;
