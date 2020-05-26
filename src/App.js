import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const SampleProfile = {
  secondary: "Aaron",
  title: "Draplin",
  description: "Thursday at 6pm CST instagram live",
};

const LogoPlaceholder = ({ children = "Logo Here" }) => (
  <div className="cc_logo-placeholder">{children}</div>
);

// title, secondary, description = children
const Card = ({
  title = SampleProfile.title,
  secondary = SampleProfile.secondary,
  children = SampleProfile.description,
}) => {
  console.log("foo is running");
  return (
    <div className="cc_wrapper">
      {/* Photo */}
      <div className="cc_profile-wrapper">
        <img src="https://picsum.photos/544/1040" alt="profile photo" />
      </div>

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
    </div>
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

const defaultCardState = {
  secondary: "Aaron",
  title: "Draplin",
  description: "Thursday at 6pm CST instagram live",
};

function App() {
  const [cardState, setCardState] = useState(defaultCardState);
  const [useSecondary, setSecondary] = useState(defaultCardState.secondary);
  const [useTitle, setTitle] = useState(defaultCardState.secondary);
  const [useDescription, setDescription] = useState(
    defaultCardState.description
  );
  console.log("cardSTate", cardState);
  return (
    <div className="App">
      <header className="App-header">
        <h1>State: hi</h1>

        <Card />
        {/* <CardForm /> */}
        <h3>Secondary: {useSecondary}</h3>
        <h3>Title: {useTitle}</h3>
        <h3>Description: {useDescription}</h3>
        <div>
          <label for="secondary">Secondary</label>
          <input
            type="text"
            id="secondary"
            name="secondary"
            required
            minlength="4"
            maxlength="8"
            size="10"
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
      </header>
    </div>
  );
}

export default App;
