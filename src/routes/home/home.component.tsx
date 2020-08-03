import { gql, useQuery } from '@apollo/client';
import React from 'react';

const GET_MARKET = gql`
    query PageAssets {
        assets(sort: [{ marketCapRank: ASC }], page: { limit: 25 }) {
            id
            assetName
            assetSymbol
            marketCap
            markets {
                marketSymbol
                baseSymbol
                exchangeSymbol
                ticker {
                    lastPrice
                    highPrice
                    lowPrice
                    percentChange
                }
            }
        }
    }
`;

const Home: React.FC = () => {
    const { loading, data } = useQuery(GET_MARKET);

    return loading ? <p>Loading...</p> : <div>{'data'}</div>;
};

export default Home;
