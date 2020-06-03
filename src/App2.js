import React, { useState } from "react";
import "./App.css";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import Card, { defaultCardState } from "./components/Card";
import Token from "./components/Token";
import { themeDark, themeLight } from "./theme";
import Review, { SampleReview } from "./components/Review";
import dan from "./assets/dan.jpeg";
import reviews, { reviewDan } from "./data";

const StyledAppHero = styled.main`
  background-color: ${({ theme }) => theme.colors.appBg};
  background-color: white;
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
  /**debug */
  ${"" /* background: purple; */}
  max-width: 500px;
`;

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.appBg};
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5em;
    line-height: 1.3333333333;
    padding: 0.83333333333em 0;
    text-transform: uppercase;
    letter-spacing: -0.5px;
  }

  @media screen and (min-width: 600px) {
    h1 {
      font-size: 4em;
    }
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

  const { link, name, title, avatar } = SampleReview;

  return (
    <ThemeProvider theme={currentTheme === "dark" ? themeDark : themeLight}>
      <div className={`App theme--${currentTheme}`}>
        <StyledHeader>
          <h1>Testimonials</h1>
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
