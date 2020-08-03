import React from 'react';

import './_search.scss';

const Search: React.FC = () => {
    return (
        <form className="search">
            <label>
                <input
                    type="text"
                    className="input"
                    placeholder="Search cryptocurrency, rates and prices"
                />
            </label>
        </form>
    );
};

export default Search;
