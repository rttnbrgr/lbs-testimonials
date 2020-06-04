import React, { useState } from "react";
import "./App.css";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import { Global, css } from "@emotion/core";
import Card, { defaultCardState } from "./components/Card";
import Token from "./components/Token";
import { themeDark, themeLight } from "./theme";
import Review from "./components/Review";
import dan from "./assets/dan.jpeg";
import reviews, { reviewDan } from "./data";
import { StyledLinkButton, StyledButton } from "./components/Button";
import { StyledHeader } from "./components/Header";

const getTypeStyle = (size) => {
  css``;
};

const StyledAppHero = styled.main`
  background-color: ${({ theme }) => theme.colors.appBg};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: white;
`;

const StyledReviewColumn = styled.div`
  margin: 0 auto;
  padding: 1em;
  padding-bottom: 3em;
  /**debug */
  max-width: 560px;
  width: 100%;

  /* medium */
  @media screen and (min-width: 768px) {
    padding: 0 0 4em;
    width: 75%;
    max-width: 768px;
  }

  /* large */
  @media screen and (min-width: 1440px) {
    width: 62.5%;
    max-width: 1440px;
  }
`;

function App() {
  const [currentTheme, setTheme] = useState("light");

  const toggleTheme = () => {
    console.log("currentTheme2: ", currentTheme);
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const getTheme = () => (currentTheme === "dark" ? themeDark : themeLight);

  // editable prop hoooks
  const [useSecondary, setSecondary] = useState(defaultCardState.secondary);
  const [useTitle, setTitle] = useState(defaultCardState.title);
  const [useDescription, setDescription] = useState(
    defaultCardState.description
  );

  return (
    <ThemeProvider theme={currentTheme === "dark" ? themeDark : themeLight}>
      <div className={`App theme--${currentTheme}`}>
        <StyledHeader>
          <StyledLinkButton href="http://rttnbrgr.com">Home</StyledLinkButton>
          <h1>Testimonials</h1>
          <StyledButton onClick={() => toggleTheme()}>
            {currentTheme}
          </StyledButton>
        </StyledHeader>
        <StyledAppHero className="App-header">
          <StyledReviewColumn>
            {reviews.map((review, i) => {
              const { link, name, title, avatar, reviewText } = review;
              return (
                <Review
                  link={link}
                  name={name}
                  title={title}
                  avatar={avatar}
                  reverse={i % 2}
                >
                  {reviewText}
                </Review>
              );
            })}
          </StyledReviewColumn>
        </StyledAppHero>
      </div>
    </ThemeProvider>
  );
}

export default App;
