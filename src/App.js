import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./Main";
import Profile from "./Profile";

import FlashMessage from "./FlashMessage";

// Add the context provider
import GlobalProvider from "./GlobalContext";

import "bulma/css/bulma.min.css";

function App() {
  // Everything inside GlobalProvider is the component's children
  // Which in the GlobalContext.js file is this line
  // {this.props.children}
  // Everything inside this provider has access to the provider's state
  // Which means the Main, Profile and FlashMessage component now share
  // state from 1 context provider.
  return (
    <GlobalProvider>
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/profile" component={Profile} />
        <FlashMessage show={true} />
      </Router>
    </GlobalProvider>
  );
}

export default App;
