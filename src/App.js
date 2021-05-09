import React from "react";
import HomePage from "./components/homepage/homepage";
import VlogPage from "./components/vlogpage/vlogpage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "./context";
import VlogIndvidual from "./components/vlogindividual/vlogindividual";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/allvlog" component={VlogPage} />
          <Route exact path="/vlog/:id" component={VlogIndvidual} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
