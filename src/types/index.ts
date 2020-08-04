export type TickerType = {
    highPrice: string;
    lastPrice: string;
    lowPrice: string;
    percentChange: string;
};

export type MarketType = {
    baseSymbol: string;
    exchangeSymbol: string;
    marketSymbol: string;
    ticker: TickerType;
};

export type CurrencyType = {
    assetName: string;
    assetSymbol: string;
    id: string;
    marketCap: number;
    totalSupply: number;
    markets: MarketType[];
};
