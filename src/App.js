import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Foo = (props) => {
  console.log("foo is running");
  return (
    <div className="cc_wrapper">
      {/* Spacing */}
      {/* Photo */}
      <div className="cc_profile-wrapper">
        <img src="https://picsum.photos/544/1040" alt="profile photo" />
      </div>
      <div className="cc_text-wrapper">
        {/* Text */}
        {/* Logo */}
        hi
      </div>
      {props.children}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Foo>jakdfjkalsdjlkdfs</Foo>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
