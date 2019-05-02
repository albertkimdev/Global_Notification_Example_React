import React from "react";

const FlashMessage = (props) => {
  if (props.show) {
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
  } else {
    return null;
  }
};

export default FlashMessage;
