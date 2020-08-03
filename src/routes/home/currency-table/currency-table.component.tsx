import React from 'react';

import './_currency-table.scss';

import { Currency } from '../home.types';

type PropTypes = {
    headers: string[];
    currency: Currency[];
};

const CurrencyTable: React.FC<PropTypes> = (props: PropTypes) => {
    const { headers, currency } = props;

    return (
        <table className="currency-table">
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={header + index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {currency.map((item: Currency) => {
                    const { assetName, marketCap, markets, id } = item;
                    // const {marketSymbol, ticker} = markets;

                    return (
                        <tr key={id}>
                            <td>{assetName}</td>
                            <td>pair</td>
                            <td>{marketCap}</td>
                            <td>price</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default CurrencyTable;
