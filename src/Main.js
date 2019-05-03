import React from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "./GlobalContext";

const Main = () => {
  // Call the setMessage method on the button click
  return (
    <GlobalContext.Consumer>
      {(props) => {
        return (
          <div className="section">
            <p className="title">Hello from main.js</p>
            <button
              className="button"
              onClick={() => {
                props.setMessage("You are on main", "success");
              }}
            >
              Show notification
            </button>
            <Link className="button" to="/profile">
              Profile
            </Link>
          </div>
        );
      }}
    </GlobalContext.Consumer>
  );
};

export default Main;
