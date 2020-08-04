import React from 'react';
import { Link } from 'react-router-dom';

import './_currency-table.scss';

import dollarFormat from '../../../utils/dollar-currency-format';
import { Currency } from '../home.types';

type PropTypes = {
    headers: string[];
    currency: Currency[];
};

const CurrencyTable: React.FC<PropTypes> = (props: PropTypes) => {
    const { headers, currency } = props;

    return currency ? (
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
                    const {
                        assetName,
                        marketCap,
                        id,
                        totalSupply,
                        assetSymbol,
                    } = item;

                    return (
                        <Link to={`/coin/${id}`} key={id}>
                            <tr>
                                <td>{assetName}</td>
                                <td>{assetSymbol}</td>
                                <td>{dollarFormat(marketCap)}</td>
                                <td>{dollarFormat(totalSupply)}</td>
                            </tr>
                        </Link>
                    );
                })}
            </tbody>
        </table>
    ) : null;
};

export default CurrencyTable;
