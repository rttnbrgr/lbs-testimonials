import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import User from "./User";

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

    /* medium */
    @media screen and (min-width: 768px) {
      background-color: red;
    }

    /* large */
    @media screen and (min-width: 1440px) {
      background-color: blue;
    }
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
    `};
`;

const Review = ({ children, link, avatar, name, title, reverse = false }) => (
  <StyledReviewGroup>
    <StyledReview reverse={reverse}>
      <div className="box">
        <p>{children}</p>
      </div>
    </StyledReview>
    <User avatar={avatar} name={name} title={title} reverse={reverse} />
  </StyledReviewGroup>
);

export default Review;
