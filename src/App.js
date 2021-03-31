import React, {useState} from "react";
import {BrowserRouter, Redirect, Route, Switch, useHistory} from "react-router-dom";
//styles
import './assets/styles/App.sass';
//views
import PagerChat from "./views/PagerChat";
import PagerRegister from "./views/PagerRegister";

function App() {
    const [username, setUsername] = useState('');

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/chat" exact render={() => <PagerChat username={username}/>}/>
                <Route path="/" exact render={() => <PagerRegister setUsername={setUsername} useHistory={useHistory}/>}/>
                <Redirect from="*" to="/"/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
