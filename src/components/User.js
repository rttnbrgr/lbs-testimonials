import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const StyledUser = styled.div`
  display: flex;
  margin-top: 0.5rem;

  .avatar {
    flex: 0 0 48px;
    width: 48px;
    height: 48px;
    border: 2px solid ${({ theme }) => theme.colors.text};
  }

  .meta {
    padding: 0 0.5em;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 2px solid ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.text};
    border-left: none;
    background: ${({ theme }) => theme.colors.bg};

    h2,
    h3 {
      font-family: "Helvetica", sans-serif;
      font-size: 0.75em;
      line-height: 1.33333333;
    }
  }

  /* Reverse */
  ${({ reverse, theme }) =>
    reverse &&
    css`
      flex-direction: row-reverse;
      text-align: right;

      .meta {
        border: 2px solid ${theme.colors.text};
        border-right: none;
      }
    `};
`;
