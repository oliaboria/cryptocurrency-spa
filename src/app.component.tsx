import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/header';
import Routes from './routes';

const App: React.FC = () => (
    <Router>
        <Header />
        <div className="container">
            <Routes />
        </div>
    </Router>
);

export default App;
