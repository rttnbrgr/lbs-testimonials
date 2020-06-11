import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const StyledReviewGroup = styled.article`
  & + & {
    margin-top: 1.5rem;
    margin-top: 2.5rem;
  }
`;

const StyledReview = styled.article`
  background: rgba(0, 200, 0, 0.3);
  position: relative;

  margin-left: 1rem;
  margin: 0 0 32px 16px;

  p {
    font-family: "Helvetica", sans-serif;
    font-size: 1em;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.bg};
  }

  .box {
    background: ${({ theme }) => theme.colors.text};
    position: relative;
    padding: 1em;

    &::after {
      content: "";
      position: absolute;
      display: inline-block;
      left: 0;
      top: 100%;
      border-top: 24px solid ${({ theme }) => theme.colors.text};
      border-right: 24px solid transparent;
    }
  }

  a {
    margin-top: 8px;
    display: inline-block;
    padding: 0.25em 0.5em 0.25em 0;
    font-family: "Helvetica", sans-serif;
    font-weight: bold;
    font-size: 0.75em;
    line-height: 1.33333333;
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.bg};

    &:hover {
      color: ${({ theme }) => theme.colors.asset};
    }
  }

  .triangle-row {
    position: relative;
    height: 24px;
  }
  .triangle {
    position: absolute;
    display: inline-block;
    left: 0;
    top: 0;
    border-top: 24px solid ${({ theme }) => theme.colors.text};
    border-right: 24px solid transparent;
    display: none;
  }

  /* Reverse */
  ${({ reverse, theme }) =>
    reverse &&
    css`
      margin-right: 1em;
      margin-left: 0;

      .box {
        &::after {
          content: "";
          position: absolute;
          display: inline-block;
          left: initial;
          right: 0;
          border-right: none;
          right: 0;
          border-left: 24px solid transparent;
        }
      }

      .triangle {
        /* reset */
        left: initial;
        border-right: none;
        /* reverse */
        right: 0;
        border-left: 24px solid transparent;
      }
    `};
`;

const StyledUser = styled.div`
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

export const SampleReview = {
  link: "https://medium.com/@ryanparr/6e0920bfa5d6",
  name: "Ryan Parr",
  title: "VP Design, Sprinklr",
  avatar:
    "https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg",
  reviewText:
    "He has contributed extreme value while on the Sprinklr Product Design team... Because of his work we have saved countless hours of design & dev work.",
};

const Review = ({ children, link, avatar, name, title, reverse = false }) => (
  <StyledReviewGroup>
    <StyledReview reverse={reverse}>
      <div className="box">
        <p>{children}</p>
        {link && false && (
          <div>
            <a href="#" target="_blank">
              Read More ↗
            </a>
          </div>
        )}
      </div>
      {/* <div className="triangle-row">
        <span className="triangle" />
      </div> */}
    </StyledReview>
    <StyledUser className="user" reverse={reverse}>
      <img src={avatar} alt="profile" className="avatar" />
      <div className="meta">
        <h2>{name}</h2>
        <h3>{title}</h3>
      </div>
    </StyledUser>
  </StyledReviewGroup>
);

export default Review;
