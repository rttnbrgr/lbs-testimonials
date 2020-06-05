import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { textStyle0, textStyle1, textStyle2, textStyle3 } from "./Review";

const StyledUser = styled.div`
  display: flex;
  margin-top: 0.5rem;
  font-size: inherit;

  .avatar {
    flex: 0 0 3em;
    width: 3em;
    height: 3em;
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

    font-size: 0.75rem;
    line-height: 1rem;
    font-family: "Helvetica", sans-serif;
    padding: 0 1em;

    h2,
    h3 {
      font-family: "Helvetica", sans-serif;
      font-size: 1em;
      line-height: inherit;
    }
  }

  /* medium */
  @media screen and (min-width: 768px) {
    .avatar,
    .meta {
      border-width: 4px;
    }

    .meta {
      font-size: 1rem;
      line-height: 24px;
    }
  }

  /* large */
  @media screen and (min-width: 1440px) {
    .avatar,
    .meta {
      border-width: 6px;
    }
    .meta {
      font-size: 2rem;
      line-height: 40px;
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

        /* medium */
        @media screen and (min-width: 768px) {
          border-width: 4px;
        }
        /* large */
        @media screen and (min-width: 1440px) {
          border-width: 6px;
        }
      }
    `};
`;

const User = ({ reverse, avatar, name, title }) => (
  <StyledUser className="user" reverse={reverse}>
    <img src={avatar} alt="profile" className="avatar" />
    <div className="meta">
      <h2>{name}</h2>
      <h3>{title}</h3>
    </div>
  </StyledUser>
);

export default User;
