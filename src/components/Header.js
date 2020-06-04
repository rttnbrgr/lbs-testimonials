import React from "react";
import styled from "@emotion/styled";

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.appBg};
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;

  button {
    width: 3.5rem;
  }

  h1 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5em;
    line-height: 1.3333333333;
    padding: 0.83333333333em 0;
    text-transform: uppercase;
    letter-spacing: -0.5px;
  }

  @media screen and (min-width: 800px) {
    justify-content: center;
    padding: 1em 0;
    h1 {
      padding: 0 1em;
      font-size: 4em;
    }
  }
`;

export default StyledHeader;
