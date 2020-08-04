export interface CurrencyAPI {
    data: {
        assets: Currency[];
    };
}

export type Ticker = {
    highPrice: string;
    lastPrice: string;
    lowPrice: string;
    percentChange: string;
};

export type Market = {
    baseSymbol: string;
    exchangeSymbol: string;
    marketSymbol: string;
    ticker: Ticker;
};

export type Currency = {
    assetName: string;
    assetSymbol: string;
    id: string;
    marketCap: number;
    totalSupply: number;
    markets: Market[];
};
