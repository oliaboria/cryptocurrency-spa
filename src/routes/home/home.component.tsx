import { gql, useQuery } from '@apollo/client';
import React from 'react';

import './_home.scss';

import Card from '../../components/card';
import SomethingWentWrong from '../../components/something-went-wrong';
import Spinner from '../../components/spinner';

import CurrencyTable from './currency-table';

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

const Home: React.FC = () => {
    const { loading, data, error } = useQuery(GET_MARKET);

    return (
        <>
            {loading && <Spinner />}

            {!loading && !error && (
                <Card>
                    <div className="scrollable table-wrapper">
                        <CurrencyTable
                            headers={headers}
                            currency={data.assets}
                        />
                    </div>
                    <div className="pagination">
                        <div>View</div>
                        <div className="clickable">25</div>
                        <div className="clickable">50</div>
                        <div className="clickable">All</div>
                    </div>
                </Card>
            )}

            {error && <SomethingWentWrong />}
        </>
    );
};

export default Home;
