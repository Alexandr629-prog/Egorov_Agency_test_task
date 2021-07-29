import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom"
import HomePage from "../pages/home-page";
import UsdPage from "../pages/usd-page";
import EurPage from "../pages/eur-page";
import RurPage from "../pages/rur-page";


const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/usd" component={UsdPage}/>
                <Route path="/eur" component={EurPage}/>
                <Route path="/rur" component={RurPage}/>
                <Redirect to='/'/>
            </Switch>
        </Router>
    );
};

export default App;