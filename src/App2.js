import React, { useState } from "react";
import "./App.css";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import { Global, css } from "@emotion/core";
import { themeDark, themeLight } from "./theme";
import Review, { SampleReview } from "./components/Review";
import {
  StyledButton,
  StyledLinkButton,
  StyledHeader,
} from "./components/Header";
import reviews from "./data";
import shuffle from "./utils";

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
  max-width: 500px;
`;

const StrokeButtonStyles = css`
  background-color: blue;
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

  const { link, name, title, avatar } = SampleReview;

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
            {shuffle(reviews).map((review, i) => {
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
