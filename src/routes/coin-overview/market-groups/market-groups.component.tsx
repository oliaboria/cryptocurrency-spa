import { groupBy, map } from 'lodash';
import React from 'react';

import './_market-groups.scss';

import { MarketType } from '../../../types';
import Market from '../market';

type PropTypes = {
    market: MarketType[];
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
                        <div className="grop-content">
                            {map(group, (item, index) => {
                                const uniqKey = item.marketSymbol + index;

                                return <Market item={item} key={uniqKey} />;
                            })}
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default MarketGroups;
