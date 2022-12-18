import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Onboarding = () => {
  const location = useRef(null);

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setOpacity(window.scrollY / 2000);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        console.log("bye");
      });
    };
  }, []);

  // console.log(opacity);

  return (
    <Background ref={location}>
      <TitleOrigin opacity={opacity}>
        안녕하세요 <br /> zz
      </TitleOrigin>
      <Title opacity={opacity}>
        안녕하세요 <br /> zz
      </Title>
    </Background>
  );
};

export default Onboarding;

const Background = styled.div`
  background-color: #222222;
  height: 1000vh;
  text-align: center;
`;

const Title = styled.h1<{ opacity: number }>`
  position: fixed;
  top: 32px;
  margin: 0;
  color: transparent;
  opacity: ${({ opacity }) => (opacity < 1 ? opacity : 1)};
  font-size: 60px;
  background: linear-gradient(rgb(255, 111, 15) 0%, rgb(132, 130, 242) 100%);
  z-index: 2;
  // 글자에만 background 적용하는 css
  -webkit-background-clip: text;
`;

const TitleOrigin = styled.h1<{ opacity: number }>`
  position: fixed;
  top: 32px;
  margin: 0;
  color: white;
  opacity: ${({ opacity }) => (opacity < 1 ? 1 - opacity : 0)};
  font-size: 60px;
  background: linear-gradient(rgb(255, 111, 15) 0%, rgb(132, 130, 242) 100%);
  z-index: 1;
  // 글자에만 background 적용하는 css
  -webkit-background-clip: text;
`;
