import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";

const theme = {
  colors: {
    primary: "#0a8697",
    text: "white",
    bg: "#0f110c",
    asset: "#ffdc00",
    primary: "hotpink",
  },
};

const Button = styled.button`
  color: hotpink;
  background: ${(props) => props.theme.colors.primary};
`;

const SampleProfile = {
  secondary: "Aaron",
  title: "Draplin",
  description: "Thursday at 6pm CST instagram live",
};

const defaultCardState = {
  secondary: "Aaron",
  title: "Draplin",
  description: "Thursday at 6pm CST instagram live",
};

const LogoPlaceholder = ({ children = "Logo Here" }) => (
  <div className="cc_logo-placeholder">{children}</div>
);

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

      <div className="cc_text-wrapper">
        <div className="text--group">
          <h2>
            <span>{secondary}</span>
            {title}
          </h2>
          <span className="text--seperator" />
          <p>{children}</p>
        </div>
        {/* Logo */}
        <LogoPlaceholder />
      </div>
    </StyledCardWrapper>
  );
};

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

const Token = ({ name = "Green", hex = "#00ff00" }) => (
  <div className="token">
    <div className="token--swatch" />
    <div>
      <h2 className="token--name">{name}</h2>
      <p className="token--hex">{hex}</p>
    </div>
  </div>
);

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
        <header className="App-header">
          <ThemeSwitcher setTheme={setTheme} currentTheme={currentTheme} />
          <div className="token--row">
            <Button>pink button</Button>
            <Token />
            <Token />
            <Token />
            <Token />
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
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
