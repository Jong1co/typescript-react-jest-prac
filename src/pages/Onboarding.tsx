import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Onboarding = () => {
  const location = useRef(null);

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (location.current != null) {
        // console.log((location.current as HTMLElement).getBoundingClientRect());
      }
      setOpacity(window.scrollY / 500);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        console.log("bye");
      });
    };
  }, []);

  console.log(opacity);

  return (
    <Background ref={location}>
      <Title opacity={opacity}>
        안녕하세요 <br /> zz
      </Title>
    </Background>
  );
};

export default Onboarding;

const Background = styled.div`
  background-color: #222222;
  height: 200vh;
  text-align: center;
`;

const Title = styled.h1<{ opacity: number }>`
  position: fixed;
  top: 32px;
  margin: 0;
  color: white;
  font-size: 60px;
  background: linear-gradient(to right top, #861657, #ffa69e);
  color: transparent;
  -webkit-background-clip: text;
  // 글자에만 background 적용하는 css
  opacity: ${({ opacity }) => (opacity < 1 ? opacity : 1)};
`;
