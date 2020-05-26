import React from "react";
import logo from "./logo.svg";
import "./App.css";

const SampleProfile = {
  secondary: "Aaron",
  title: "Draplin",
  description: "Thursday at 6pm CST instagram live",
};
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
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Foo>jakdfjkalsdjlkdfs</Foo>
      </header>
    </div>
  );
}

export default App;
