import React, { useState } from "react";
import "./App.css";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import Card, { defaultCardState } from "./components/Card";
import Token from "./components/Token";
import { themeDark, themeLight } from "./theme";

const StyledAppHero = styled.main`
  background-color: ${({ theme }) => theme.colors.appBg};
  background-color: white;
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledReview = styled.article`
  width: 400px;
  height: 300px;
  background: black;
  position: relative;
  font-size: 0.6em;
  padding: 2rem;
  padding-bottom: 40px; // compensate for posiiton meta

  .avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate3d(-50%, -50%, 0);
  }

  .meta {
    padding: 0.25em 0.5rem;
    background: white;
    border: 4px solid black;
    color: black;
    position: absolute;
    top: 100%;
    right: 0;
    width: 50%;
    width: content-width;
    display: inline-block;
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

const StyledHeader = styled.div`
  padding: 1em;
  text-align: center;
  color: black;
  h1 {
    font-size: 4em;
  }
`;

function App() {
  const [currentTheme, setTheme] = useState("dark");

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
          <h1>Testimonials</h1>
        </StyledHeader>
        <StyledAppHero className="App-header">
          <StyledReview>
            I'm baby craft beer adaptogen authentic, pug next level pickled
            offal 90's green juice. IPhone everyday carry kinfolk retro,
            coloring book banh mi tbh 8-bit bitters.
            <a href="#">Read More</a>
            <img
              src="https://pbs.twimg.com/profile_images/1054434556156162054/1H_7AxP0.jpg"
              alt="profile"
              className="avatar"
            />
            <div className="meta">
              <h2>Ryan Parr</h2>
              <h3>VP Design, Sprinklr</h3>
            </div>
          </StyledReview>
        </StyledAppHero>
      </div>
    </ThemeProvider>
  );
}

export default App;
