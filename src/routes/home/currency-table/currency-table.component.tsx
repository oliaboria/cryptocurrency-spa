import React from 'react';
import { useHistory } from 'react-router-dom';

import { CurrencyType } from '../../../types';
import dollarFormat from '../../../utils/dollar-currency-format';

type PropTypes = {
    headers: string[];
    currency: CurrencyType[];
};

const CurrencyTable: React.FC<PropTypes> = (props: PropTypes) => {
    const { headers, currency } = props;
    const history = useHistory();

    const onRowClick = (symbol: string) => {
        history.push(`/coin/${symbol}`);
    };

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
                {currency.map((item: CurrencyType) => {
                    const {
                        assetName,
                        marketCap,
                        id,
                        totalSupply,
                        assetSymbol,
                    } = item;

                    return (
                        <tr key={id} onClick={() => onRowClick(assetSymbol)}>
                            <td>{assetName}</td>
                            <td>{assetSymbol}</td>
                            <td>{dollarFormat(marketCap)}</td>
                            <td>{dollarFormat(totalSupply)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    ) : null;
};

export default CurrencyTable;
