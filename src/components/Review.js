import React from "react";
import styled from "@emotion/styled";
import { StyledHr } from "./misc";

const StyledReview = styled.article`
  ${"" /* width: 400px; */}
  height: 300px;
  background: black;
  position: relative;
  font-size: 1em;
  padding: 2rem;
  padding-bottom: 40px; // compensate for posiiton meta
  ${"" /* margin-bottom: 4rem; */}

  & + & {
    margin-top: 4rem;
  }



  .avatar {
    width: 64px;
    height: 64px;
    ${"" /* border-radius: 50%; */}
    ${"" /* position: absolute; */}
    ${"" /* top: 0;
    left: 0;
    transform: translate3d(-50%, -50%, 0); */}
  }

  .meta {
    padding: 0.25em 0.5rem;
    background: white;
    border: 2px solid black;
    color: black;
    position: absolute;
    top: 100%;
    right: 0;
    width: 50%;
    width: content-width;
    display: flex;
    transform: translate3d(32px, -50%, 0);

    h2 {
      font-size: 1em;
      line-height: 1.4;
      font-family: "Helvetica", sans-serif;
      font-weight: lighter;
    }
    h3 {
      font-size: 0.875rem;
      line-height: 1.4;
      font-family: "Helvetica", sans-serif;
      font-weight: bold;
    }
  }

  a {
    display: block;
    padding: 1em 1em 1em 0;
    font-size: 0.875rem;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    color: inherit;
  }

  &.flip {
    .avatar {
      top: 0;
      left: initial;
      right: 0;
      transform: translate3d(50%, -50%, 0);
    }
  }
`;

const StyledUser = styled.div`
  border: 2px solid black;
  background: pink;

  .avatar {
    width: 48px;
    height: 48px;
  }
`;

export const SampleReview = {
  link: "https://medium.com/@ryanparr/6e0920bfa5d6",
  name: "Ryan Parr",
  title: "VP Design, Sprinklr",
  avatar:
    "https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg",
  reviewText:
    "He has contributed extreme value while on the Sprinklr Product Design... Because of his work we have saved countless hours of design & dev work.",
};

const Review = ({ children, link, avatar, name, title }) => (
  <StyledReview>
    {children}
    {link && (
      <a href="#" target="_blank">
        Read More ↗
      </a>
    )}
    <StyledUser className="user">
      <img src={avatar} alt="profile" className="avatar" />
      <div className="meta">
        <h2>{name}</h2>
        <h3>{title}</h3>
      </div>
    </StyledUser>
  </StyledReview>
);

export default Review;
