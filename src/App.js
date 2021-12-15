import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ViewUserDetails from "./ViewUserDetails";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/view-contact-details/:id"
              component={ViewUserDetails}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
