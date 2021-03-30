import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
//styles
import './assets/styles/App.sass';
//views
import PagerChat from "./views/PagerChat";
import PagerRegister from "./views/PagerRegister";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/chat" exact component={PagerChat}/>
                <Route path="/" exact component={PagerRegister}/>
                <Redirect from="*" to="/"/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
