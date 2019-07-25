/*********** Routes for applications **************/
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../containers/home';
import About from '../containers/about';
import NotFound from '../components/NoFound';

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>

    );
};

export default Routers;