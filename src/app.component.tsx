import React from 'react';

import './app.css';

import AppRouter from './routes';

const App: React.FC = () => (
    <div className="app-container">
        <AppRouter />
    </div>
);

export default App;
