import React from "react";
import styled from "@emotion/styled";

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
