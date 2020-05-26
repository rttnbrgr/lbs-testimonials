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
        <div className="cc_logo-placeholder" />
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
  console.log("cardSTate", cardState);
  return (
    <div className="App">
      <header className="App-header">
        <h1>State: hi</h1>
        <Card />
        {/* <CardForm /> */}
      </header>
    </div>
  );
}

export default App;
