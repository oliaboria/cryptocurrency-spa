import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import CoinOverview from './coin-overview';
import Home from './home';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/coin/:symbol" component={CoinOverview} />
            <Redirect from="*" to="/" />
        </Switch>
    );
};

export default Routes;
