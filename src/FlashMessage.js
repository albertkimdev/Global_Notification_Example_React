import React from "react";

// import the context we want access to in this component
import { GlobalContext } from "./GlobalContext";

const FlashMessage = () => {
  // This component is a consumer of the context
  // which is why we call the consumer from the context
  // which gives us access to the value of the context as a prop
  return (
    <GlobalContext.Consumer>
      {(props) => {
        console.log(props);
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
            <div className={`notification`}>
              <p>flash message</p>
            </div>
          </div>
        );
      }}
    </GlobalContext.Consumer>
  );
};

export default FlashMessage;
