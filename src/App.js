import React from "react";

// Add the router parts
import { BrowserRouter as Router, Route } from "react-router-dom";

// Add the new components you created
import Main from "./Main";
import Profile from "./Profile";

// Add the bulma css file into the project
import "bulma/css/bulma.min.css";

function App() {
  // Make the App component
  // Handle the routes
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/profile" component={Profile} />
    </Router>
  );
}

export default App;
