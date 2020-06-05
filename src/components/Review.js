import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import User from "./User";

// 12:16
const textStyle0 = () => css`
  font-size: 0.75rem;
  line-height: 1rem;
`;

// 16:20
const textStyle1 = () => css`
  font-size: 1rem;
  line-height: 1.25;
`;

// 24:32
const textStyle2 = () => css`
  font-size: 1.5rem;
  line-height: 2rem;
`;

// 40:48
const textStyle3 = () => css`
  font-size: 2.5rem;
  line-height: 3rem;
`;

const StyledReview = styled.article`
  ${textStyle1}
  /* medium */
  @media screen and (min-width: 768px) {
    ${textStyle2}
  }

  /* large */
  @media screen and (min-width: 1440px) {
    ${textStyle3}
  }

  & + & {
    margin-top: 2.5rem;
  }
`;

const StyledReviewBox = styled.div`
  ${textStyle1}
  background: ${({ theme }) => theme.colors.text};
  position: relative;
  padding: 1em;
  margin: 0 0 2em 1em;

  p {
    font-family: "Helvetica", sans-serif;
    color: ${({ theme }) => theme.colors.bg};
    font-size: 1em;
    line-height: inherit;
  }

  /* triangle */
  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    left: 0;
    top: 100%;
    border-top: 1.5em solid ${({ theme }) => theme.colors.text};
    border-right: 1.5em solid transparent;
  }

  /* medium */
  @media screen and (min-width: 768px) {
    ${textStyle2}
    background-color: red;
  }

  /* large */
  @media screen and (min-width: 1440px) {
    ${textStyle3}
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
        border-left: 1.5em solid transparent;
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

export { textStyle0, textStyle1, textStyle2, textStyle3 };
