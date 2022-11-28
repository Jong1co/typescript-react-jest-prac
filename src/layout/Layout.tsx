import React from "react";
import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;

const StyledLayout = styled.main`
  /* width: 100vw; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  max-width: 1200px;
`;
