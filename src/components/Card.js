import React, { useState } from "react";
import styled from "@emotion/styled";
import { StyledHr, StyledLogo } from "./misc";

export const defaultCardState = {
  secondary: "Aaron",
  title: "Draplin",
  description: "Thursday at 6pm CST instagram live",
};

const StyledCardWrapper = styled.div`
  /* hardcode to start */
  width: 1200px;
  height: 1200px;
  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  padding: 80px;
  display: flex;
  justify-content: space-between;
`;

const StyledProfileColumn = styled.div`
  flex-basis: 544px;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;

  &::after {
    content: "";
    border-radius: 32px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.asset};
    opacity: 0.5;
  }

  img {
    border-radius: 32px;
  }
`;

const StyledTextColumn = styled.div`
  flex-basis: 416px;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .text--group {
    padding-top: 40px;
  }
`;

// title, secondary, description = children
const Card = ({
  title = defaultCardState.title,
  secondary = defaultCardState.secondary,
  children = defaultCardState.description,
}) => {
  console.log("foo is running");
  return (
    <StyledCardWrapper>
      {/* Photo */}
      <StyledProfileColumn>
        <img
          src="https://picsum.photos/544/1040?grayscale"
          alt="profile photo"
        />
      </StyledProfileColumn>

      <StyledTextColumn className="cc_text-wrapper">
        <div className="text--group">
          <h2>
            <span>{secondary}</span>
            {title}
          </h2>
          <StyledHr />
          <p>{children}</p>
        </div>
        {/* Logo */}
        <StyledLogo>Logo Here</StyledLogo>
      </StyledTextColumn>
    </StyledCardWrapper>
  );
};

export default Card;
