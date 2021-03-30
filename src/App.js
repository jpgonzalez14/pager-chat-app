import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import './assets/styles/App.sass';

import PagerChat from "./views/PagerChat";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={PagerChat}/>
          <Redirect from="*" to="/"/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
