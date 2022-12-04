import React from "react";
import styled from "styled-components";
import { StyledLink } from "./Style";

const Logo = () => {
  return (
    <StyledLink to='/'>
      <HeaderLogo>
        <svg
          stroke='currentColor'
          fill='#fa6161'
          strokeWidth='0'
          viewBox='0 0 1024 1024'
          height='2em'
          width='2em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z'></path>
        </svg>
        <div className='title'>Shopping Mall</div>
      </HeaderLogo>
    </StyledLink>
  );
};

export default Logo;

// storybook 사용하려면 atomic 패턴을 사용하는 게 좋겠다.
const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  .title {
    color: #fa6161;
    margin-left: 8px;
    font-size: 24px;
  }
`;
