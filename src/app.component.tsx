import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './app.css';

import Header from './components/header';
import Routes from './routes';

const App: React.FC = () => (
    <Router>
        <Header />
        <Routes />
    </Router>
);

export default App;
