import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import ErrorBoundary from '../components/error-boundary';

import CoinOverview from './coin-overview';
import Home from './home';

const Routes: React.FC = () => {
    return (
        <ErrorBoundary>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/coin/:symbol" component={CoinOverview} />
                <Redirect from="*" to="/" />
            </Switch>
        </ErrorBoundary>
    );
};

export default Routes;
