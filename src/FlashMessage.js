import React from "react";

import { GlobalContext } from "./GlobalContext";

const FlashMessage = () => {
  // Check if showFlash is true
  // If it is, return the component
  // And change the message / notification class
  // If showFlash is false, return null
  return (
    <GlobalContext.Consumer>
      {(props) => {
        if (props.showFlash) {
          return (
            <div
              style={{
                position: "absolute",
                zIndex: 500,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                boxShadow: "4px 4px 10px -4px rgba(0,0,0,0.58)"
              }}
            >
              <div
                className={`notification ${
                  props.status === "success" ? "is-success" : "is-danger"
                }`}
              >
                <p>{props.message}</p>
              </div>
            </div>
          );
        } else {
          return null;
        }
      }}
    </GlobalContext.Consumer>
  );
};

export default FlashMessage;
