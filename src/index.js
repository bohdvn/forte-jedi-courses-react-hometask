import React from 'react'
import ReactDOM from 'react-dom'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import App from './App'
import People from "./pages/People"
import Planets from "./pages/Planets"
import Starships from "./pages/Starships"
import ErrorPage from "./pages/Error";

const routs = (
    < BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/people" component={People}/>
            <Route path="/planets" component={Planets}/>
            <Route path="/starships" component={Starships}/>
            <Route component={ErrorPage}/>
        </Switch>
    </ BrowserRouter>
);
ReactDOM.render(routs, document.getElementById('root'));