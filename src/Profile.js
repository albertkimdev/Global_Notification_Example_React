import React from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "./GlobalContext";

const Profile = () => {
  // Call the setMessage method on the button click
  return (
    <GlobalContext.Consumer>
      {(props) => {
        return (
          <div className="section">
            <p className="title">Hello from profile!</p>
            <button
              className="button"
              onClick={() => {
                props.setMessage("You are on profile", "error");
              }}
            >
              Show notification
            </button>
            <Link className="button" to="/">
              Main
            </Link>
          </div>
        );
      }}
    </GlobalContext.Consumer>
  );
};

export default Profile;
