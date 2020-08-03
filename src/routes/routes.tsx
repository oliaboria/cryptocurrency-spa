import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import CoinOverview from './coinOverview';
import Home from './home';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/coin/:coinId" component={CoinOverview} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
};

export default AppRouter;
