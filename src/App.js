import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import { StyledHr, StyledLogo } from "./components/misc";
import Card, { defaultCardState } from "./components/Card";
import Token from "./components/Token";
import theme from "./theme";

const Button = styled.button`
  color: hotpink;
  background: ${(props) => props.theme.colors.primary};
`;

const CardForm = (props) => {
  return (
    <div>
      <label for="name">Name (4 to 8 characters):</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        minlength="4"
        maxlength="8"
        size="10"
      />
    </div>
  );
};

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

function App() {
  const [currentTheme, setTheme] = useState("dark");
  const [cardState, setCardState] = useState(defaultCardState);
  const [useSecondary, setSecondary] = useState(defaultCardState.secondary);
  const [useTitle, setTitle] = useState(defaultCardState.title);
  const [useDescription, setDescription] = useState(
    defaultCardState.description
  );
  console.log("cardSTate", cardState);
  return (
    <ThemeProvider theme={theme}>
      <div className={`App theme--${currentTheme}`}>
        <StyledAppHero className="App-header">
          <div className="hide">
            <ThemeSwitcher setTheme={setTheme} currentTheme={currentTheme} />
            <div className="token--row">
              <Button>pink button</Button>
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
