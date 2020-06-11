import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const StyledButton = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2em;
  font-size: 0.75rem;
  line-height: 1;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: inherit;
  &:focus {
    outline: none;
  }
  /* link styles */
  text-decoration: none;
`;

export const StyledLinkButton = StyledButton.withComponent("a");

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
