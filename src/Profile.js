import React from "react";
import { Link } from "react-router-dom";

// import the context we want access to in this component
import { GlobalContext } from "./GlobalContext";

const Profile = () => {
  // This component is a consumer of the context
  // which is why we call the consumer from the context
  // which gives us access to the value of the context as a prop
  return (
    <GlobalContext.Consumer>
      {(props) => {
        console.log(props);
        return (
          <div className="section">
            <p className="title">Hello from profile!</p>
            <button className="button">Show notification</button>
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
