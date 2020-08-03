import { gql, useQuery } from '@apollo/client';
import React from 'react';

import Card from '../../components/card';

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

    return <Card />;
};

export default Home;
