import React from 'react';

import './_header.scss';

import Search from '../search';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-container">
                <a href="/" className="logo">
                    Cryptocurrency Market
                </a>
                <Search />
            </div>
        </header>
    );
};

export default Header;
