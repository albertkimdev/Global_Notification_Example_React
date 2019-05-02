import React from "react";
import { Link } from "react-router-dom";

/**
 * All css classes are coming from bulma
 *
 * This is a simple component which just has a title, and 2 buttons
 * 1 button is for navigation
 * 1 button is to show the notification
 */

const Main = () => {
  return (
    <div className="section">
      <p className="title">Hello from main.js</p>
      <button className="button">Show notification</button>
      <Link className="button" to="/profile">
        Profile
      </Link>
    </div>
  );
};

export default Main;
