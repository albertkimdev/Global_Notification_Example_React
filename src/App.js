import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./Main";
import Profile from "./Profile";

// Add the FlashMessage component
import FlashMessage from "./FlashMessage";

import "bulma/css/bulma.min.css";

function App() {
  // Insert the flashmessage in a top level area of your app.
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/profile" component={Profile} />
      <FlashMessage show={true} />
    </Router>
  );
}

export default App;
