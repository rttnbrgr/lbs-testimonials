import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import User from "./User";

const StyledReview = styled.article`
  background: purple;
  & + & {
    margin-top: 2.5rem;
  }
`;

const StyledReviewBox = styled.div`
  background: ${({ theme }) => theme.colors.text};
  position: relative;
  padding: 1em;
  margin: 0 0 32px 16px;

  p {
    font-family: "Helvetica", sans-serif;
    font-size: 1em;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.bg};
  }

  .box {
  }
  /* triangle */
  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    left: 0;
    top: 100%;
    border-top: 24px solid ${({ theme }) => theme.colors.text};
    border-color: hotpink;
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

  /* Reverse */
  ${({ reverse, theme }) =>
    reverse &&
    css`
      margin-right: 1em;
      margin-left: 0;

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
      .box {
      }
    `};
`;

const Review = ({ children, link, avatar, name, title, reverse = false }) => (
  <StyledReview>
    <StyledReviewBox reverse={reverse}>
      <p>{children}</p>
    </StyledReviewBox>
    <User avatar={avatar} name={name} title={title} reverse={reverse} />
  </StyledReview>
);

export default Review;
