import React from 'react';
import { Link } from 'react-router-dom';

import Search from '../search';

type PtopTypes = {
    onSubmit?: () => void;
};

const Header: React.FC<PtopTypes> = (props: PtopTypes) => {
    const { onSubmit } = props;

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    Cryptocurrency Market
                </Link>
                <Search onSubmit={onSubmit} />
            </div>
        </header>
    );
};

export default Header;
