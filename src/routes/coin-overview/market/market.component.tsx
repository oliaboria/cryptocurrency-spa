import classnames from 'classnames';
import React from 'react';

import Card from '../../../components/card';
import calcPercent from '../../../utils/calc-percent';
import getMarketPair from '../../../utils/get-market-pair';

type PropTypes = {
    item: any;
};

const multiple = (price: number) => (price * 10000).toFixed(2);

const Market: React.FC<PropTypes> = (props: PropTypes) => {
    const { exchangeSymbol, ticker, marketSymbol, baseSymbol } = props.item;
    return ticker ? (
        <Card preview additionalClasses="padding">
            <div className="market-card">
                <div className="card-name">{exchangeSymbol}</div>
                <div className="main-row row">
                    <div className="symbol-section column">
                        <div className="text main-text">
                            {getMarketPair(marketSymbol)}
                        </div>
                        <div className="text sub-text">Pair</div>
                    </div>
                    <div className="column">
                        <div className="text main-text">{`${multiple(
                            ticker.lastPrice,
                        )}.${baseSymbol}`}</div>
                        <div className="text sub-text">Price</div>
                    </div>
                </div>
                <div className="price-row row">
                    <div className="column">
                        <div>{`${multiple(
                            ticker.lastPrice,
                        )}.${baseSymbol}`}</div>
                        <div className="sub-text">Last Price</div>
                    </div>
                    <div className="column">
                        <div
                            className={classnames({
                                positive: ticker.percentChange > 0,
                                negative: ticker.percentChange < 0,
                            })}>
                            {calcPercent(ticker.percentChange)}
                        </div>
                        <div className="sub-text">24 h Change</div>
                    </div>
                    <div className="column">
                        <div>{`${multiple(
                            ticker.lastPrice,
                        )}.${baseSymbol}`}</div>
                        <div className="sub-text">24 h Low</div>
                    </div>
                    <div className="column">
                        <div>{`${multiple(
                            ticker.highPrice,
                        )}.${baseSymbol}`}</div>
                        <div className="sub-text">24 h High</div>
                    </div>
                </div>
            </div>
        </Card>
    ) : null;
};

export default Market;
