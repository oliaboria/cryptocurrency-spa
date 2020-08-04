import React from 'react';

import './_header.scss';

import Search from '../search';

type PtopTypes = {
    onSubmit: () => void;
};

const Header: React.FC<PtopTypes> = (props: PtopTypes) => {
    const { onSubmit } = props;

    return (
        <header className="header">
            <div className="header-container">
                <a href="/" className="logo">
                    Cryptocurrency Market
                </a>
                <Search onSubmit={onSubmit} />
            </div>
        </header>
    );
};

export default Header;
