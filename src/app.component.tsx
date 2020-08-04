import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

const App: React.FC = () => (
    <Router>
        <div className="container">
            <Routes />
        </div>
    </Router>
);

export default App;
