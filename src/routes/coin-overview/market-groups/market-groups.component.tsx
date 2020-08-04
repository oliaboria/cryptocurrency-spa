import { groupBy, map } from 'lodash';
import React from 'react';

import './_market-groups.scss';

import Market from '../market';

type PropTypes = {
    market: [];
};

const MarketGroups: React.FC<PropTypes> = (props: PropTypes) => {
    const { market } = props;

    const groupedMarket = groupBy(market, 'exchangeSymbol');

    return (
        <>
            {map(groupedMarket, (group, key) => {
                return (
                    <div key={key}>
                        <h3 className="group-name">{key}</h3>
                        {map(group, (item, index) => {
                            const uniqKey = item.marketSymbol + index;

                            return <Market item={item} key={uniqKey} />;
                        })}
                    </div>
                );
            })}
        </>
    );
};

export default MarketGroups;
