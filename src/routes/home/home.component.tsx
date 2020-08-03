import { gql, useQuery } from '@apollo/client';
import React from 'react';

import './_home.scss';

import Card from '../../components/card';

import CurrencyTable from './currency-table';
import { CurrencyAPI } from './home.types';

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

const headers = ['Name', 'Pair', 'Market Cap', 'Average Last Price'];

type PropTypes = {
    data: CurrencyAPI;
    loading: boolean;
};

const Home: React.FC = () => {
    const { loading, data } = useQuery(GET_MARKET);

    return loading ? null : (
        <Card>
            <div className="scrollable table-wrapper">
                <CurrencyTable headers={headers} currency={data.assets} />
            </div>
            <div className="pagination">
                <div>View</div>
                <div className="clickable">25</div>
                <div className="clickable">50</div>
                <div className="clickable">All</div>
            </div>
        </Card>
    );
};

export default Home;
