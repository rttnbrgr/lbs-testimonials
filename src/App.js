import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import { StyledHr, StyledLogo } from "./components/misc";
import Card, { defaultCardState } from "./components/Card";
import Token from "./components/Token";
import { themeDark, themeLight } from "./theme";

const ThemeSwitcher = ({ currentTheme, setTheme }) => {
  const toggleTheme = () => {
    console.log("toggle theme: ", "currentTheme: ", currentTheme);
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme-switcher">
      <h3>Theme</h3>
      <button onClick={() => toggleTheme()}>{currentTheme}</button>
    </div>
  );
};

const StyledAppHero = styled.main`
  background-color: ${({ theme }) => theme.colors.appBg};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledThemeButton = styled.button`
  /* normalize */
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  /* custom */
  font-family: monospace;
  font-size: 12px;
  line-height: 1;
  padding: 8px 16px;
  background: transparent;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  &:focus {
    outline: none;
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

  const [cardState, setCardState] = useState(defaultCardState);
  const [useSecondary, setSecondary] = useState(defaultCardState.secondary);
  const [useTitle, setTitle] = useState(defaultCardState.title);
  const [useDescription, setDescription] = useState(
    defaultCardState.description
  );
  console.log("cardSTate", cardState);
  return (
    <ThemeProvider theme={currentTheme === "dark" ? themeDark : themeLight}>
      <div className={`App theme--${currentTheme}`}>
        <StyledAppHero className="App-header">
          <div className="hide">
            <ThemeSwitcher setTheme={setTheme} currentTheme={currentTheme} />
            <StyledThemeButton onClick={() => toggleTheme()}>
              Theme: {currentTheme}
            </StyledThemeButton>
            <div className="token--row">
              <Token />
              <Token />
              <Token />
              <Token />
            </div>
          </div>
          <Card
            secondary={useSecondary}
            title={useTitle}
            description={useDescription}
          />
          {/* <CardForm /> */}
          <div className="input-row hide">
            <div>
              <label for="secondary">Secondary</label>
              <input
                type="text"
                id="secondary"
                name="secondary"
                required
                minlength="4"
                // maxlength="8"
                // size="10"
                placeholder={defaultCardState.secondary}
                onChange={(e) => {
                  console.log("event.target", e.name);
                  console.log("event.target", e.target);
                  console.log("event.target", e.target.value);
                  setSecondary(e.target.value);
                }}
              />
            </div>
            <div>
              <label for="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder={defaultCardState.title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label for="description">Description</label>
              <input
                type="text"
                id="description"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </StyledAppHero>
      </div>
    </ThemeProvider>
  );
}

export default App;
